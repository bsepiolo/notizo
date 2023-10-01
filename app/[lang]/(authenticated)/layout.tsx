import SideBar from "@/app/components/SideBar";
import { Locales } from "@/app/[lang]/locales";

export default async function AuthenticatedLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locales };
}) {
  return (
    <div className="h-screen">
      <SideBar />
      {children}
    </div>
  );
}
