import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { Header } from "@/components/header/header.component";
import { Footer } from "@/components/footer/footer.component";

import "./globals.css";
import "@/styles/typography.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "پلتفرم نوبت دهی آنلاین",
  description: "پلتفرم جستجو خدمات پزشکی رزرو و نوبت دهی آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagline">
          این یک پلتفرم جستجو خدمات پزشکی رزرو و نوبت دهی آنلاین است.
        </p>
        <Footer />
      </body>
    </html>
  );
}
