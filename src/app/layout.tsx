import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kanit = localFont({
  src: [
    {
      path: "../../public/fonts/Kanit/Kanit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kanit/Kanit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kanit",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "สวนไม่ลืม — ระบบจัดการสวน",
  description:
    "จดงานสวนง่ายๆ ไม่ต้องจำ ปล่อยให้ระบบดูแลคุณ คนอาจลืม…แต่สวนไม่ลืม ระบบจัดการสวนผลไม้ไทย ครบจบในที่เดียว รองรับการใช้งานมือถือ",
  keywords: [
    "ระบบจัดการสวน",
    "แอพทำสวน",
    "สวนผลไม้",
    "เกษตรกร",
    "จดงานสวน",
    "จัดการฟาร์ม",
    "สวนไม่ลืม",
    "suan mailuem",
  ],
  authors: [{ name: "Suan Mai Luem Team" }],
  creator: "Suan Mai Luem",
  publisher: "Suan Mai Luem",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://suan.nomem.app",
    siteName: "สวนไม่ลืม (Suan Mai Luem)",
    title: "สวนไม่ลืม — ระบบจัดการสวน",
    description:
      "จดงานสวนง่ายๆ ไม่ต้องจำ ปล่อยให้ระบบดูแลคุณ คนอาจลืม…แต่สวนไม่ลืม",
    images: [
      {
        url: "https://suan.nomem.app/logo.PNG", // Assuming we use logo for now
        width: 1200,
        height: 630,
        alt: "โลโก้ สวนไม่ลืม",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "สวนไม่ลืม — ระบบจัดการสวน",
    description: "จดงานสวนง่ายๆ ไม่ต้องจำ ปล่อยให้ระบบดูแลคุณ",
    images: ["https://suan.nomem.app/logo.PNG"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "fjjednn1dqHaLSMmOCEXzAgb0t2KtYnGEdMDUMc0BSk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data สำหรับ SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "สวนไม่ลืม (Suan Mai Luem)",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    description:
      "จดงานสวนง่ายๆ ไม่ต้องจำ ปล่อยให้ระบบดูแลคุณ คนอาจลืม…แต่สวนไม่ลืม ระบบจัดการสวนผลไม้ไทย",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "THB",
    },
  };

  return (
    <html lang="th">
      <body className={`${kanit.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
