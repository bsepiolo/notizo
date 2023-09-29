import "@/app/globals.css";
import "eva-icons/style/eva-icons.css";
import { Roboto, Montserrat, Istok_Web } from "next/font/google";
import Toast from "@/app/components/ui/Toast";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-montserrat",
});

const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-istok-web",
});

const metadata = {
  title: "Notizo",
  description: "Your last note taking app",
};
export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html
      lang={lang}
      className={`${montserrat.variable} ${istokWeb.variable} ${roboto.variable} font-sans`}
    >
      <body>
        <main className="min-h-screen flex flex-col">
          {children}
          <Toast />
        </main>
      </body>
    </html>
  );
}
