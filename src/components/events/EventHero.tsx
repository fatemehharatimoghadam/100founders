import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";


export default function EventHero() {
  return (
    <section
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-dark
        px-6
        py-20
        text-white
      "
    >
      <Image
        src="/images/events/event-hero.PNG"
        alt="رویداد 100Founders"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
        "
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-l
          from-dark
          via-dark/80
          to-dark/45
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-dark
          via-transparent
          to-dark/30
        "
      />

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[560px]
          max-w-7xl
          items-center
        "
      >
        <div className="max-w-3xl">
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-gold" />

            <p
              dir="ltr"
              className="
                text-xs
                font-bold
                tracking-[0.18em]
                text-gold
              "
            >
              100FOUNDERS EVENT
            </p>
          </div>


          <div
            className="
              mt-7
              inline-flex
              items-center
              rounded-full
              border
              border-gold/25
              bg-gold/10
              px-4
              py-2
              text-xs
              font-bold
              text-gold
              backdrop-blur-md
            "
          >
            اولین گردهمایی رسمی شبکه
          </div>


          <h1
            className="
              mt-7
              text-4xl
              font-black
              leading-[1.55]
              md:text-6xl
              lg:text-[68px]
            "
          >
            گردهمایی
            <span className="text-gold">
              {" "}
              100Founders
            </span>

            <br />

            زاهدان
          </h1>


          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-9
              text-white/70
              md:text-lg
            "
          >
            فرصتی برای آشنایی، گفت‌وگو و شکل‌گیری ارتباط‌های
            حرفه‌ای میان بنیان‌گذاران، مدیران و رهبران کسب‌وکار.
          </p>


          {/* Meta */}
          <div
            className="
              mt-9
              grid
              gap-3
              sm:grid-cols-3
            "
          >
            <EventMeta
              icon={<CalendarDays size={18} />}
              label="تاریخ"
              value="۱ شهریور ۱۴۰۵"
            />

            <EventMeta
              icon={<Clock3 size={18} />}
              label="زمان"
              value="۱۸:۰۰"
            />

            <EventMeta
              icon={<MapPin size={18} />}
              label="محل"
              value="زاهدان"
            />
          </div>


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
                h-13
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gold
                px-8
                text-sm
                font-bold
                text-dark
                transition-all
                duration-300
                hover:-translate-y-1
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

            <a
              href="#agenda"
              className="
                inline-flex
                h-13
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              مشاهده برنامه رویداد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function EventMeta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.06]
        p-4
        backdrop-blur-md
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          text-gold
        "
      >
        {icon}

        <span className="text-xs">
          {label}
        </span>
      </div>

      <p
        className="
          mt-3
          text-sm
          font-bold
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}