"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Handshake,
  TrendingUp,
  Users,
} from "lucide-react";


export default function CTA() {


  return (

    <section
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-[rgb(21,59,68)]
        px-6
        py-24
        md:py-32
      "
    >



      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[rgb(0,109,119)]/30
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



        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >



          {/* =====================
              LOGO SIDE
          ====================== */}


          <div
            className="
              relative
              flex
              items-center
              justify-center
              order-2
              lg:order-1
            "
          >


            {/* CIRCLES */}

            <div
              className="
                absolute
                h-[360px]
                w-[360px]
                rounded-full
                border
                border-[rgb(209,160,84)]/30
                md:h-[520px]
                md:w-[520px]
              "
            />


            <div
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                border
                border-[rgb(209,160,84)]/20
                md:h-[400px]
                md:w-[400px]
              "
            />



            {/* LOGO CARD */}

            <div
              className="
                relative
                z-10
                flex
                h-52
                w-52
                items-center
                justify-center
                rounded-[45px]
                bg-white
                p-10
                shadow-2xl
                transition-all
                duration-500
                hover:scale-105
                md:h-64
                md:w-64
              "
            >

              <Image
                src="/images/logo.png"
                alt="100 CEOs"
                width={220}
                height={220}
                className="
                  object-contain
                "
              />


            </div>



          </div>








          {/* =====================
              CONTENT SIDE
          ====================== */}


          <div
            className="
              order-1
              lg:order-2
            "
          >



            {/* LABEL */}


            <p
              className="
                text-sm
                tracking-[0.3em]
                text-[rgb(209,160,84)]
              "
            >
              100 CEOS NETWORK
            </p>




            <div
              className="
                mt-5
                h-px
                w-20
                bg-[rgb(209,160,84)]
              "
            />






            <div
              className="
                mt-8
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  text-[rgb(209,160,84)]
                "
              >
                ✦
              </span>


              <span
                className="
                  text-sm
                  text-[rgb(209,160,84)]
                "
              >
                فرصت از همین‌جا آغاز می‌شود
              </span>


            </div>







            <h2
              className="
                mt-6
                max-w-xl
                text-4xl
                font-black
                leading-[1.5]
                text-white
                md:text-5xl
              "
            >

              جای شما در جمع

              <br />

              <span
                className="
                  text-[rgb(209,160,84)]
                "
              >
                مدیران برتر
              </span>

              {" "}
              خالی است.


            </h2>






            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-white/60
                md:text-lg
              "
            >

              به شبکه‌ای از مدیران، بنیان‌گذاران و چهره‌های
              تأثیرگذار کسب‌وکار بپیوندید و مسیرهای جدیدی
              برای ارتباط، تجربه و همکاری بسازید.


            </p>







            {/* BUTTONS */}


            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-4
              "
            >


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
                  font-bold
                  text-white
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                ورود به شبکه مدیران

                <ArrowLeft size={20}/>


              </Link>



              <Link
                href="/about"
                className="
                  rounded-full
                  border
                  border-white/30
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  hover:bg-white/10
                "
              >

                آشنایی با شبکه


              </Link>


            </div>







            {/* BENEFITS */}


            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-8
                border-t
                border-white/10
                pt-8
              "
            >


              <div className="flex items-center gap-2 text-white/60">

                <TrendingUp
                  size={18}
                  className="text-[rgb(209,160,84)]"
                />

                رشد و توسعه کسب‌وکار

              </div>



              <div className="flex items-center gap-2 text-white/60">

                <Handshake
                  size={18}
                  className="text-[rgb(209,160,84)]"
                />

                فرصت‌های همکاری

              </div>



              <div className="flex items-center gap-2 text-white/60">

                <Users
                  size={18}
                  className="text-[rgb(209,160,84)]"
                />

                ارتباطات هدفمند

              </div>



            </div>



          </div>


        </div>


      </div>


    </section>


  );

}