import "./globals.css";
import "eva-icons/style/eva-icons.css";
import { Roboto, Montserrat, Istok_Web } from "next/font/google";
import Toast from "@/components/Toast";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${istokWeb.variable} ${roboto.variable} font-sans`}
    >
      <body>
        <main className="min-h-screen flex flex-col">
          <div className="px-6 py-4 text-2xl font-istok-web">Notizo</div>
          <div className="flex justify-center flex-grow">
            <div className="flex flex-col w-full max-w-sm mt-[10vh] px-6">
              {children}
            </div>
            <Toast />
          </div>
        </main>
      </body>
    </html>
  );
}
