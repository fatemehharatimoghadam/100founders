import Link from "next/link";

import {
  ArrowLeft,
  CalendarCheck2,
  Sparkles,
} from "lucide-react";


export default function EventCTA() {
  return (
    <section
      className="
        bg-white
        px-6
        py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[36px]
          bg-gradient-to-l
          from-primary
          to-dark
          px-7
          py-14
          text-center
          text-white
          md:px-12
          md:py-16
        "
      >
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
            border
            border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-36
            left-[15%]
            h-80
            w-80
            rounded-full
            bg-soft/20
            blur-3xl
          "
        />


        <div className="relative z-10">
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gold/10
              text-gold
            "
          >
            <CalendarCheck2 size={25} />
          </div>

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              text-gold
            "
          >
            <Sparkles size={15} />

            <span
              className="
                text-sm
                font-bold
              "
            >
              اولین گردهمایی 100Founders
            </span>
          </div>


          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-3xl
              font-black
              leading-[1.6]
              md:text-5xl
            "
          >
            آماده‌اید بخشی از این
            <span className="text-gold">
              {" "}
              تجربه متفاوت
            </span>{" "}
            باشید؟
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-8
              text-white/65
              md:text-base
            "
          >
            برای ثبت حضور و دریافت اطلاعات تکمیلی رویداد،
            وارد شبکه 100Founders شوید.
          </p>


          <Link
            href="/login"
            className="
              group
              mt-9
              inline-flex
              h-13
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gold
              px-9
              text-sm
              font-bold
              text-dark
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            ثبت حضور در رویداد

            <ArrowLeft
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
    </section>
  );
}