import Link from "next/link";

import {
  Handshake,
  Lightbulb,
  Network,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";


const values = [
  {
    number: "01",
    icon: Network,
    title: "شبکه‌ای از ارتباطات مؤثر",
    description:
      "ایجاد ارتباط میان بنیان‌گذاران، کارآفرینان و رهبران کسب‌وکار برای شکل‌گیری روابطی حرفه‌ای، هدفمند و ماندگار.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "انتقال تجربه‌های واقعی",
    description:
      "اشتراک تجربه‌ها، تصمیم‌ها و درس‌های عملی از مسیر رشد کسب‌وکار؛ دانشی که از دل تجربه واقعی شکل گرفته است.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "ساخت فرصت‌های مشترک",
    description:
      "ایجاد زمینه برای همکاری‌های راهبردی، سرمایه‌گذاری، توسعه بازار و شکل‌گیری پروژه‌هایی با ارزش مشترک.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "رشد پایدار و هوشمندانه",
    description:
      "تقویت مسیر رشد کسب‌وکارها با تبادل دانش، شناخت فرصت‌ها و استفاده مؤثر از ظرفیت یک شبکه حرفه‌ای.",
  },
] as const;


export default function Values() {
  return (
    <section
      id="values"
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-light
        px-6
        py-32
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-[320px]
          w-[320px]
          rounded-full
          bg-soft/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-28
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-gold/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            mb-20
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-gold
              "
            />

            <p
              dir="ltr"
              className="
                text-sm
                font-bold
                tracking-[0.14em]
                text-primary
              "
            >
              OUR VALUES
            </p>

            <span
              aria-hidden="true"
              className="
                h-px
                w-9
                bg-gold
              "
            />
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-[1.6]
              text-dark
              md:text-5xl
            "
          >
            ارزش‌هایی که
            <span className="text-primary">
              {" "}
              100Founders
            </span>
            {" "}
            را می‌سازند
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray
              md:text-[17px]
            "
          >
            این شبکه بر پایه ارتباطات واقعی، تجربه‌های قابل انتقال،
            همکاری‌های هدفمند و رشد مشترک شکل گرفته است؛ ارزش‌هایی که
            کیفیت هر تعامل را تعریف می‌کنند.
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-7
              h-[3px]
              w-14
              rounded-full
              bg-gold
            "
          />
        </div>


        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-dark/5
                  bg-white
                  p-8
                  shadow-[0_8px_28px_rgba(21,59,68,0.04)]

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-2
                  hover:border-gold/35
                  hover:shadow-[0_18px_42px_rgba(21,59,68,0.10)]
                "
              >
                {/* Top accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[3px]
                    origin-right
                    scale-x-0
                    bg-gold
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-x-100
                  "
                />

                {/* Number */}
                <span
                  dir="ltr"
                  className="
                    absolute
                    left-6
                    top-6
                    text-xs
                    font-extrabold
                    tracking-wider
                    text-dark/15
                    transition-all
                    duration-500
                    group-hover:text-gold/60
                  "
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    mb-8
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-light
                    text-primary

                    transition-all
                    duration-500
                    ease-out

                    group-hover:-translate-y-1
                    group-hover:rotate-[3deg]
                    group-hover:scale-110
                    group-hover:bg-gold
                    group-hover:text-dark
                    group-hover:shadow-[0_8px_22px_rgba(209,160,84,0.22)]
                  "
                >
                  <Icon
                    aria-hidden="true"
                    size={28}
                    strokeWidth={1.9}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-extrabold
                    leading-8
                    text-dark

                    transition-colors
                    duration-300

                    group-hover:text-primary
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-8
                    text-gray
                  "
                >
                  {item.description}
                </p>

                {/* Bottom interaction */}
                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-primary/0

                    transition-all
                    duration-500

                    group-hover:text-primary
                  "
                >
                  <span>
                    بیشتر بدانید
                  </span>

                  <ArrowLeft
                    aria-hidden="true"
                    size={14}
                    className="
                      translate-x-2
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>


        {/* Section CTA */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            gap-4
            text-center
          "
        >
          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-gray
            "
          >
            اگر به دنبال ارتباط با افرادی هستید که تجربه ساختن،
            تصمیم‌گیری و رشد را از نزدیک لمس کرده‌اند، 100Founders
            نقطه شروع این ارتباط است.
          </p>

          <Link
            href="/login"
            className="
              inline-flex
              h-12
              min-w-[180px]
              items-center
              justify-center
              rounded-lg
              bg-gold
              px-7
              text-sm
              font-bold
              text-dark

              shadow-[0_6px_18px_rgba(209,160,84,0.18)]

              transition-all
              duration-300
              ease-out

              hover:-translate-y-[2px]
              hover:scale-[1.025]
              hover:bg-gold/90
              hover:text-dark
              hover:shadow-[0_10px_24px_rgba(209,160,84,0.26)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-gold/50
              focus-visible:ring-offset-2
            "
          >
            ورود به شبکه
          </Link>
        </div>
      </div>
    </section>
  );
}