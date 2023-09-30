import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getLocale, Locales } from "@/app/[lang]/locales";

const getData = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("categories").select("*");
  return data;
};

export default async function Dashboard({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  const t = await getLocale(lang);
  const data = await getData();

  return (
    <>
      {t.form_fields.email_placeholder}
      {data?.map((category) => {
        return <div>{category.name}</div>;
      })}
    </>
  );
}
