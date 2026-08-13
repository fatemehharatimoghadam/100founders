import Link from "next/link";

const ABOUT_FEATURES = [
  {
    number: "01",
    title: "ارتباطات ارزشمند",
    description:
      "ساخت ارتباط مستقیم با بنیان‌گذاران، کارآفرینان و تصمیم‌سازانی که می‌توانند مسیرهای تازه‌ای برای رشد ایجاد کنند.",
  },
  {
    number: "02",
    title: "تجربه‌های واقعی",
    description:
      "دسترسی به تجربه‌های عملی، تصمیم‌های کلیدی و درس‌هایی که در مسیر ساخت و توسعه کسب‌وکار شکل گرفته‌اند.",
  },
  {
    number: "03",
    title: "فرصت‌های مشترک",
    description:
      "ایجاد زمینه برای همکاری‌های راهبردی، سرمایه‌گذاری، توسعه بازار و شکل‌گیری پروژه‌های مشترک.",
  },
] as const;

export default function About() {
  return (
    <section
      id="about"
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-light
        px-6
        py-24
        sm:px-8
        md:py-28
        lg:px-10
        lg:py-32
        xl:px-14
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-[340px]
          w-[340px]
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
          -left-24
          bottom-0
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
          grid
          max-w-7xl
          gap-14
          lg:grid-cols-[0.95fr_1.05fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* Content */}
        <div>
          <div
            className="
              mb-6
              flex
              items-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-10
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
              ABOUT 100FOUNDERS
            </p>
          </div>

          <h2
            className="
              max-w-[650px]
              text-3xl
              font-extrabold
              leading-[1.65]
              text-dark
              sm:text-4xl
              md:text-[44px]
              md:leading-[1.6]
            "
          >
            شبکه‌ای برای کسانی که
            <span className="text-primary">
              {" "}
              می‌سازند،
            </span>
            {" "}
            رشد می‌دهند و آینده را شکل می‌دهند
          </h2>

          <div
            aria-hidden="true"
            className="
              mt-7
              h-[3px]
              w-16
              rounded-full
              bg-gold
            "
          />

          <p
            className="
              mt-7
              max-w-[690px]
              text-base
              leading-[2.1]
              text-gray
              sm:text-[17px]
            "
          >
            <span
              dir="ltr"
              className="
                font-bold
                text-dark
              "
            >
              100Founders
            </span>
            {" "}
            یک شبکه حرفه‌ای برای بنیان‌گذاران، کارآفرینان و رهبران
            کسب‌وکار است؛ فضایی برای شکل‌گیری ارتباطات معتبر، تبادل
            تجربه‌های واقعی و ساخت همکاری‌هایی که فراتر از یک آشنایی
            ساده، به فرصت‌های قابل اجرا تبدیل می‌شوند.
          </p>

          <p
            className="
              mt-5
              max-w-[690px]
              text-base
              leading-[2.1]
              text-gray
              sm:text-[17px]
            "
          >
            هدف ما ایجاد یک جامعه منتخب و اثرگذار است؛ جایی که افراد
            هم‌سطح بتوانند درباره چالش‌ها، تصمیم‌ها، رشد و آینده
            کسب‌وکار با یکدیگر گفتگو کنند و از ظرفیت شبکه برای حرکت
            سریع‌تر و هوشمندانه‌تر استفاده کنند.
          </p>

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <Link
              href="/about"
              className="
                inline-flex
                h-12
                min-w-[165px]
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
              بیشتر درباره 100Founders
            </Link>

            <p
              className="
                text-sm
                font-medium
                text-gray/80
              "
            >
              ارتباط · تجربه · همکاری · رشد
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-1
          "
        >
          {ABOUT_FEATURES.map((feature) => (
            <article
              key={feature.number}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-dark/8
                bg-white/85
                p-6
                shadow-[0_8px_30px_rgba(21,59,68,0.05)]
                backdrop-blur-sm
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-gold/35
                hover:shadow-[0_14px_38px_rgba(21,59,68,0.09)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-y-0
                  right-0
                  w-1
                  bg-gold
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  flex
                  items-start
                  gap-5
                "
              >
                <span
                  dir="ltr"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-light
                    text-xs
                    font-extrabold
                    text-gold
                    transition-all
                    duration-300
                    group-hover:bg-gold
                    group-hover:text-dark
                  "
                >
                  {feature.number}
                </span>

                <div>
                  <h3
                    className="
                      text-lg
                      font-extrabold
                      text-dark
                      transition-colors
                      duration-300
                      group-hover:text-primary
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-gray
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <div
            className="
              hidden
              rounded-2xl
              border
              border-gold/20
              bg-dark
              p-6
              text-white
              sm:block
              lg:block
            "
          >
            <p
              className="
                text-sm
                font-medium
                leading-8
                text-white/70
              "
            >
              در 100Founders، ارزش شبکه فقط در تعداد اعضا نیست؛
              در کیفیت ارتباط‌هایی است که می‌توانند به تصمیم،
              همکاری و نتیجه واقعی تبدیل شوند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}