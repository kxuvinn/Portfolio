import { NextResponse } from "next/server";

function pick<T>(obj: Record<string, string>, keys: string[]) {
  const out: Record<string, string> = {};
  for (const k of keys) if (obj[k]) out[k] = obj[k];
  return out as T;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) return NextResponse.json({ error: "Missing url" }, { status: 400 });

  try {
    const res = await fetch(url, { redirect: "follow" });
    const html = await res.text();

    // 매우 가벼운 OG 파서 (cheerio 없이 정규식으로)
    const metaTagRe = /<meta\s+([^>]+)>/gi;
    const attrRe = /(\w+)=["']?([^"']+)["']?/g;

    const og: Record<string, string> = {};
    let m: RegExpExecArray | null;
    while ((m = metaTagRe.exec(html))) {
      const tag = m[1];
      let a: RegExpExecArray | null;
      let prop = "", content = "";
      while ((a = attrRe.exec(tag))) {
        const key = a[1].toLowerCase();
        const val = a[2];
        if (key === "property" || key === "name") prop = val.toLowerCase();
        if (key === "content") content = val;
      }
      if (prop && content) og[prop] = content;
    }

    // 우선순위 있는 필드만 추려내기
    const data = {
      url,
      title: og["og:title"] || og["twitter:title"] || "",
      description: og["og:description"] || og["twitter:description"] || "",
      image: og["og:image"] || og["twitter:image"] || "",
      siteName: og["og:site_name"] || new URL(url).hostname,
    };

    return NextResponse.json(pick<typeof data>(data as any, ["url","title","description","image","siteName"]));
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch url" }, { status: 500 });
  }
}
