import Image from "next/image";

import Counter from "@/components/ui/Counter";

const stats = [
  {
    number: 100,
    title: "بنیان‌گذار و رهبر کسب‌وکار",
    description: "شبکه‌ای منتخب از افراد اثرگذار و تصمیم‌ساز",
  },
  {
    number: 8,
    title: "حوزه تخصصی",
    description: "تنوعی از صنایع و بازارهای کلیدی کسب‌وکار",
  },
  {
    number: 50,
    title: "کسب‌وکار در شبکه",
    description: "ظرفیتی برای شکل‌گیری ارتباط و همکاری مشترک",
  },
  {
    number: 20,
    title: "نشست و گردهمایی",
    description: "فرصت‌هایی برای گفتگو، تجربه و ارتباط مستقیم",
  },
] as const;

export default function Stats() {
  return (
    <section
      id="stats"
      dir="rtl"
      className="
        relative
        overflow-hidden
        px-6
        py-32
      "
    >
      {/* Background */}
      <Image
        src="/images/stats-bg.PNG"
        alt=""
        fill
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />

      {/* Main Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-dark/80
        "
      />

      {/* Gradient Depth */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-dark/20
          via-transparent
          to-dark/35
        "
      />

      {/* Decorative Glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[380px]
          w-[380px]
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
          -bottom-40
          -left-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/20
          blur-3xl
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            mb-16
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
                text-sm
                font-bold
                tracking-[0.14em]
                text-gold
              "
            >
              NETWORK IN NUMBERS
            </p>

            <span
              aria-hidden="true"
              className="h-px w-9 bg-gold"
            />
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-[1.6]
              text-white
              md:text-5xl
            "
          >
            قدرت یک شبکه،
            <span className="text-gold">
              {" "}
              فراتر از اعداد
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/65
              md:text-[17px]
            "
          >
            100Founders بستری برای گردهم‌آمدن بنیان‌گذاران،
            کارآفرینان و رهبران کسب‌وکار است؛ شبکه‌ای که ارزش آن
            در کیفیت ارتباط‌ها، تجربه‌های مشترک و فرصت‌هایی است که
            از دل این تعاملات شکل می‌گیرند.
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

        {/* Stat Cards */}
        <div
          dir="ltr"
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {stats.map((item, index) => (
            <article
              key={item.title}
              dir="rtl"
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-3xl
                border
                border-white/15
                bg-white/[0.08]
                px-6
                py-8
                shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                backdrop-blur-xl

                transition-all
                duration-500
                ease-out

                hover:-translate-y-3
                hover:border-gold/50
                hover:bg-white/[0.13]
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.20)]
              "
            >
              {/* Top Accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[3px]
                  origin-left
                  scale-x-0
                  bg-gold
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* Card Number */}
              <span
                dir="ltr"
                className="
                  absolute
                  left-6
                  top-5
                  text-xs
                  font-extrabold
                  tracking-[0.18em]
                  text-white/20
                  transition-colors
                  duration-500
                  group-hover:text-gold/60
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className="
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                {/* Counter */}
                <div
                  dir="ltr"
                  className="
                    flex
                    items-baseline
                    justify-center
                    text-[58px]
                    font-extrabold
                    leading-none
                    tracking-tight
                    text-white

                    transition-all
                    duration-500

                    group-hover:scale-105
                    group-hover:text-gold

                    md:text-[64px]
                  "
                >
                  <Counter value={item.number} />
                </div>

                {/* Divider */}
                <div
                  aria-hidden="true"
                  className="
                    mt-6
                    h-[2px]
                    w-10
                    rounded-full
                    bg-gold/70
                    transition-all
                    duration-500
                    group-hover:w-16
                    group-hover:bg-gold
                  "
                />

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    leading-8
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-gold
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-[230px]
                    text-sm
                    leading-7
                    text-white/55
                    transition-colors
                    duration-300
                    group-hover:text-white/75
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  left-1/2
                  h-32
                  w-32
                  -translate-x-1/2
                  rounded-full
                  bg-gold/0
                  blur-3xl
                  transition-colors
                  duration-500
                  group-hover:bg-gold/10
                "
              />
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          className="
            mx-auto
            mt-14
            flex
            max-w-2xl
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <span
            aria-hidden="true"
            className="
              hidden
              h-px
              w-10
              bg-white/20
              sm:block
            "
          />

          <p
            className="
              text-sm
              font-medium
              leading-7
              text-white/50
            "
          >
            هر عدد، نماینده یک ارتباط؛ هر ارتباط، آغاز یک فرصت تازه.
          </p>

          <span
            aria-hidden="true"
            className="
              hidden
              h-px
              w-10
              bg-white/20
              sm:block
            "
          />
        </div>
      </div>
    </section>
  );
}