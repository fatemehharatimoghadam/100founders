import Link from "next/link";

import {
  ArrowLeft,
  Clock3,
  Headphones,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

import Footer from "@/components/layout/Footer";


const contactItems = [
  {
    label: "تلفن",
    value: "02191035274",
    href: "tel:02191035274",
    icon: Phone,
  },
  {
    label: "ایمیل",
    value: "info@100ceos.ir",
    href: "mailto:info@100ceos.ir",
    icon: Mail,
  },
  {
    label: "اینستاگرام",
    value: "@100.ceos.ir",
    href: "https://instagram.com/100.ceos.ir",
    icon: Instagram,
  },
] as const;


export default function ContactPage() {
  return (
    <>
      <main
        dir="rtl"
        className="
          min-h-screen
          bg-light
        "
      >
        <section
          className="
            relative
            overflow-hidden
            px-6
            py-20
            md:py-24
            lg:py-28
          "
        >
          {/* Decorative Dots */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-8
              top-8
              h-24
              w-24
              opacity-30
              [background-image:radial-gradient(circle,var(--color-gold)_1.5px,transparent_1.5px)]
              [background-size:12px_12px]
            "
          />

          {/* Decorative Circle */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-20
              bottom-[-80px]
              h-72
              w-72
              rounded-full
              border
              border-dark/5
            "
          />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-36
              top-[30%]
              h-[360px]
              w-[360px]
              rounded-full
              bg-soft/20
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
                  className="h-px w-9 bg-gold"
                />

                <p
                  dir="ltr"
                  className="
                    text-xs
                    font-bold
                    tracking-[0.14em]
                    text-gold
                  "
                >
                  CONTACT 100FOUNDERS
                </p>

                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-gold"
                />
              </div>

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-[1.5]
                  text-dark
                  md:text-5xl
                  lg:text-[58px]
                "
              >
                با ما در{" "}
                <span className="text-gold">
                  ارتباط
                </span>{" "}
                باشید
              </h1>

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
                برای دریافت اطلاعات بیشتر درباره عضویت، همکاری‌ها،
                رویدادها و ارتباط با تیم 100Founders می‌توانید از
                راه‌های ارتباطی زیر استفاده کنید.
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


            {/* Contact Cards */}
            <div
              className="
                mt-14
                grid
                gap-6
                md:grid-cols-3
              "
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-dark/5
                      bg-white
                      p-8
                      text-center

                      shadow-[0_10px_32px_rgba(21,59,68,0.05)]

                      transition-all
                      duration-500
                      ease-out

                      hover:-translate-y-2
                      hover:border-gold/35
                      hover:shadow-[0_18px_42px_rgba(21,59,68,0.10)]
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-x-0
                        top-0
                        h-[3px]
                        origin-right
                        scale-x-0
                        bg-gold
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                    />

                    <div
                      className="
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-dark
                        text-gold

                        shadow-[0_8px_22px_rgba(21,59,68,0.14)]

                        transition-all
                        duration-500

                        group-hover:-translate-y-1
                        group-hover:scale-110
                        group-hover:bg-gold
                        group-hover:text-dark
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        size={27}
                      />
                    </div>

                    <h2
                      className="
                        mt-6
                        text-lg
                        font-extrabold
                        text-dark
                      "
                    >
                      {item.label}
                    </h2>

                    <p
                      dir="ltr"
                      className="
                        mt-3
                        text-base
                        font-medium
                        text-gray

                        transition-colors
                        duration-300

                        group-hover:text-primary
                      "
                    >
                      {item.value}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-xs
                        font-bold
                        text-primary/0

                        transition-all
                        duration-500

                        group-hover:text-primary
                      "
                    >
                      مشاهده / ارتباط

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
                  </a>
                );
              })}
            </div>


            {/* Support Panel */}
            <div
              className="
                relative
                mt-12
                overflow-hidden
                rounded-[32px]
                bg-dark
                px-7
                py-8
                text-white

                shadow-[0_18px_50px_rgba(21,59,68,0.14)]

                md:px-10
                md:py-10
              "
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-gold/10
                  blur-3xl
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  left-[15%]
                  h-72
                  w-72
                  rounded-full
                  bg-primary/20
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  gap-8
                  text-center

                  md:flex-row
                  md:justify-between
                  md:text-right
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      md:justify-start
                    "
                  >
                    <Headphones
                      aria-hidden="true"
                      size={20}
                      className="text-gold"
                    />

                    <p
                      className="
                        text-sm
                        font-bold
                        text-gold
                      "
                    >
                      ارتباط مستقیم با تیم
                    </p>
                  </div>

                  <h2
                    className="
                      mt-4
                      text-2xl
                      font-extrabold
                      leading-9
                      md:text-3xl
                    "
                  >
                    پاسخ‌گوی شما هستیم
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/60
                      md:text-base
                    "
                  >
                    برای پرسش‌های مربوط به عضویت، دعوت‌نامه، رویدادها
                    یا همکاری با 100Founders، از طریق راه‌های ارتباطی
                    بالا با تیم ما در تماس باشید.
                  </p>
                </div>

                <div
                  className="
                    flex
                    shrink-0
                    flex-col
                    items-center
                    gap-4
                    md:items-end
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/60
                    "
                  >
                    <Clock3
                      aria-hidden="true"
                      size={16}
                      className="text-gold"
                    />

                    شنبه تا چهارشنبه
                  </div>

                  <div
                    className="
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    ۹ صبح تا ۶ عصر
                  </div>

                  <a
                    href="tel:02191035274"
                    className="
                      group
                      inline-flex
                      h-12
                      min-w-[190px]
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-gold
                      px-7
                      text-sm
                      font-bold
                      text-dark

                      shadow-[0_8px_24px_rgba(209,160,84,0.18)]

                      transition-all
                      duration-300

                      hover:-translate-y-[2px]
                      hover:bg-gold/90
                      hover:text-dark
                      hover:shadow-[0_12px_30px_rgba(209,160,84,0.28)]
                    "
                  >
                    تماس با تیم

                    <ArrowLeft
                      aria-hidden="true"
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    />
                  </a>
                </div>
              </div>
            </div>


            {/* Back Home */}
            <div className="mt-9 text-center">
              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-primary

                  transition-all
                  duration-300

                  hover:-translate-x-1
                  hover:text-dark
                "
              >
                بازگشت به صفحه اصلی

                <ArrowLeft
                  aria-hidden="true"
                  size={16}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}