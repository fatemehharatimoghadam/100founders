import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
} from "lucide-react";


const agenda = [
  {
    time: "18:00",
    title: "پذیرش مهمانان",
    description:
      "ورود مهمانان، پذیرش و آغاز ارتباط‌های اولیه میان اعضای شبکه.",
  },
  {
    time: "18:30",
    title: "افتتاحیه",
    description:
      "معرفی 100Founders، اهداف رویداد و مسیر پیش‌روی شبکه.",
  },
  {
    time: "19:00",
    title: "سخنرانی‌ها",
    description:
      "ارائه تجربه‌ها و دیدگاه‌های مدیریتی توسط مهمانان رویداد.",
  },
  {
    time: "20:30",
    title: "شبکه‌سازی",
    description:
      "گفت‌وگوی مستقیم اعضا و ایجاد زمینه‌های همکاری و ارتباط حرفه‌ای.",
  },
  {
    time: "22:00",
    title: "اختتامیه",
    description:
      "جمع‌بندی رویداد و پایان رسمی اولین گردهمایی.",
  },
];


export default function Agenda() {
  return (
    <section
      id="agenda"
      className="
        bg-light
        px-6
        py-24
        md:py-28
      "
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p
            dir="ltr"
            className="
              text-xs
              font-bold
              tracking-[0.16em]
              text-primary
            "
          >
            EVENT AGENDA
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
            برنامه زمانی رویداد
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-8
              text-gray
            "
          >
            از پذیرش تا شبکه‌سازی؛ یک برنامه منظم برای
            گفت‌وگو، یادگیری و ساخت ارتباط‌های تازه.
          </p>
        </div>


        <div
          className="
            relative
            mt-14
            space-y-5
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-10
              right-[31px]
              top-10
              hidden
              w-px
              bg-gold/25
              sm:block
            "
          />

          {agenda.map((item, index) => (
            <div
              key={item.time}
              className="
                group
                relative
                flex
                gap-5
                rounded-[26px]
                border
                border-dark/5
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold/25
                hover:shadow-lg
                sm:p-6
              "
            >
              <div
                className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-dark
                  text-gold
                "
              >
                <Clock3 size={19} />
              </div>


              <div className="flex-1">
                <div
                  className="
                    flex
                    flex-col
                    gap-2
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-black
                      text-dark
                      md:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    dir="ltr"
                    className="
                      w-fit
                      rounded-full
                      bg-light
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-primary
                    "
                  >
                    {item.time}
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-gray
                  "
                >
                  {item.description}
                </p>
              </div>


              <div
                className="
                  hidden
                  items-center
                  sm:flex
                "
              >
                {index === agenda.length - 1 ? (
                  <CheckCircle2
                    size={19}
                    className="text-gold"
                  />
                ) : (
                  <ArrowLeft
                    size={17}
                    className="
                      text-gray/30
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                      group-hover:text-gold
                    "
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}