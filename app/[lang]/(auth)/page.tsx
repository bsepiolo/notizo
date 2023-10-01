import Link from "next/link";
import SignInForm from "@/app/components/SignInForm";
import Heading from "@/app/components/ui/Heading";
import { getLocale, Locales } from "@/app/[lang]/locales";
export default async function SignIn({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  const t = await getLocale(lang);
  type Translation = typeof t;
  return (
    <>
      <Heading>{t.sign_in.title}</Heading>
      <SignInForm<Translation> t={t} />
      <p className="text-center mt-10">
        {t.sign_in.account_question}{" "}
        <Link href="/sign-up" className="text-blue font-medium hover:underline">
          {t.sign_in.sign_up_link}
        </Link>
      </p>
    </>
  );
}
