"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Headphones,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";


const questions = [
  {
    question: "100Founders چیست؟",
    answer:
      "100Founders یک شبکه حرفه‌ای برای بنیان‌گذاران، کارآفرینان و رهبران کسب‌وکار است که با هدف ایجاد ارتباطات معتبر، انتقال تجربه‌های واقعی و شکل‌گیری فرصت‌های همکاری و رشد ایجاد شده است.",
  },
  {
    question: "چه کسانی می‌توانند عضو شبکه باشند؟",
    answer:
      "عضویت برای بنیان‌گذاران، کارآفرینان، مدیران عامل و رهبران کسب‌وکاری طراحی شده که تجربه ساخت یا توسعه یک مجموعه را دارند و به دنبال ارتباطات حرفه‌ای و همکاری‌های مؤثر هستند.",
  },
  {
    question: "چگونه می‌توان به 100Founders پیوست؟",
    answer:
      "فرآیند ورود با ثبت اطلاعات اولیه آغاز می‌شود. پس از بررسی اطلاعات و تأیید شرایط عضویت، امکان تکمیل پروفایل و ورود به شبکه برای فرد فراهم خواهد شد.",
  },
  {
    question: "دعوت‌نامه 100Founders چگونه دریافت می‌شود؟",
    answer:
      "پس از ثبت درخواست و بررسی اطلاعات حرفه‌ای، در صورت تأیید، دعوت‌نامه عضویت یا حضور در رویدادهای منتخب برای متقاضی صادر خواهد شد.",
  },
  {
    question: "پروفایل اعضا شامل چه اطلاعاتی است؟",
    answer:
      "پروفایل اعضا شامل اطلاعات فردی و حرفه‌ای، برند یا کسب‌وکار، حوزه فعالیت و معرفی کوتاهی از تجربه و زمینه‌های همکاری فرد است.",
  },
  {
    question: "چگونه می‌توان در رویدادهای شبکه شرکت کرد؟",
    answer:
      "اطلاعات رویدادهای 100Founders از طریق بخش رویدادها منتشر می‌شود. اعضا می‌توانند جزئیات هر برنامه، زمان و محل برگزاری و شرایط حضور را از صفحه اختصاصی رویداد مشاهده کنند.",
  },
] as const;


