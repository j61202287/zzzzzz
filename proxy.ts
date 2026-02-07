import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedReferers = [
  "/api/",
  "https://www.zxcprime.icu/",
  "https://zxcprime.icu/",
  "https://www.zxcprime.site/",
  "https://zxcprime.site/",
];

export function proxy(req: NextRequest) {
  const referer = req.headers.get("referer") || "";
  const origin = req.headers.get("origin") || "";

  console.log("🧩 Middleware hit:", req.nextUrl.pathname);
  console.log("➡️ Referer:", referer || "NONE");
  console.log("➡️ Origin:", origin || "NONE");

  const allowed = allowedReferers.some(
    (url) => referer.includes(url) || origin.includes(url),
  );

  console.log("✅ Allowed:", allowed);

  if (!allowed) {
    console.log("⛔ BLOCKED REQUEST");
    return NextResponse.json(
      { success: false, error: "Forbidden" },
      { status: 403 },
    );
  }

  console.log("🟢 Request passed");
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
