import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        pt-[72px]
      "
    >
      {/* =========================
          IMAGE - LEFT
      ========================== */}
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
          alt="جلسه مدیران ارشد"
          fill
          priority
          sizes="52vw"
          className="
            object-cover
            object-center
          "
        />

        {/* Soft Fade Between Image & Content */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[38%]
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
            pointer-events-none
          "
        />
      </div>


      {/* =========================
          CONTENT AREA
      ========================== */}
      <div
        className="
          relative
          z-10
          min-h-[calc(100vh-72px)]
          w-full
        "
      >
        <div
          className="
            min-h-[calc(100vh-72px)]
            w-full
            flex
            items-center
          "
        >
          {/* Right White Half */}
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
            {/* Content Block */}
            <div
              className="
                mx-auto
                max-w-[590px]
                text-center
                lg:translate-x-5
              "
            >
              {/* Eyebrow */}
              <p
                className="
                  mb-5
                  text-sm
                  font-bold
                  tracking-[0.08em]
                  text-[#006D77]
                "
              >
                شبکه مدیران ارشد کسب‌وکار
              </p>


              {/* Main Title */}
              <h1
                dir="ltr"
                className="
                  text-5xl
                  font-extrabold
                  tracking-tight
                  text-[#153B44]
                  sm:text-6xl
                  lg:text-[64px]
                  lg:leading-none
                "
              >
                100CEOs
              </h1>


              {/* Subtitle */}
              <h2
                className="
                  mt-7
                  text-2xl
                  font-bold
                  leading-[1.7]
                  text-[#153B44]
                  sm:text-3xl
                  lg:text-[34px]
                  lg:leading-[1.65]
                "
              >
                شبکه مدیران ارشد
                <br />
                برای توسعه، همکاری
                <br />
                و ساخت آینده کسب‌وکار
              </h2>


              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[540px];
                  text-base
                  leading-[2.1]
                  text-gray-600
                  sm:text-[17px]
                "
              >
                <span dir="ltr">100CEOs</span>{" "}
                شبکه‌ای از مدیرعاملان و مدیران ارشد شرکت‌هاست که با هدف
                شبکه‌سازی، انتقال تجربه، ایجاد همکاری‌های اقتصادی و توسعه
                کسب‌وکار شکل گرفته است.
              </p>


              {/* Buttons */}
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  justify-center
                  gap-4
                "
              >
                <Link
                  href="/login"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    rounded-md
                    bg-[#006D77]
                    px-8
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_5px_15px_rgba(0,109,119,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-px
                    hover:bg-[#153B44]
                    hover:shadow-[0_8px_20px_rgba(21,59,68,0.18)]
                  "
                >
                  ورود به شبکه مدیران
                </Link>

                <Link
                  href="#about"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#006D77]
                    bg-white
                    px-8
                    text-sm
                    font-semibold
                    text-[#006D77]
                    transition-all
                    duration-300
                    hover:bg-[#006D77]
                    hover:text-white
                  "
                >
                  آشنایی با 100CEOs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* =========================
          MOBILE IMAGE
      ========================== */}
      <div
        className="
          relative
          h-[420px]
          w-full
          lg:hidden
        "
      >
        <Image
          src="/images/hero.jpeg"
          alt="جلسه مدیران ارشد"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-white
            to-transparent
          "
        />
      </div>
    </section>
  );
}