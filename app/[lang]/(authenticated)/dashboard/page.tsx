import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getLocale, Locales } from "@/app/[lang]/locales";

export default async function Dashboard({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  return <>asdasd</>;
}
