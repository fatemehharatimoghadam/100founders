import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";


const vazirmatn = localFont({
  src: [
    {
      path: "../fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "100Founders",
    template: "%s | 100Founders",
  },

  description:
    "شبکه‌ای حرفه‌ای برای بنیان‌گذاران، کارآفرینان و رهبران کسب‌وکار با هدف ایجاد ارتباطات ارزشمند، انتقال تجربه و شکل‌گیری فرصت‌های همکاری و رشد.",

  keywords: [
    "100Founders",
    "بنیان‌گذاران",
    "کارآفرینان",
    "شبکه کسب‌وکار",
    "شبکه‌سازی حرفه‌ای",
    "رهبران کسب‌وکار",
    "رویدادهای کسب‌وکار",
  ],

  creator: "100Founders",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
      <body className={vazirmatn.variable}>
        {children}
      </body>
    </html>
  );
}