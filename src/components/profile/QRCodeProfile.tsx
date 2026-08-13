"use client";


import { QRCodeSVG } from "qrcode.react";


export default function QRCodeProfile({
  url,
}: {
  url: string;
}) {


  return (

    <div
      className="
      mt-8
      bg-white
      rounded-3xl
      p-6
      shadow-md
      text-center
      "
    >

      <h3
        className="
        text-lg
        font-bold
        text-[rgb(31,73,61)]
        mb-5
        "
      >
        QR پروفایل مدیر
      </h3>


      <div className="flex justify-center">

        <QRCodeSVG
          value={url}
          size={180}
        />

      </div>


      <p
        className="
        mt-4
        text-sm
        text-gray-500
        "
        dir="ltr"
      >
        {url}
      </p>


    </div>

  );

}