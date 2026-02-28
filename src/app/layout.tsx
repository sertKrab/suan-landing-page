import type { Metadata } from "next";
import { Kanit, Inter } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "สวนไม่ลืม — ระบบจัดการสวนผลไม้",
  description:
    "จดงานสวนง่ายๆ ไม่ต้องจำ ปล่อยให้ระบบดูแลคุณ คนอาจลืม…แต่สวนไม่ลืม ระบบจัดการสวนผลไม้ไทย PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
