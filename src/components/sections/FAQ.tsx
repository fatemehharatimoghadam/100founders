"use client";

import { useState } from "react";
import { Plus, Minus, Headphones } from "lucide-react";
import Link from "next/link";


const questions = [
  {
    question: (
      <>
        <span dir="ltr">100 CEOs</span> چیست؟
      </>
    ),
    answer:
      "یک شبکه از مدیرعاملان، بنیان‌گذاران و مدیران ارشد شرکت‌هاست که با هدف ایجاد ارتباطات حرفه‌ای، انتقال تجربه‌های مدیریتی، توسعه همکاری‌های اقتصادی و بررسی چالش‌های کسب‌وکار شکل گرفته است.",
  },

  {
    question: "چه کسانی عضو این شبکه هستند؟",
    answer:
      "اعضای این شبکه را مدیرعاملان، کارآفرینان، بنیان‌گذاران و مدیران ارشد مجموعه‌های فعال اقتصادی تشکیل می‌دهند که به دنبال توسعه ارتباطات و همکاری‌های مؤثر هستند.",
  },

  {
    question: "چگونه می‌توان وارد شبکه شد؟",
    answer:
      "ورود به شبکه از طریق دعوت، بررسی اطلاعات مدیریتی و تکمیل فرآیند ثبت اطلاعات انجام می‌شود.",
  },

  {
    question: "نحوه دریافت دعوت‌نامه چگونه است؟",
    answer:
      "پس از ثبت اطلاعات اولیه و بررسی شرایط عضویت، در صورت تأیید، امکان دریافت دعوت‌نامه و حضور در شبکه فراهم خواهد شد.",
  },

  {
    question: "چگونه پروفایل خود را تکمیل کنم؟",
    answer:
      "پس از ورود با شماره موبایل و تأیید کد OTP، مدیران می‌توانند اطلاعات شخصی، سازمانی و معرفی کوتاه خود را تکمیل و ویرایش کنند.",
  },

  {
    question: "چگونه در رویدادهای شبکه شرکت کنم؟",
    answer:
      "رویدادهای شبکه از طریق بخش رویدادها معرفی می‌شوند و اعضای شبکه می‌توانند اطلاعات هر برنامه و جزئیات مربوط به آن را مشاهده کنند.",
  },
];



