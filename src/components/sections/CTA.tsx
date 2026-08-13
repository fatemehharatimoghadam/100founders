import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Handshake,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";


const benefits = [
  {
    icon: TrendingUp,
    label: "رشد و توسعه کسب‌وکار",
  },
  {
    icon: Handshake,
    label: "فرصت‌های همکاری",
  },
  {
    icon: Users,
    label: "ارتباطات هدفمند",
  },
] as const;


export default function CTA() {
  return (
    <section
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-dark
        px-6
        py-24
        md:py-32
      "
    >
      {/* ========================================
          BACKGROUND DECORATION
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/25
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-24
          h-[360px]
          w-[360px]
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
          bottom-[-160px]
          right-[35%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-soft/10
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
            lg:gap-20
          "
        >
          {/* ========================================
              LOGO SIDE
          ======================================== */}
          <div
            className="
              order-2
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              lg:order-1
            "
          >
            {/* Outer Circle */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-gold/25

                transition-transform
                duration-700

                md:h-[520px]
                md:w-[520px]
              "
            />

            {/* Middle Circle */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-gold/15

                md:h-[405px]
                md:w-[405px]
              "
            />

            {/* Inner Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                h-[250px]
                w-[250px]
                rounded-full
                bg-gold/10
                blur-3xl

                md:h-[320px]
                md:w-[320px]
              "
            />

            {/* Decorative points */}
            <span
              aria-hidden="true"
              className="
                absolute
                right-[18%]
                top-[18%]
                h-2
                w-2
                rounded-full
                bg-gold
                shadow-[0_0_18px_rgba(209,160,84,0.8)]
              "
            />

            <span
              aria-hidden="true"
              className="
                absolute
                bottom-[20%]
                left-[17%]
                h-1.5
                w-1.5
                rounded-full
                bg-soft
                shadow-[0_0_16px_rgba(131,197,190,0.7)]
              "
            />


            {/* Logo Card */}
            <div
              className="
                group
                relative
                z-10

                flex
                h-52
                w-52
                items-center
                justify-center

                overflow-hidden
                rounded-[42px]

                border
                border-white/20

                bg-white

                p-8

                shadow-[0_24px_70px_rgba(0,0,0,0.28)]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:scale-[1.04]
                hover:border-gold/40
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]

                md:h-64
                md:w-64
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
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

              <Image
                src="/images/logo.jpg"
                alt="100Founders"
                width={220}
                height={220}
                className="
                  h-full
                  w-full
                  object-contain

                  transition-transform
                  duration-500

                  group-hover:scale-[1.04]
                "
              />
            </div>
          </div>


          {/* ========================================
              CONTENT SIDE
          ======================================== */}
          <div
            className="
              order-1
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
                  text-gold
                "
              >
                100FOUNDERS NETWORK
              </p>
            </div>


            {/* Micro Label */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >
              <Sparkles
                aria-hidden="true"
                size={16}
                className="text-gold"
              />

              <span
                className="
                  text-sm
                  font-medium
                  text-gold
                "
              >
                فرصت از یک ارتباط درست آغاز می‌شود
              </span>
            </div>


            {/* Heading */}
            <h2
              className="
                mt-6
                max-w-xl
                text-4xl
                font-black
                leading-[1.55]
                text-white

                md:text-5xl
              "
            >
              جای شما در جمع
              <span className="text-gold">
                {" "}
                بنیان‌گذاران اثرگذار
              </span>
              {" "}
              خالی است.
            </h2>


            {/* Divider */}
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
                max-w-xl
                text-base
                leading-8
                text-white/65
                md:text-[17px]
              "
            >
              به شبکه‌ای از بنیان‌گذاران، کارآفرینان و رهبران
              کسب‌وکار بپیوندید؛ جایی برای شکل‌گیری ارتباطات معتبر،
              انتقال تجربه‌های واقعی و ساخت همکاری‌هایی که می‌توانند
              مسیر رشد یک کسب‌وکار را تغییر دهند.
            </p>


            {/* Buttons */}
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
                  group
                  inline-flex
                  h-12
                  min-w-[185px]
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
                  ease-out

                  hover:-translate-y-[2px]
                  hover:scale-[1.025]
                  hover:bg-gold/90
                  hover:text-dark
                  hover:shadow-[0_12px_30px_rgba(209,160,84,0.28)]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold/50
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-dark
                "
              >
                ورود به 100Founders

                <ArrowLeft
                  aria-hidden="true"
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
              </Link>


              <Link
                href="/#about"
                className="
                  inline-flex
                  h-12
                  min-w-[165px]
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/20

                  bg-white/5

                  px-7

                  text-sm
                  font-bold
                  text-white

                  backdrop-blur-sm

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-gold/35
                  hover:bg-white/10
                  hover:text-gold

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/30
                "
              >
                آشنایی با شبکه
              </Link>
            </div>


            {/* Benefits */}
            <div
              className="
                mt-10
                grid
                gap-4
                border-t
                border-white/10
                pt-8

                sm:grid-cols-3
              "
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.label}
                    className="
                      group
                      flex
                      items-center
                      gap-3

                      rounded-xl

                      p-2

                      text-sm
                      text-white/60

                      transition-all
                      duration-300

                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg

                        bg-gold/10
                        text-gold

                        transition-all
                        duration-300

                        group-hover:scale-110
                        group-hover:bg-gold
                        group-hover:text-dark
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        size={17}
                      />
                    </span>

                    <span>
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}