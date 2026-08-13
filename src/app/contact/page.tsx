import Link from "next/link";

import {
  ArrowLeft,
  Clock3,
  Headphones,
  Instagram,
  Mail,
  MessageSquareText,
  PenLine,
  Phone,
  Send,
  User,
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
        {/* ========================================
            HERO / CONTACT AREA
        ======================================== */}
        <section
          className="
            relative
            overflow-hidden
            px-6
            py-16
            md:py-20
            lg:py-24
          "
        >
          {/* Decorative dots */}
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

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-10
              left-0
              h-56
              w-56
              rounded-full
              border
              border-dark/5
            "
          />

          <div
            className="
              relative
              mx-auto
              grid
              max-w-7xl
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-16
            "
          >
            {/* CONTACT INFO */}
            <div
              className="
                flex
                flex-col
                justify-center
              "
            >
              <div
                className="
                  flex
                  items-center
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
              </div>

              <h1
                className="
                  mt-5
                  max-w-md
                  text-4xl
                  font-black
                  leading-[1.5]
                  text-dark
                  md:text-5xl
                  lg:text-[56px]
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
                  mt-6
                  max-w-md
                  text-base
                  leading-8
                  text-gray
                "
              >
                برای دریافت اطلاعات بیشتر، همکاری یا هرگونه سؤال،
                می‌توانید از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
                تیم ما در سریع‌ترین زمان پاسخ‌گوی شما خواهد بود.
              </p>


              {/* Contact list */}
              <div className="mt-8 space-y-1">
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
                        flex
                        items-center
                        justify-between
                        gap-5
                        border-b
                        border-dark/10
                        py-5
                        transition-all
                        duration-300
                        hover:border-gold/40
                      "
                    >
                      <div>
                        <p
                          className="
                            text-sm
                            font-bold
                            text-dark
                          "
                        >
                          {item.label}
                        </p>

                        <p
                          dir="ltr"
                          className="
                            mt-1
                            text-base
                            font-medium
                            text-dark
                            transition-colors
                            duration-300
                            group-hover:text-primary
                          "
                        >
                          {item.value}
                        </p>
                      </div>

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-dark
                          text-gold
                          shadow-[0_8px_20px_rgba(21,59,68,0.14)]
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:scale-105
                          group-hover:bg-gold
                          group-hover:text-dark
                        "
                      >
                        <Icon
                          aria-hidden="true"
                          size={21}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>


              {/* Availability */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-gray
                "
              >
                <Clock3
                  aria-hidden="true"
                  size={15}
                  className="text-gray"
                />

                شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر
              </div>


              {/* Chat CTA */}
              <Link
                href="/contact"
                className="
                  group
                  mt-6
                  inline-flex
                  h-12
                  w-full
                  max-w-sm
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-dark
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_24px_rgba(21,59,68,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-footer
                  hover:shadow-[0_12px_30px_rgba(21,59,68,0.22)]
                "
              >
                <Headphones
                  aria-hidden="true"
                  size={18}
                  className="text-gold"
                />

                گفت‌وگوی آنلاین

                <ArrowLeft
                  aria-hidden="true"
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
              </Link>
            </div>


            {/* FORM */}
            <div
              className="
                rounded-[30px]
                border
                border-dark/5
                bg-white
                p-6
                shadow-[0_18px_50px_rgba(21,59,68,0.08)]
                md:p-8
                lg:p-10
              "
            >
              <div className="text-center">
                <h2
                  className="
                    text-2xl
                    font-black
                    text-dark
                    md:text-3xl
                  "
                >
                  ارسال پیام
                </h2>

                <div
                  aria-hidden="true"
                  className="
                    mx-auto
                    mt-4
                    h-[2px]
                    w-12
                    rounded-full
                    bg-gold
                  "
                />
              </div>


              <form
                className="
                  mt-8
                  grid
                  gap-5
                  md:grid-cols-2
                "
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-dark
                    "
                  >
                    نام و نام خانوادگی
                  </label>

                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="نام خود را وارد کنید"
                      className="
                        input
                        input-bordered
                        h-12
                        w-full
                        rounded-xl
                        border-border
                        bg-white
                        pe-11
                        text-dark
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />

                    <User
                      aria-hidden="true"
                      size={17}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray
                      "
                    />
                  </div>
                </div>


                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-dark
                    "
                  >
                    ایمیل
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      dir="ltr"
                      placeholder="example@gmail.com"
                      className="
                        input
                        input-bordered
                        h-12
                        w-full
                        rounded-xl
                        border-border
                        bg-white
                        pe-11
                        text-left
                        text-dark
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />

                    <Mail
                      aria-hidden="true"
                      size={17}
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray
                      "
                    />
                  </div>
                </div>


                {/* Subject */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-dark
                    "
                  >
                    موضوع
                  </label>

                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="موضوع پیام خود را وارد کنید"
                      className="
                        input
                        input-bordered
                        h-12
                        w-full
                        rounded-xl
                        border-border
                        bg-white
                        pe-11
                        text-dark
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />

                    <MessageSquareText
                      aria-hidden="true"
                      size={17}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray
                      "
                    />
                  </div>
                </div>


                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-bold
                      text-dark
                    "
                  >
                    پیام شما
                  </label>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="پیام خود را بنویسید..."
                      className="
                        textarea
                        textarea-bordered
                        min-h-40
                        w-full
                        resize-none
                        rounded-xl
                        border-border
                        bg-white
                        pe-11
                        text-dark
                        transition-all
                        duration-300
                        focus:border-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />

                    <PenLine
                      aria-hidden="true"
                      size={17}
                      className="
                        absolute
                        left-4
                        top-4
                        text-gray
                      "
                    />
                  </div>
                </div>


                {/* Submit */}
                <div
                  className="
                    md:col-span-2
                    flex
                    justify-end
                  "
                >
                  <button
                    type="submit"
                    className="
                      btn
                      group
                      h-12
                      min-h-12
                      min-w-[190px]
                      rounded-xl
                      border-0
                      bg-dark
                      px-7
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_8px_22px_rgba(21,59,68,0.16)]
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:bg-footer
                      hover:text-white
                      hover:shadow-[0_12px_28px_rgba(21,59,68,0.24)]
                    "
                  >
                    <Send
                      aria-hidden="true"
                      size={17}
                      className="text-gold"
                    />

                    ارسال پیام

                    <ArrowLeft
                      aria-hidden="true"
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}