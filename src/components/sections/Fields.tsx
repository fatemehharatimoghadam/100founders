import Image from "next/image";

const fields = [
  {
    title: "املاک و ساخت‌وساز",
    description: "توسعه، سرمایه‌گذاری و پروژه‌های ساختمانی",
    image: "/images/fields/realestate.jpeg",
  },
  {
    title: "کافه و رستوران",
    description: "برندهای غذایی، مهمان‌نوازی و تجربه مشتری",
    image: "/images/fields/restaurant.jpeg",
  },
  {
    title: "گردشگری و هتلداری",
    description: "سفر، اقامت و توسعه تجربه‌های گردشگری",
    image: "/images/fields/tourism.jpeg",
  },
  {
    title: "زیبایی و سلامت",
    description: "سلامت، زیبایی و خدمات تخصصی مرتبط",
    image: "/images/fields/health.jpeg",
  },
  {
    title: "خودرویی",
    description: "خدمات، فروش و زنجیره ارزش صنعت خودرو",
    image: "/images/fields/automotive.jpeg",
  },
  {
    title: "صنعت و معدن",
    description: "تولید، زیرساخت و صنایع مادر",
    image: "/images/fields/industry.jpeg",
  },
] as const;

export default function Fields() {
  return (
    <section
      id="fields"
      dir="rtl"
      className="
        bg-white
        px-6
        py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3">
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
              BUSINESS FIELDS
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
              text-dark
              md:text-5xl
            "
          >
            حوزه‌های فعالیت اعضای شبکه
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-gray
              md:text-[17px]
            "
          >
            100Founders مجموعه‌ای متنوع از بنیان‌گذاران و رهبران
            کسب‌وکار را از حوزه‌های مختلف کنار هم قرار می‌دهد؛
            تنوعی که زمینه‌ساز ارتباطات ارزشمند و فرصت‌های تازه است.
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

        {/* Cards */}
        <div
          dir="ltr"
          className="
            grid
            grid-cols-2
            gap-5
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {fields.map((field, index) => (
            <article
              key={field.title}
              dir="rtl"
              className="
                group
                relative
                h-[360px]
                overflow-hidden
                rounded-2xl
                border
                border-dark/5
                bg-dark

                shadow-[0_8px_24px_rgba(21,59,68,0.06)]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:border-gold/40
                hover:shadow-[0_18px_42px_rgba(21,59,68,0.14)]
              "
            >
              {/* Image */}
              <Image
                src={field.image}
                alt={field.title}
                fill
                quality={95}
                sizes="
                  (max-width: 767px) 50vw,
                  (max-width: 1023px) 33vw,
                  (max-width: 1536px) 20vw,
                  260px
                "
                className="
                  object-cover
                  object-center

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-[1.06]
                "
              />

              {/* Base Overlay */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-dark/95
                  via-dark/25
                  to-transparent

                  transition-all
                  duration-500

                  group-hover:via-dark/35
                "
              />

              {/* Hover Tint */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-primary/0

                  transition-colors
                  duration-500

                  group-hover:bg-primary/5
                "
              />

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

              {/* Number */}
              <span
                dir="ltr"
                className="
                  absolute
                  left-4
                  top-4

                  rounded-full
                  border
                  border-white/20
                  bg-dark/35
                  px-2.5
                  py-1

                  text-[11px]
                  font-bold
                  tracking-widest
                  text-white/80

                  backdrop-blur-sm

                  transition-all
                  duration-300

                  group-hover:border-gold/40
                  group-hover:bg-gold
                  group-hover:text-dark
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                "
              >
                <h3
                  className="
                    text-lg
                    font-extrabold
                    leading-7
                    text-white

                    transition-all
                    duration-500

                    group-hover:-translate-y-1
                    group-hover:text-gold
                  "
                >
                  {field.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="
                    mt-3
                    h-[2px]
                    w-8
                    rounded-full
                    bg-gold

                    transition-all
                    duration-500

                    group-hover:w-14
                  "
                />

                <p
                  className="
                    mt-3
                    max-h-0
                    overflow-hidden

                    text-sm
                    leading-7
                    text-white/75

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:max-h-24
                    group-hover:opacity-100
                  "
                >
                  {field.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}