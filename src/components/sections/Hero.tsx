import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        pt-[72px]
      "
    >
      {/* ========================================
          DESKTOP IMAGE
      ======================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          top-[72px]
          hidden
          lg:block
          lg:w-[52%]
        "
      >
        <Image
          src="/images/hero.jpeg"
          alt="جلسه و تعامل حرفه‌ای بنیان‌گذاران و رهبران کسب‌وکار"
          fill
          priority
          sizes="52vw"
          className="
            object-cover
            object-center
          "
        />

        {/* Dark depth over image */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-dark/5
            via-transparent
            to-transparent
          "
        />

        {/* Fade between image and content */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-[42%]
            bg-gradient-to-l
            from-white
            via-white/85
            to-transparent
          "
        />
      </div>

      {/* ========================================
          DECORATIVE ACCENTS
      ======================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[150px]
          hidden
          h-[320px]
          w-[320px]
          rounded-full
          bg-soft/15
          blur-3xl
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[24%]
          hidden
          h-[180px]
          w-[180px]
          rounded-full
          bg-gold/5
          blur-3xl
          lg:block
        "
      />

      {/* ========================================
          CONTENT
      ======================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-72px)]
          w-full
          items-center
        "
      >
        <div
          className="
            w-full
            px-6
            py-14
            sm:px-10
            lg:ml-auto
            lg:w-[50%]
            lg:px-10
            xl:px-14
          "
        >
          <div
            className="
              mx-auto
              max-w-[610px]
              text-center
              lg:translate-x-5
            "
          >
            {/* Eyebrow */}
            <div
              className="
                mb-6
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
                  w-8
                  bg-gold
                "
              />

              <p
                className="
                  text-sm
                  font-bold
                  tracking-[0.04em]
                  text-primary
                  sm:text-[15px]
                "
              >
                شبکه‌ای برای بنیان‌گذاران اثرگذار
              </p>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-gold
                "
              />
            </div>

            {/* Brand */}
            <h1
              dir="ltr"
              className="
                text-5xl
                font-extrabold
                tracking-[-0.04em]
                text-dark
                sm:text-6xl
                lg:text-[68px]
                lg:leading-none
              "
            >
              <span>100</span>

              <span className="text-gold">
                Founders
              </span>
            </h1>

            {/* Headline */}
            <h2
              className="
                mx-auto
                mt-7
                max-w-[570px]
                text-2xl
                font-extrabold
                leading-[1.7]
                text-dark
                sm:text-3xl
                lg:text-[34px]
                lg:leading-[1.65]
              "
            >
              جایی برای ارتباط،
              <span className="text-primary">
                {" "}
                تجربه
              </span>
              {" "}
              و ساخت فرصت‌های بزرگ‌تر
            </h2>

            {/* Gold Divider */}
            <div
              aria-hidden="true"
              className="
                mx-auto
                mt-6
                h-[3px]
                w-14
                rounded-full
                bg-gold
              "
            />

            {/* Description */}
            <p
              className="
                mx-auto
                mt-6
                max-w-[550px]
                text-[15px]
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
              شبکه‌ای حرفه‌ای از بنیان‌گذاران، کارآفرینان و رهبران
              کسب‌وکار است؛ بستری برای شکل‌گیری ارتباطات ارزشمند،
              انتقال تجربه، توسعه همکاری‌های راهبردی و خلق فرصت‌هایی
              که می‌توانند آینده کسب‌وکارها را تغییر دهند.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
              {/* Primary CTA */}
              <Link
                href="/login"
                className="
                  inline-flex
                  h-12
                  min-w-[175px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-gold
                  px-7
                  text-sm
                  font-bold
                  text-dark
                  shadow-[0_6px_18px_rgba(209,160,84,0.20)]
                  outline-none
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:scale-[1.025]
                  hover:bg-gold/90
                  hover:text-dark
                  hover:shadow-[0_10px_25px_rgba(209,160,84,0.28)]

                  focus-visible:ring-2
                  focus-visible:ring-gold/50
                  focus-visible:ring-offset-2
                "
              >
                پیوستن به 100Founders
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/#about"
                className="
                  inline-flex
                  h-12
                  min-w-[175px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-dark/25
                  bg-white
                  px-7
                  text-sm
                  font-bold
                  text-dark
                  outline-none
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:scale-[1.025]
                  hover:border-primary
                  hover:bg-light
                  hover:text-primary

                  focus-visible:ring-2
                  focus-visible:ring-primary/30
                  focus-visible:ring-offset-2
                "
              >
                درباره 100Founders
              </Link>
            </div>

            {/* Trust / Positioning text */}
            <p
              className="
                mt-6
                text-xs
                font-medium
                tracking-wide
                text-gray/70
              "
            >
              ارتباطات معتبر · تجربه‌های واقعی · فرصت‌های هدفمند
            </p>
          </div>
        </div>
      </div>

      {/* ========================================
          MOBILE IMAGE
      ======================================== */}
      <div
        className="
          relative
          h-[400px]
          w-full
          overflow-hidden
          lg:hidden
        "
      >
        <Image
          src="/images/hero.jpeg"
          alt="جلسه و تعامل حرفه‌ای بنیان‌گذاران و رهبران کسب‌وکار"
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-28
            bg-gradient-to-b
            from-white
            via-white/60
            to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-20
            bg-gradient-to-t
            from-dark/20
            to-transparent
          "
        />
      </div>
    </section>
  );
}