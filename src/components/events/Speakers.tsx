import {
  ArrowUpLeft,
  Mic2,
} from "lucide-react";


const speakers = [
  {
    name: "آقای رستمی",
    role: "بنیان‌گذار و مدیر کسب‌وکار",
    bio:
      "ارائه تجربه‌های مدیریتی و دیدگاه‌های عملی درباره توسعه کسب‌وکار و ساخت شبکه‌های حرفه‌ای.",
  },
  {
    name: "آقای جعفری",
    role: "کارآفرین و فعال اقتصادی",
    bio:
      "گفت‌وگو درباره فرصت‌های همکاری، توسعه بازار و نقش ارتباطات حرفه‌ای در رشد سازمان‌ها.",
  },
];


export default function Speakers() {
  return (
    <section
      className="
        bg-white
        px-6
        py-24
        md:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              dir="ltr"
              className="
                text-xs
                font-bold
                tracking-[0.16em]
                text-primary
              "
            >
              SPEAKERS
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-dark
                md:text-5xl
              "
            >
              مهمانان و سخنرانان
            </h2>
          </div>

          <p
            className="
              max-w-lg
              text-sm
              leading-8
              text-gray
            "
          >
            تجربه‌ها و دیدگاه‌های واقعی از افرادی که مسیر
            کسب‌وکار را از نزدیک ساخته‌اند.
          </p>
        </div>


        <div
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {speakers.map((speaker, index) => (
            <article
              key={speaker.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-dark/5
                bg-light
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-gold/30
                hover:shadow-[0_18px_45px_rgba(21,59,68,0.08)]
              "
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[22px]
                    bg-dark
                    text-2xl
                    font-black
                    text-gold
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <ArrowUpLeft
                  size={20}
                  className="
                    text-gray/30
                    transition-all
                    duration-300
                    group-hover:-translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-gold
                  "
                />
              </div>


              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-primary
                "
              >
                <Mic2 size={17} />

                <span
                  className="
                    text-xs
                    font-bold
                  "
                >
                  سخنران رویداد
                </span>
              </div>


              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  text-dark
                "
              >
                {speaker.name}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  font-bold
                  text-gold
                "
              >
                {speaker.role}
              </p>

              <p
                className="
                  mt-5
                  text-sm
                  leading-8
                  text-gray
                "
              >
                {speaker.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}