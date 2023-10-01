import Link from "next/link";
import Heading from "@/app/components/ui/Heading";
import { getLocale, Locales } from "@/app/[lang]/locales";
import Button from "@/app/components/ui/Button";
export default async function CheckEmail({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  const { check_email } = await getLocale(lang);
  return (
    <>
      <Heading>{check_email.title}</Heading>
      <p className="mb-10">{check_email.content}</p>
      <Button to="/">{check_email.button}</Button>
    </>
  );
}
