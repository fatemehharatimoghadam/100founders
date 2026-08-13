import Image from "next/image";
import Link from "next/link";


const events = [
  {
    location: "زاهدان",
    date: "شهریور ۱۴۰۵",
    slug: "zahedan-1405",
  },
];


export default function Events() {
  return (
    <section
      id="events"
      className="
        overflow-hidden
        bg-white
      "
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          px-6
          py-20
          text-center
          md:py-24
        "
      >
        <p
          className="
            text-sm
            font-medium
            tracking-[0.35em]
            text-[rgb(0,109,119)]
          "
        >
          EVENTS
        </p>

        <h2
          className="
            mt-5
            text-4xl
            font-bold
            text-[rgb(21,59,68)]
            md:text-5xl
          "
        >
          رویدادهای{" "}
          <span dir="ltr">
            100 CEOs
          </span>
        </h2>

        <div
          className="
            mx-auto
            mt-6
            h-1
            w-16
            rounded-full
            bg-[rgb(209,160,84)]
          "
        />
      </div>


      {/* ================= EVENTS ================= */}
      {events.map((event) => (
        <div
          key={event.slug}
          className="
            relative
            min-h-[560px]
            w-full
            md:h-[560px]
          "
        >
          {/* ================= BACKGROUND IMAGE ================= */}
          <Image
            src="/images/events/event-hero.PNG"
            alt="100 CEOs Event"
            fill
            priority
            className="
              object-cover
              object-left
            "
          />


          {/* ================= IMAGE OVERLAY ================= */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[rgb(21,59,68)]/50
              via-[rgb(21,59,68)]/10
              to-transparent
            "
          />


          {/* ================= EVENT CARD ================= */}
          <div
            className="
              absolute
              bottom-6
              right-6
              top-6
              z-10
              w-[calc(100%-3rem)]
              max-w-[390px]

              md:bottom-10
              md:right-12
              md:top-10
              md:w-[350px]

              lg:right-20
              lg:w-[390px]
            "
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                bg-gradient-to-br
                from-[rgb(21,59,68)]
                to-[rgb(0,109,119)]
                px-7
                py-8
                text-white
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-1

                md:px-9
                md:py-9
              "
              style={{
                clipPath:
                  "polygon(14% 0,100% 0,100% 85%,86% 100%,0 100%,0 15%)",
              }}
            >
              {/* ================= DECORATIVE ELEMENTS ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[rgb(209,160,84)]
                  opacity-[0.08]
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-2/3
                  bg-gradient-to-r
                  from-transparent
                  via-[rgb(209,160,84)]/60
                  to-transparent
                "
              />


              {/* ================= CONTENT ================= */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                "
              >
                {/* DATE */}
                <div>
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-[rgb(209,160,84)]/40
                      bg-[rgb(209,160,84)]/15
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-[rgb(209,160,84)]
                    "
                  >
                    {event.date}
                  </span>
                </div>


                {/* TITLE */}
                <h3
                  className="
                    mt-7
                    text-2xl
                    font-black
                    leading-[1.8]
                    md:text-3xl
                  "
                >
                  اولین گردهمایی{" "}
                  <span
                    dir="ltr"
                    className="whitespace-nowrap"
                  >
                    100 CEOs
                  </span>
                </h3>


                {/* GOLD LINE */}
                <div
                  className="
                    mt-5
                    h-[3px]
                    w-12
                    rounded-full
                    bg-[rgb(209,160,84)]
                  "
                />


                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    text-sm
                    leading-8
                    text-[rgb(237,246,245)]
                    opacity-85
                    md:text-[15px]
                  "
                >
                  نخستین گردهمایی مدیران ارشد شبکه{" "}
                  <span
                    dir="ltr"
                    className="
                      font-medium
                      text-white
                    "
                  >
                    100 CEOs
                  </span>{" "}
                  با هدف توسعه ارتباطات، انتقال تجربه و ایجاد فرصت‌های همکاری
                  برگزار می‌شود.
                </p>


                {/* LOCATION */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[rgb(237,246,245)]
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >
                    <span className="text-[rgb(209,160,84)]">
                      ●
                    </span>
                  </div>

                  <div>
                    <span
                      className="
                        block
                        text-[11px]
                        text-white/45
                      "
                    >
                      محل برگزاری
                    </span>

                    <span
                      className="
                        mt-0.5
                        block
                        font-medium
                      "
                    >
                      {event.location}
                    </span>
                  </div>
                </div>


                {/* BUTTON */}
                <div
                  className="
                    mt-auto
                    pt-2
                    p-10
                  "
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-white
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[rgb(21,59,68)]
                      transition-all
                      duration-300
                      hover:bg-[rgb(209,160,84)]
                      hover:text-white
                      hover:shadow-lg
                      sm:w-fit
                    "
                  >
                    <span>
                      مشاهده جزئیات رویداد
                    </span>

                    <span
                      className="
                        text-lg
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    >
                      ←
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}