import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";


const events = [
  {
    location: "زاهدان",
    date: "شهریور ۱۴۰۵",
    slug: "zahedan-1405",
    title: "اولین گردهمایی 100Founders",
    description:
      "نخستین گردهمایی 100Founders با هدف ایجاد ارتباطات عمیق‌تر، تبادل تجربه‌های واقعی و شکل‌گیری فرصت‌های همکاری میان بنیان‌گذاران و رهبران کسب‌وکار برگزار می‌شود.",
  },
] as const;


export default function Events() {
  return (
    <section
      id="events"
      dir="rtl"
      className="
        overflow-hidden
        bg-white
      "
    >
      {/* ========================================
          HEADER
      ======================================== */}
      <div
        className="
          mx-auto
          max-w-4xl
          px-6
          py-20
          text-center
          md:py-24
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
              text-primary
            "
          >
            EVENTS
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
          رویدادهایی برای
          <span className="text-primary">
            {" "}
            ارتباط‌های واقعی
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-gray
            md:text-[17px]
          "
        >
          رویدادهای 100Founders فضایی برای ملاقات، تبادل تجربه،
          گفتگو درباره چالش‌های واقعی و شکل‌گیری همکاری‌هایی است
          که از یک ارتباط ساده فراتر می‌روند.
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


      {/* ========================================
          EVENTS
      ======================================== */}
      {events.map((event) => (
        <article
          key={event.slug}
          className="
            relative
            min-h-[680px]
            w-full
            overflow-hidden
            md:min-h-[620px]
          "
        >
          {/* Background Image */}
          <Image
            src="/images/events/event-hero.PNG"
            alt={`رویداد ${event.title}`}
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-[1200ms]
              ease-out
            "
          />

          {/* Dark Overlay */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-dark/45
            "
          />

          {/* Directional Gradient */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-l
              from-dark/85
              via-dark/45
              to-dark/10
            "
          />

          {/* Gold Ambient Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              top-1/2
              h-[420px]
              w-[420px]
              -translate-y-1/2
              rounded-full
              bg-gold/10
              blur-3xl
            "
          />

          {/* Primary Ambient Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-[15%]
              h-[360px]
              w-[360px]
              rounded-full
              bg-primary/15
              blur-3xl
            "
          />


          {/* ========================================
              CONTENT WRAPPER
          ======================================== */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[680px]
              max-w-7xl
              items-center
              px-6
              py-12
              md:min-h-[620px]
              md:px-8
              lg:px-10
            "
          >
            {/* Event Card */}
            <div
              className="
                group
                relative
                w-full
                max-w-[470px]
                overflow-hidden

                rounded-[28px]

                border
                border-white/15

                bg-dark/80

                p-7

                shadow-[0_24px_70px_rgba(0,0,0,0.28)]

                backdrop-blur-xl

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:border-gold/40
                hover:bg-dark/88
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.34)]

                md:p-9
              "
            >
              {/* Top Gold Line */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[3px]
                  origin-right
                  scale-x-0
                  bg-gold
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* Decorative Gold Glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-gold/10
                  blur-2xl
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              {/* Event Badge */}
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gold/30
                    bg-gold/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-gold
                    backdrop-blur-sm
                  "
                >
                  <CalendarDays
                    aria-hidden="true"
                    size={15}
                  />

                  {event.date}
                </span>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-white/70
                  "
                >
                  <Sparkles
                    aria-hidden="true"
                    size={14}
                    className="text-gold"
                  />

                  رویداد ویژه
                </span>
              </div>


              {/* Title */}
              <h3
                className="
                  mt-7
                  text-3xl
                  font-extrabold
                  leading-[1.65]
                  text-white
                  md:text-[34px]
                "
              >
                اولین گردهمایی
                <span
                  dir="ltr"
                  className="
                    block
                    mt-1
                    text-gold
                  "
                >
                  100Founders
                </span>
              </h3>


              {/* Accent Divider */}
              <div
                aria-hidden="true"
                className="
                  mt-6
                  h-[3px]
                  w-14
                  rounded-full
                  bg-gold
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />


              {/* Description */}
              <p
                className="
                  mt-6
                  text-[15px]
                  leading-8
                  text-white/70
                  md:text-base
                "
              >
                {event.description}
              </p>


              {/* Location */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gold/10
                    text-gold
                  "
                >
                  <MapPin
                    aria-hidden="true"
                    size={20}
                  />
                </div>

                <div>
                  <span
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-white/40
                    "
                  >
                    محل برگزاری
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {event.location}
                  </span>
                </div>
              </div>


              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={`/events/${event.slug}`}
                  className="
                    group/button
                    inline-flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl

                    bg-gold

                    px-6

                    text-sm
                    font-bold
                    text-dark

                    shadow-[0_8px_24px_rgba(209,160,84,0.18)]

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-[2px]
                    hover:scale-[1.015]
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
                  <span>
                    مشاهده جزئیات رویداد
                  </span>

                  <ArrowLeft
                    aria-hidden="true"
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:-translate-x-1
                    "
                  />
                </Link>
              </div>


              {/* Footer Note */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[11px]
                  text-white/35
                "
              >
                <span className="h-1 w-1 rounded-full bg-gold" />

                ارتباط · تجربه · همکاری · رشد
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}