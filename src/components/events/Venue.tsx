import {
  ArrowLeft,
  MapPin,
  Navigation,
} from "lucide-react";


export default function Venue() {
  return (
    <section
      className="
        bg-light
        px-6
        py-24
        md:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            overflow-hidden
            rounded-[34px]
            border
            border-dark/5
            bg-white
            shadow-[0_16px_45px_rgba(21,59,68,0.06)]
            lg:grid
            lg:grid-cols-[1fr_1fr]
          "
        >
          {/* Fake map */}
          <div
            className="
              relative
              min-h-[380px]
              overflow-hidden
              bg-[rgb(218,234,232)]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                opacity-50
                [background-image:linear-gradient(rgba(21,59,68,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(21,59,68,0.07)_1px,transparent_1px)]
                [background-size:45px_45px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -left-[10%]
                top-[45%]
                h-12
                w-[120%]
                -rotate-6
                bg-white/70
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-[48%]
                top-[-20%]
                h-[140%]
                w-10
                rotate-[20deg]
                bg-white/60
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-28
                w-28
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-primary/10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-dark
                  text-gold
                  shadow-xl
                "
              >
                <MapPin size={24} />
              </div>
            </div>
          </div>


          {/* Venue info */}
          <div
            className="
              flex
              flex-col
              justify-center
              p-8
              md:p-10
              lg:p-12
            "
          >
            <p
              dir="ltr"
              className="
                text-xs
                font-bold
                tracking-[0.16em]
                text-primary
              "
            >
              EVENT VENUE
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-dark
                md:text-4xl
              "
            >
              کافه گرند سنتنیال
            </h2>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-gold
              "
            >
              <MapPin size={18} />

              <span
                className="
                  text-sm
                  font-bold
                "
              >
                زاهدان
              </span>
            </div>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-8
                text-gray
              "
            >
              آدرس دقیق محل برگزاری پس از نهایی‌شدن اطلاعات
              رویداد در این قسمت قرار خواهد گرفت.
            </p>


            <button
              type="button"
              className="
                group
                mt-8
                inline-flex
                h-12
                w-fit
                items-center
                justify-center
                gap-3
                rounded-full
                bg-dark
                px-7
                text-sm
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-footer
              "
            >
              <Navigation
                size={17}
                className="text-gold"
              />

              مشاهده مسیر روی نقشه

              <ArrowLeft
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}