export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-light
        px-6
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-16
          h-96
          w-96
          rounded-full
          border-[70px]
          border-white/50
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          border-[90px]
          border-white/35
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[35%]
          h-[280px]
          w-[280px]
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
          -left-20
          top-[20%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-gold/10
          blur-3xl
        "
      />

      {/* Watermark */}
      <div
        aria-hidden="true"
        dir="ltr"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          select-none
          text-[180px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-dark/[0.025]
          md:text-[260px]
        "
      >
        FAQ
      </div>


      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        <div
          dir="ltr"
          className="
            grid
            items-start
            gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >
          {/* =====================================
              QUESTIONS
          ====================================== */}
          <div
            dir="rtl"
            className="
              order-2
              lg:order-1
            "
          >
            <div className="space-y-4">
              {questions.map((item, index) => {
                const isOpen = active === index;
                const answerId = `faq-answer-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <article
                    key={item.question}
                    className={`
                      group
                      collapse
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      bg-white

                      transition-all
                      duration-500
                      ease-out

                      ${
                        isOpen
                          ? `
                            collapse-open
                            border-gold/40
                            shadow-[0_14px_40px_rgba(21,59,68,0.09)]
                          `
                          : `
                            border-dark/5
                            shadow-[0_6px_20px_rgba(21,59,68,0.035)]
                            hover:-translate-y-0.5
                            hover:border-primary/15
                            hover:shadow-[0_12px_30px_rgba(21,59,68,0.07)]
                          `
                      }
                    `}
                  >
                    {/* Active top line */}
                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        left-0
                        right-0
                        top-0
                        z-20
                        h-[3px]
                        origin-right
                        bg-gold

                        transition-transform
                        duration-500
                        ease-out

                        ${
                          isOpen
                            ? "scale-x-100"
                            : "scale-x-0"
                        }
                      `}
                    />

                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setActive(isOpen ? null : index)
                      }
                      className="
                        collapse-title
                        flex
                        min-h-0
                        w-full
                        items-center
                        gap-4
                        px-5
                        py-5
                        text-right
                        outline-none

                        md:gap-5
                        md:px-6
                        md:py-6

                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-gold/40
                      "
                    >
                      {/* Number */}
                      <span
                        dir="ltr"
                        className={`
                          hidden
                          shrink-0

                          text-xs
                          font-extrabold
                          tracking-[0.15em]

                          transition-colors
                          duration-300

                          sm:block

                          ${
                            isOpen
                              ? "text-gold"
                              : "text-primary/35"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>


                      {/* Question */}
                      <h3
                        className={`
                          flex-1
                          text-base
                          font-extrabold
                          leading-7

                          transition-colors
                          duration-300

                          md:text-lg

                          ${
                            isOpen
                              ? "text-primary"
                              : "text-dark group-hover:text-primary"
                          }
                        `}
                      >
                        {item.question}
                      </h3>


                      {/* Icon */}
                      <span
                        className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full

                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? `
                                rotate-180
                                bg-gold
                                text-dark
                                shadow-[0_6px_18px_rgba(209,160,84,0.22)]
                              `
                              : `
                                bg-light
                                text-primary
                                group-hover:scale-105
                                group-hover:bg-primary
                                group-hover:text-white
                              `
                          }
                        `}
                      >
                        {isOpen ? (
                          <Minus
                            aria-hidden="true"
                            size={19}
                          />
                        ) : (
                          <Plus
                            aria-hidden="true"
                            size={19}
                          />
                        )}
                      </span>
                    </button>


                    {/* Answer */}
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`
                        grid
                        transition-all
                        duration-500
                        ease-in-out

                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            mx-6
                            border-t
                            border-dark/8
                            pb-7
                            pt-5
                          "
                        >
                          <p
                            className="
                              text-sm
                              leading-8
                              text-gray
                              md:text-base
                            "
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>


          {/* =====================================
              INTRO
          ====================================== */}
          <div
            dir="rtl"
            className="
              order-1
              flex
              flex-col
              justify-center
              lg:sticky
              lg:top-28
              lg:order-2
            "
          >
            {/* Eyebrow */}
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
                  text-sm
                  font-bold
                  tracking-[0.14em]
                  text-primary
                "
              >
                FREQUENTLY ASKED QUESTIONS
              </p>
            </div>


            {/* Title */}
            <h2
              className="
                mt-6
                max-w-lg
                text-4xl
                font-black
                leading-[1.45]
                text-dark
                md:text-5xl
                lg:text-[54px]
                lg:leading-[1.35]
              "
            >
              پاسخ سؤال‌هایی که
              <span className="text-primary">
                {" "}
                قبل از پیوستن
              </span>
              {" "}
              باید بدانید
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


            {/* Description */}
            <p
              className="
                mt-7
                max-w-md
                text-base
                leading-8
                text-gray
                md:text-[17px]
              "
            >
              مهم‌ترین پرسش‌ها درباره عضویت، دعوت‌نامه، پروفایل و
              رویدادهای
              {" "}
              <span
                dir="ltr"
                className="
                  font-extrabold
                  text-dark
                "
              >
                100Founders
              </span>
              {" "}
              را اینجا پاسخ داده‌ایم تا مسیر ورود به شبکه برای شما
              شفاف و ساده باشد.
            </p>


            {/* Support Card */}
            <div
              className="
                card
                group
                mt-10
                overflow-hidden
                rounded-[28px]
                border
                border-dark/5
                bg-white

                shadow-[0_10px_32px_rgba(21,59,68,0.06)]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
                hover:border-gold/25
                hover:shadow-[0_18px_42px_rgba(21,59,68,0.10)]
              "
            >
              <div className="card-body p-6 md:p-7">
                <div
                  className="
                    flex
                    items-center
                    gap-5
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl

                      bg-light
                      text-gold

                      transition-all
                      duration-500

                      group-hover:scale-110
                      group-hover:bg-gold
                      group-hover:text-dark
                    "
                  >
                    <Headphones
                      aria-hidden="true"
                      size={27}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-base
                        font-extrabold
                        text-dark
                      "
                    >
                      هنوز سؤال دیگری دارید؟
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-gray
                      "
                    >
                      تیم 100Founders آماده پاسخ‌گویی به شماست.
                    </p>
                  </div>
                </div>

                <div className="card-actions mt-5">
                  <Link
                    href="/contact"
                    className="
                      btn
                      btn-block
                      h-12
                      min-h-12
                      rounded-xl
                      border-0
                      bg-gold
                      text-sm
                      font-bold
                      text-dark

                      shadow-none

                      transition-all
                      duration-300

                      hover:-translate-y-[2px]
                      hover:bg-gold/90
                      hover:text-dark
                      hover:shadow-[0_8px_22px_rgba(209,160,84,0.20)]
                    "
                  >
                    با ما در ارتباط باشید

                    <ArrowLeft
                      aria-hidden="true"
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* =====================================
            BOTTOM CTA
        ====================================== */}
        <div
          dir="rtl"
          className="
            group
            relative
            mt-16
            overflow-hidden
            rounded-[30px]
            bg-dark

            shadow-[0_18px_50px_rgba(21,59,68,0.14)]

            transition-all
            duration-500

            hover:shadow-[0_24px_60px_rgba(21,59,68,0.20)]

            md:mt-20
          "
        >
          {/* Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-soft/0
              blur-3xl

              transition-all
              duration-700

              group-hover:bg-soft/25
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              left-[15%]
              h-60
              w-60
              rounded-full
              bg-gold/10
              blur-3xl
            "
          />


          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-20
              h-40
              w-40
              rounded-full
              border
              border-white/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-20
              h-44
              w-44
              rounded-full
              border
              border-white/10
            "
          />


          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              gap-7
              px-7
              py-9
              text-center

              md:flex-row
              md:justify-between
              md:px-10
              md:py-8
              md:text-right
            "
          >
            <div>
              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-center
                  gap-2
                  md:justify-start
                "
              >
                <Sparkles
                  aria-hidden="true"
                  size={15}
                  className="text-gold"
                />

                <p
                  className="
                    text-xs
                    font-semibold
                    text-gold
                  "
                >
                  عضویت در 100Founders
                </p>
              </div>

              <h3
                className="
                  text-xl
                  font-extrabold
                  leading-8
                  text-white
                  md:text-2xl
                "
              >
                آماده‌اید بخشی از یک شبکه اثرگذار باشید؟
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                ارتباطات ارزشمند، تجربه‌های واقعی و فرصت‌های تازه از
                یک نقطه شروع می‌شوند.
              </p>
            </div>


            <Link
              href="/login"
              className="
                btn
                h-12
                min-h-12
                shrink-0
                rounded-xl
                border-0

                bg-gold

                px-8

                text-sm
                font-bold
                text-dark

                shadow-[0_8px_24px_rgba(209,160,84,0.18)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:scale-[1.025]
                hover:bg-gold/90
                hover:text-dark
                hover:shadow-[0_12px_30px_rgba(209,160,84,0.28)]
              "
            >
              ورود به شبکه

              <ArrowLeft
                aria-hidden="true"
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}