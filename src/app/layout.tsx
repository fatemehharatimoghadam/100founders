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

});


export const metadata: Metadata = {

  title: "100 CEOs",

  description:
    "شبکه مدیران ارشد برای توسعه، همکاری و ساخت آینده کسب‌وکار",

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
    >

      <body
        className={vazirmatn.variable}
      >

        {children}

      </body>

    </html>

  );

}
