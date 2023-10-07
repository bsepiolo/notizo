import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { Database } from "@/types/supabase";
import type { NextRequest } from "next/server";

const locales = ["en", "pl"];
export const defaultLocale = "en";

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
}
export async function middleware(req: NextRequest) {
  const locale = getLocale(req) ?? defaultLocale;
  const pathname = req.nextUrl.pathname;

  const newUrl = new URL(`/${locale}${pathname}`, req.nextUrl);
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient<Database>({ req, res });

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      return NextResponse.rewrite(newUrl);
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
