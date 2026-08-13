import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

import {
  ArrowLeft,
  ArrowUpLeft,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

import Footer from "@/components/layout/Footer";


const contactItems = [
  {
    label: "تماس مستقیم",
    value: "02191035274",
    description: "برای ارتباط مستقیم با تیم 100Founders",
    href: "tel:02191035274",
    icon: Phone,
  },
  {
    label: "ایمیل",
    value: "info@100ceos.ir",
    description: "برای همکاری، پیشنهادها و ارتباطات رسمی",
    href: "mailto:info@100ceos.ir",
    icon: Mail,
  },
  {
    label: "اینستاگرام",
    value: "@100.ceos.ir",
    description: "آخرین اخبار و رویدادهای شبکه",
    href: "https://instagram.com/100.ceos.ir",
    icon: Instagram,
  },
] as const;


export default function ContactPage() {
  return (
    <>
    <Navbar />

      <main
        dir="rtl"
        className="
          min-h-screen
          bg-light
          pt-[72px]
        "
      >

        {/* ========================================
            HERO
        ======================================== */}

        <section
          className="
            px-4
            pt-6
            md:px-6
            md:pt-8
          "
        >
          <div
            className="
              relative
              mx-auto
              min-h-[520px]
              max-w-7xl
              overflow-hidden
              rounded-[32px]
              bg-dark
              px-6
              py-20
              text-white

              shadow-[0_24px_70px_rgba(21,59,68,0.16)]

              md:min-h-[570px]
              md:rounded-[42px]
              md:px-10
              md:py-24

              lg:flex
              lg:items-center
              lg:justify-center
            "
          >

            {/* Main Gradient */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-primary/90
                via-dark
                to-dark
              "
            />


            {/* Left Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-36
                -top-24
                h-[500px]
                w-[500px]
                rounded-full
                bg-soft/40
                blur-[90px]
              "
            />


            {/* Right Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-48
                -right-32
                h-[520px]
                w-[520px]
                rounded-full
                bg-primary/25
                blur-[100px]
              "
            />


            {/* Decorative Arc - Right */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-28
                top-20
                h-[430px]
                w-[430px]
                rounded-full
                border
                border-white/[0.06]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-10
                top-32
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-white/[0.05]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-12
                top-44
                h-[230px]
                w-[230px]
                rounded-full
                border
                border-gold/[0.08]
              "
            />


            {/* Decorative Arc - Left */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-32
                bottom-[-170px]
                h-[470px]
                w-[470px]
                rounded-full
                border
                border-white/[0.06]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-12
                bottom-[-100px]
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-white/[0.05]
              "
            />


            {/* Dot Pattern */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-12
                top-12
                h-28
                w-28
                opacity-20
                [background-image:radial-gradient(circle,var(--color-gold)_1.4px,transparent_1.4px)]
                [background-size:13px_13px]
              "
            />


            {/* Hero Content */}
            <div
              className="
                relative
                z-10
                mx-auto
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
                <span className="h-px w-8 bg-gold/80" />

                <p
                  dir="ltr"
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.22em]
                    text-gold
                    md:text-xs
                  "
                >
                  CONTACT 100FOUNDERS
                </p>

                <span className="h-px w-8 bg-gold/80" />
              </div>


              <h1
                className="
                  mt-7
                  text-4xl
                  font-black
                  leading-[1.5]

                  sm:text-5xl

                  md:text-6xl
                  md:leading-[1.45]

                  lg:text-[68px]
                "
              >
                ارتباط‌هایی که

                <br />

                <span className="text-gold">
                  فرصت می‌سازند
                </span>
              </h1>


              <p
                className="
                  mx-auto
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-8
                  text-white/60

                  md:text-base
                  md:leading-9
                "
              >
                برای عضویت، همکاری، حضور در رویدادها یا ارتباط
                با شبکه 100Founders، تیم ما آماده گفت‌وگو با شماست.
              </p>


              <div
                className="
                  mt-9
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3

                  sm:flex-row
                "
              >
                <a
                  href="tel:02191035274"
                  className="
                    group
                    inline-flex
                    h-13
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-gold
                    px-7
                    text-sm
                    font-bold
                    text-dark

                    shadow-[0_10px_30px_rgba(209,160,84,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_14px_35px_rgba(209,160,84,0.28)]
                  "
                >
                  ارتباط با تیم

                  <ArrowLeft
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />
                </a>


                <a
                  href="#contact-methods"
                  className="
                    inline-flex
                    h-13
                    min-w-[190px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-7
                    text-sm
                    font-bold
                    text-white

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    hover:border-white/30
                    hover:bg-white/10
                  "
                >
                  راه‌های ارتباطی
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* ========================================
            CONTACT INTRO
        ======================================== */}

        <section
          id="contact-methods"
          className="
            px-6
            py-20
            md:py-28
          "
        >
          <div className="mx-auto max-w-7xl">

            <div
              className="
                flex
                flex-col
                gap-5

                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    tracking-[0.16em]
                    text-primary
                  "
                >
                  راه‌های ارتباط
                </p>

                <h2
                  className="
                    mt-4
                    text-3xl
                    font-black
                    leading-[1.5]
                    text-dark

                    md:text-4xl
                  "
                >
                  چگونه می‌توانیم
                  <br />
                  با شما در ارتباط باشیم؟
                </h2>
              </div>


              <p
                className="
                  max-w-md
                  text-sm
                  leading-8
                  text-gray

                  md:text-base
                "
              >
                سریع‌ترین مسیر ارتباطی را انتخاب کنید.
                تیم 100Founders برای پاسخ‌گویی درباره عضویت،
                همکاری و رویدادهای شبکه در دسترس شماست.
              </p>
            </div>



            {/* ========================================
                BENTO GRID
            ======================================== */}

            <div
              className="
                mt-12
                grid
                gap-5

                md:grid-cols-2

                lg:grid-cols-12
                lg:grid-rows-2
              "
            >

              {/* PHONE - FEATURED CARD */}
              <a
                href={contactItems[0].href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  bg-dark
                  p-7
                  text-white

                  shadow-[0_14px_40px_rgba(21,59,68,0.12)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(21,59,68,0.18)]

                  md:min-h-[350px]

                  lg:col-span-6
                  lg:row-span-2
                  lg:p-9
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-20
                    -top-20
                    h-72
                    w-72
                    rounded-full
                    bg-primary/25
                    blur-3xl
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -right-20
                    h-64
                    w-64
                    rounded-full
                    border
                    border-gold/10
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
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
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/10
                        text-gold

                        transition-all
                        duration-500

                        group-hover:bg-gold
                        group-hover:text-dark
                      "
                    >
                      <Phone size={24} />
                    </div>

                    <ArrowUpLeft
                      size={22}
                      className="
                        text-white/30
                        transition-all
                        duration-300

                        group-hover:-translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-gold
                      "
                    />
                  </div>


                  <div className="mt-auto pt-16">
                    <p
                      className="
                        text-sm
                        font-bold
                        text-gold
                      "
                    >
                      تماس مستقیم
                    </p>

                    <h3
                      dir="ltr"
                      className="
                        mt-4
                        w-fit
                        text-3xl
                        font-black

                        md:text-4xl
                      "
                    >
                      021 9103 5274
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-md
                        text-sm
                        leading-7
                        text-white/55
                      "
                    >
                      برای ارتباط سریع با تیم 100Founders و
                      دریافت اطلاعات درباره شبکه و رویدادها.
                    </p>

                    <div
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      تماس با تیم

                      <ArrowLeft
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </a>



              {/* EMAIL */}
              <a
                href={contactItems[1].href}
                className="
                  group
                  relative
                  min-h-[210px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-dark/[0.06]
                  bg-white
                  p-7

                  shadow-[0_10px_30px_rgba(21,59,68,0.04)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-gold/30
                  hover:shadow-[0_18px_40px_rgba(21,59,68,0.08)]

                  lg:col-span-6
                "
              >
                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-light
                      text-primary

                      transition-all
                      duration-300

                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Mail size={21} />
                  </div>

                  <ArrowUpLeft
                    size={19}
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

                <p
                  className="
                    mt-7
                    text-sm
                    font-bold
                    text-gray
                  "
                >
                  ایمیل
                </p>

                <p
                  dir="ltr"
                  className="
                    mt-2
                    w-fit
                    text-lg
                    font-extrabold
                    text-dark
                  "
                >
                  info@100ceos.ir
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-gray
                  "
                >
                  برای همکاری و مکاتبات رسمی
                </p>
              </a>



              {/* INSTAGRAM */}
              <a
                href={contactItems[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  min-h-[210px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-dark/[0.06]
                  bg-white
                  p-7

                  shadow-[0_10px_30px_rgba(21,59,68,0.04)]

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-gold/30
                  hover:shadow-[0_18px_40px_rgba(21,59,68,0.08)]

                  lg:col-span-3
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-light
                    text-primary

                    transition-all
                    duration-300

                    group-hover:bg-gold
                    group-hover:text-dark
                  "
                >
                  <Instagram size={21} />
                </div>

                <p
                  className="
                    mt-7
                    text-sm
                    font-bold
                    text-gray
                  "
                >
                  اینستاگرام
                </p>

                <p
                  dir="ltr"
                  className="
                    mt-2
                    w-fit
                    text-base
                    font-extrabold
                    text-dark
                  "
                >
                  @100.ceos.ir
                </p>
              </a>



              {/* WORKING HOURS */}
              <div
                className="
                  relative
                  min-h-[210px]
                  overflow-hidden
                  rounded-[30px]
                  bg-[rgb(231,242,240)]
                  p-7

                  lg:col-span-3
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-primary
                  "
                >
                  <Clock3 size={21} />
                </div>

                <p
                  className="
                    mt-7
                    text-sm
                    font-bold
                    text-gray
                  "
                >
                  ساعات پاسخ‌گویی
                </p>

                <p
                  className="
                    mt-2
                    text-base
                    font-extrabold
                    text-dark
                  "
                >
                  شنبه تا چهارشنبه
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-primary
                  "
                >
                  ۹:۰۰ تا ۱۸:۰۰
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ========================================
            LOCATION
        ======================================== */}

        <section
          className="
            bg-white
            px-6
            py-20
            md:py-24
          "
        >
          <div className="mx-auto max-w-7xl">

            <div
              className="
                overflow-hidden
                rounded-[34px]
                border
                border-dark/[0.06]
                bg-light

                shadow-[0_12px_40px_rgba(21,59,68,0.05)]

                lg:grid
                lg:grid-cols-[0.75fr_1.25fr]
              "
            >

              {/* ADDRESS */}
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
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-dark
                    text-gold
                  "
                >
                  <MapPin size={24} />
                </div>

                <p
                  className="
                    mt-8
                    text-xs
                    font-bold
                    tracking-[0.12em]
                    text-primary
                  "
                >
                  دفتر 100FOUNDERS
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-10
                    text-dark

                    md:text-3xl
                  "
                >
                  جایی برای شروع
                  <br />
                  ارتباط‌های تازه
                </h2>

                {/* TODO:
                    Replace this temporary address
                    with the official 100Founders address.
                */}

                <p
                  className="
                    mt-6
                    max-w-sm
                    text-sm
                    leading-8
                    text-gray
                  "
                >
                  تهران، خیابان ولیعصر، بالاتر از میدان ونک،
                  خیابان خدامی، پلاک ۲۴
                </p>

                <a
                  href="#"
                  className="
                    group
                    mt-7
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-primary

                    transition-colors
                    duration-300

                    hover:text-dark
                  "
                >
                  مشاهده موقعیت روی نقشه

                  <ArrowLeft
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />
                </a>
              </div>



              {/* STYLED MAP */}
              <div
                className="
                  relative
                  min-h-[360px]
                  overflow-hidden
                  bg-[rgb(218,234,232)]

                  lg:min-h-[480px]
                "
              >

                {/* Grid */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    opacity-50

                    [background-image:linear-gradient(rgba(21,59,68,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(21,59,68,0.07)_1px,transparent_1px)]
                    [background-size:48px_48px]
                  "
                />


                {/* Fake Roads */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -left-[10%]
                    top-[42%]
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
                    rotate-[18deg]
                    bg-white/65
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -left-[5%]
                    bottom-[15%]
                    h-8
                    w-[110%]
                    rotate-[8deg]
                    bg-white/50
                  "
                />


                {/* Location Ring */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-32
                    w-32
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
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/15
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-dark
                        text-gold

                        shadow-[0_8px_24px_rgba(21,59,68,0.22)]
                      "
                    >
                      <MapPin size={22} />
                    </div>
                  </div>
                </div>


                {/* Map Label */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    rounded-2xl
                    bg-white/90
                    px-5
                    py-4

                    shadow-[0_8px_24px_rgba(21,59,68,0.10)]

                    backdrop-blur-md
                  "
                >
                  <p
                    dir="ltr"
                    className="
                      text-xs
                      font-black
                      text-dark
                    "
                  >
                    100FOUNDERS
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-gray
                    "
                  >
                    دفتر مرکزی تهران
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ========================================
            FINAL CTA
        ======================================== */}

        <section
          className="
            px-6
            py-20
            md:py-24
          "
        >
          <div
            className="
              relative
              mx-auto
              max-w-7xl
              overflow-hidden
              rounded-[34px]
              bg-gradient-to-l
              from-primary
              to-dark
              px-7
              py-12
              text-white

              md:px-12
              md:py-14
            "
          >

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-20
                -top-28
                h-72
                w-72
                rounded-full
                border
                border-white/10
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-32
                right-[20%]
                h-72
                w-72
                rounded-full
                bg-soft/20
                blur-3xl
              "
            />


            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                gap-8
                text-center

                md:flex-row
                md:justify-between
                md:text-right
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-gold

                    md:justify-start
                  "
                >
                  <Users size={18} />

                  <p className="text-sm font-bold">
                    شبکه 100Founders
                  </p>
                </div>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-black
                    leading-10

                    md:text-3xl
                  "
                >
                  آماده‌اید ارتباط بعدی
                  <br className="hidden sm:block" />
                  کسب‌وکارتان را بسازید؟
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  به شبکه‌ای از بنیان‌گذاران و مدیران کسب‌وکار
                  بپیوندید و فرصت‌های تازه‌ای برای همکاری بسازید.
                </p>
              </div>


              <Link
                href="/login"
                className="
                  group
                  inline-flex
                  h-13
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gold
                  px-8
                  text-sm
                  font-bold
                  text-dark

                  shadow-[0_10px_30px_rgba(209,160,84,0.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_14px_34px_rgba(209,160,84,0.28)]
                "
              >
                ورود به شبکه

                <ArrowLeft
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </section>

      </main>


      <Footer />
    </>
  );
}