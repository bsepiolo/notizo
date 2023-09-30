import Link from "next/link";
import SignUpForm from "@/app/components/SignUpForm";
import Heading from "@/app/components/ui/Heading";
import { getLocale, Locales } from "@/app/[lang]/locales";
export default async function SignUp({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  const t = await getLocale(lang);
  type Translation = typeof t;

  return (
    <>
      <Heading>{t.sign_up.title}</Heading>
      <SignUpForm<Translation> t={t} />
      <p className="text-center mt-10">
        {t.sign_up.account_question}{" "}
        <Link href="/" className="text-blue font-medium hover:underline">
          {t.sign_up.sign_in_link}
        </Link>
      </p>
    </>
  );
}