export default function FAQ() {

  const [active, setActive] = useState<number | null>(0);


  return (

    <section
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-[rgb(237,246,245)]
        px-6
        py-24
        md:py-28
      "
    >


      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-96
          w-96
          rounded-full
          border-[70px]
          border-white/40
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
          border-white/30
        "
      />



      {/* WATERMARK */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          select-none
          text-[180px]
          font-black
          leading-none
          text-[rgb(21,59,68)]/[0.025]
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
            gap-12
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >



          {/* QUESTIONS */}

          <div
            dir="rtl"
            className="
              order-2
              lg:order-1
            "
          >


            <div className="space-y-4">


              {questions.map((item,index)=>{

                const isOpen = active === index;


                return (

                  <div
                    key={index}
                    className={`
                      overflow-hidden
                      rounded-[24px]
                      border
                      bg-white
                      transition-all
                      duration-500
                      ${
                        isOpen
                        ?
                        "border-[rgb(209,160,84)]/40 shadow-xl shadow-[rgb(21,59,68)]/10"
                        :
                        "border-transparent shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                      }
                    `}
                  >


                    <button
                      type="button"
                      onClick={() =>
                        setActive(isOpen ? null : index)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        gap-5
                        px-5
                        py-5
                        text-right
                        md:px-6
                        md:py-6
                      "
                    >


                      <span
                        className={`
                          hidden
                          shrink-0
                          text-sm
                          font-semibold
                          sm:block
                          ${
                            isOpen
                            ?
                            "text-[rgb(209,160,84)]"
                            :
                            "text-[rgb(0,109,119)]/50"
                          }
                        `}
                      >
                        {String(index+1).padStart(2,"0")}
                      </span>


                      <h3
                        className="
                          flex-1
                          text-base
                          font-bold
                          leading-7
                          text-[rgb(21,59,68)]
                          md:text-lg
                        "
                      >
                        {item.question}
                      </h3>


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
                            ?
                            "bg-[rgb(209,160,84)] text-white"
                            :
                            "bg-[rgb(0,109,119)] text-white"
                          }
                        `}
                      >
                        {
                          isOpen
                          ?
                          <Minus size={20}/>
                          :
                          <Plus size={20}/>
                        }
                      </span>


                    </button>
                                        {/* ANSWER */}

                    <div
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
                            border-[rgb(21,59,68)]/10
                            pb-7
                            pt-5
                          "
                        >

                          <p
                            className="
                              text-sm
                              leading-8
                              text-[rgb(102,122,126)]
                              md:text-base
                            "
                          >

                            {
                              item.answer.includes("100 CEOs")
                              ?
                              <>
                                {item.answer.split("100 CEOs")[0]}

                                <span
                                  dir="ltr"
                                  className="
                                    mx-1
                                    font-semibold
                                    text-[rgb(21,59,68)]
                                  "
                                >
                                  100 CEOs
                                </span>

                                {item.answer.split("100 CEOs")[1]}
                              </>
                              :
                              item.answer
                            }

                          </p>

                        </div>

                      </div>

                    </div>


                  </div>

                );

              })}


            </div>


          </div>





          {/* ========================================
              RIGHT SIDE - INTRO
          ======================================== */}


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


            {/* TITLE */}

            <h2
              className="
                max-w-lg
                text-4xl
                font-black
                leading-[1.35]
                text-[rgb(21,59,68)]
                md:text-5xl
                lg:text-[58px]
                lg:leading-[1.3]
              "
            >

              هر آنچه باید بدانید

              <br/>

              <span
                className="
                  relative
                  inline-block
                "
              >

                <span
                  className="
                    absolute
                    -bottom-2
                    right-0
                    h-1
                    w-16
                    rounded-full
                    bg-[rgb(209,160,84)]
                  "
                />


              </span>


            </h2>





            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-8
                text-[rgb(102,122,126)]
                md:text-lg
              "
            >

              پاسخ تمام سؤالات شما درباره شبکه{" "}


              <span
                dir="ltr"
                className="
                  font-semibold
                  text-[rgb(21,59,68)]
                "
              >
                100 CEOs
              </span>


              {" "}
              در این بخش قرار دارد. اگر قبل از ثبت‌نام یا حضور
              در شبکه سؤالی دارید، اینجا می‌توانید پاسخ آن را
              پیدا کنید.


            </p>

            {/* GOLD LINE */}
            <br />
            <div
              className="
                mt-8
                h-1
                w-16
                rounded-full
                bg-[rgb(209,160,84)]
              "
            />





            {/* CONTACT CARD */}

            {/* CONTACT CARD */}

<div
  className="
    group
    mt-12
    overflow-hidden
    rounded-[28px]
    bg-white
    p-6
    shadow-lg
    shadow-[rgb(21,59,68)]/5
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-xl
    md:p-7
  "
>


  <div
    className="
      flex
      items-center
      gap-5
    "
  >


    {/* ICON */}

    <div
      className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-2xl
        bg-[rgb(237,246,245)]
        text-[rgb(209,160,84)]
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-[rgb(209,160,84)]
        group-hover:text-white
      "
    >

      <Headphones
        size={27}
        strokeWidth={1.8}
        className="
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />

    </div>




    {/* TEXT */}

    <div>

      <h4
        className="
          text-base
          font-bold
          text-[rgb(21,59,68)]
        "
      >
        هنوز سؤال دیگری دارید؟
      </h4>


      <p
        className="
          mt-1
          text-sm
          leading-6
          text-[rgb(102,122,126)]
        "
      >
        تیم ما آماده پاسخگویی به شماست.
      </p>


    </div>


  </div>





  {/* CONTACT LINK */}

 <Link
  href="/contact"
  className="
    mx-auto
    mt-6
    flex
    w-fit
    items-center
    justify-center
    gap-3
    rounded-full
    bg-[rgb(237,246,245)]
    px-6
    py-3
    text-sm
    font-bold
    text-[rgb(209,160,84)]
    transition-all
    duration-500
    hover:bg-[rgb(21,59,68)]
    hover:text-white
    hover:shadow-lg
    group-hover:scale-105
  "
>
  <span>
    با ما در ارتباط باشید
  </span>

  <span
    className="
      transition-transform
      duration-500
      group-hover:-translate-x-1
    "
  >
    ←
  </span>

</Link>



</div>


          </div>


        </div>

                {/* ========================================
            BOTTOM CTA
        ======================================== */}

        {/* ========================================
    BOTTOM CTA
======================================== */}

<div
  dir="rtl"
  className="
    group
    relative
    mt-16
    overflow-hidden
    rounded-[28px]
    bg-[rgb(21,59,68)]
    shadow-xl
    transition-all
    duration-500
    hover:shadow-2xl
    md:mt-20
  "
>


  {/* HOVER LIGHT EFFECT */}

  <div
    className="
      pointer-events-none
      absolute
      -right-32
      -top-32
      h-80
      w-80
      rounded-full
      bg-[rgb(131,197,190)]
      opacity-0
      blur-3xl
      transition-all
      duration-700
      group-hover:opacity-30
    "
  />


  {/* DECORATIVE CIRCLE */}

  <div
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
      py-8
      text-center
      md:flex-row
      md:justify-between
      md:px-10
      md:py-7
      md:text-right
    "
  >



    {/* TEXT */}

    <div>

      <p
        className="
          text-sm
          text-white/60
        "
      >
        آماده‌اید به شبکه بپیوندید؟
      </p>


      <h3
        className="
          mt-2
          text-xl
          font-bold
          text-white
          md:text-2xl
        "
      >
        جای خود را در میان مدیران برتر پیدا کنید.
      </h3>


    </div>





    {/* BUTTON */}


    <Link

      href="/login"

      className="
        flex
        items-center
        gap-3
        rounded-full
        bg-[rgb(209,160,84)]
        px-8
        py-4
        text-sm
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-500
        hover:scale-105
        hover:shadow-xl
        hover:shadow-[rgb(209,160,84)]/30
      "

    >

      <span>
        ثبت‌نام در رویداد
      </span>


      <span
        className="
          transition-transform
          duration-500
          group-hover:-translate-x-1
        "
      >
        ←
      </span>


    </Link>



  </div>


</div>


      </div>


    </section>

  );

}