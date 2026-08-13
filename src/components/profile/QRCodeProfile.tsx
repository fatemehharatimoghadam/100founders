"use client";

import {
  Check,
  Copy,
  QrCode,
  Share2,
} from "lucide-react";

import { useState } from "react";

import { QRCodeSVG } from "qrcode.react";


export default function QRCodeProfile({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  const [copied, setCopied] = useState(false);


  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }


  async function shareProfile() {
    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({
        title: `${name} | 100Founders`,
        text: `پروفایل ${name} در شبکه 100Founders`,
        url,
      });
    } catch {
      // User cancelled share
    }
  }


  return (
    <aside
      className="
        sticky
        top-[104px]
        overflow-hidden
        rounded-[30px]
        border
        border-dark/5
        bg-white

        shadow-[0_16px_50px_rgba(21,59,68,0.07)]
      "
    >
      {/* Header */}

      <div
        className="
          bg-dark
          px-6
          py-6
          text-white
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gold/10
              text-gold
            "
          >
            <QrCode size={20} />
          </div>

          <div>
            <h2
              className="
                text-base
                font-black
              "
            >
              QR پروفایل
            </h2>

            <p
              className="
                mt-1
                text-xs
                text-white/45
              "
            >
              اشتراک سریع پروفایل
            </p>
          </div>
        </div>
      </div>


      {/* QR */}

      <div className="p-7">
        <div
          className="
            mx-auto
            flex
            aspect-square
            max-w-[230px]
            items-center
            justify-center
            rounded-[28px]
            border
            border-dark/5
            bg-white
            p-5

            shadow-[0_8px_25px_rgba(21,59,68,0.05)]
          "
        >
          {url && (
            <QRCodeSVG
              value={url}
              size={190}
              level="H"
              marginSize={1}
            />
          )}
        </div>


        <p
          className="
            mt-5
            text-center
            text-sm
            font-bold
            text-dark
          "
        >
          {name}
        </p>

        <p
          className="
            mt-2
            text-center
            text-xs
            leading-6
            text-gray
          "
        >
          برای مشاهده پروفایل، QR Code را با دوربین موبایل اسکن کنید.
        </p>


        {/* URL */}

        <div
          className="
            mt-5
            overflow-hidden
            rounded-xl
            bg-light
            px-4
            py-3
          "
        >
          <p
            dir="ltr"
            className="
              truncate
              text-center
              text-[11px]
              text-gray
            "
          >
            {url}
          </p>
        </div>


        {/* Actions */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-3
          "
        >
          <button
            type="button"
            onClick={copyLink}
            className="
              btn
              h-11
              min-h-11
              rounded-xl
              border
              border-dark/10
              bg-white
              text-xs
              font-bold
              text-dark

              transition-all
              duration-300

              hover:border-primary/20
              hover:bg-light
            "
          >
            {copied ? (
              <>
                <Check
                  size={15}
                  className="text-primary"
                />

                کپی شد
              </>
            ) : (
              <>
                <Copy size={15} />

                کپی لینک
              </>
            )}
          </button>


          <button
            type="button"
            onClick={shareProfile}
            className="
              btn
              h-11
              min-h-11
              rounded-xl
              border-0
              bg-gold
              text-xs
              font-bold
              text-dark

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-gold/90
              hover:text-dark
            "
          >
            <Share2 size={15} />

            اشتراک‌گذاری
          </button>
        </div>
      </div>
    </aside>
  );
}