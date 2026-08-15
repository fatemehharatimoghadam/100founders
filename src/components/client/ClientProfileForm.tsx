"use client";

import Image from "next/image";
import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Send,
  Check,
  Cpu,
  Building2,
  Factory,
  Zap,
  Globe,
  Sprout,
  BriefcaseBusiness,
  TrendingUp,
  Save,
} from "lucide-react";


const zones = [
  {
    title: "فناوری",
    desc: "هوش مصنوعی، نرم‌افزار و تکنولوژی",
    icon: Cpu,
  },
  {
    title: "سرمایه‌گذاری",
    desc: "سرمایه، VC و توسعه کسب‌وکار",
    icon: TrendingUp,
  },
  {
    title: "ساخت‌وساز",
    desc: "املاک و پروژه‌های عمرانی",
    icon: Building2,
  },
  {
    title: "صنعت",
    desc: "تولید و زنجیره تامین",
    icon: Factory,
  },
  {
    title: "انرژی",
    desc: "انرژی و زیرساخت",
    icon: Zap,
  },
  {
    title: "بازرگانی",
    desc: "تجارت داخلی و خارجی",
    icon: Globe,
  },
  {
    title: "کشاورزی",
    desc: "کشاورزی مدرن",
    icon: Sprout,
  },
  {
    title: "خدمات",
    desc: "خدمات تخصصی",
    icon: BriefcaseBusiness,
  },
];


export default function ClientProfileForm({
  id,
}: {
  id: string;
}) {


  const [selected, setSelected] = useState<string[]>([]);



  function toggleZone(zone: string) {

    setSelected((current) =>
      current.includes(zone)
        ? current.filter((item) => item !== zone)
        : [...current, zone]
    );

  }



  return (

    <section

      className="
      overflow-hidden
      rounded-[40px]

      border
      border-white/40

      bg-white/20

      shadow-[0_30px_90px_rgba(0,109,119,0.18)]

      backdrop-blur-2xl

      lg:grid
      lg:grid-cols-[300px_1fr]
      "

    >



      {/* SIDEBAR */}

      <aside

        className="
        border-l
        border-white/20

        bg-[#153B44]/50

        p-8

        text-white

        backdrop-blur-2xl
        "

      >


        <div
          className="
          flex
          flex-col
          items-center
          "
        >

          <Image
            src="/images/logo.png"
            alt="100Founders"
            width={90}
            height={90}
            className="object-contain"
          />


          <h2
            className="
            mt-5
            text-xl
            font-black
            "
          >
            تنظیمات عضویت
          </h2>


          <p
            className="
            mt-2
            text-xs
            text-white/60
            "
          >
            100Founders Network
          </p>


        </div>




        <nav
          className="
          mt-10
          space-y-3
          "
        >

          {
            [
              "اطلاعات پروفایل",
              "حوزه‌های فعالیت",
              "امنیت حساب",
              "QR اختصاصی",
            ].map((item,index)=>(

              <div

                key={item}

                className={`
                rounded-2xl
                border
                px-5
                py-4

                text-sm
                font-bold

                transition-all

                ${
                  index === 0
                    ?
                    "border-white/30 bg-white/20"
                    :
                    "border-transparent text-white/60 hover:bg-white/10"
                }
                `}

              >
                {item}

              </div>

            ))
          }


        </nav>


      </aside>






      {/* CONTENT */}


      <div
        className="
        p-7

        md:p-12
        "
      >


        <h1

          className="
          text-3xl
          font-black
          text-[#153B44]

          md:text-4xl
          "

        >
          تکمیل پروفایل حرفه‌ای
        </h1>


        <p

          className="
          mt-3
          leading-8
          text-gray-600
          "

        >
          اطلاعات شما برای ساخت پروفایل اختصاصی در شبکه 100Founders استفاده خواهد شد.
        </p>





        {/* INPUTS */}


        <div

          className="
          mt-10

          grid
          gap-5

          md:grid-cols-2
          "

        >

          <Input
            icon={<User size={18}/>}
            placeholder="نام و نام خانوادگی"
          />


          <Input
            icon={<Mail size={18}/>}
            placeholder="ایمیل"
          />


          <Input
            icon={<Phone size={18}/>}
            placeholder="شماره موبایل"
          />


          <Input
            icon={<Send size={18}/>}
            placeholder="Telegram ID"
          />

        </div>






        {/* ZONES */}


        <div
          className="
          mt-12
          "
        >

          <h2
            className="
            text-xl
            font-black
            text-[#153B44]
            "
          >
            حوزه‌های فعالیت
          </h2>


          <p
            className="
            mt-2
            text-sm
            text-gray-500
            "
          >
            حوزه‌هایی که در آن فعالیت دارید انتخاب کنید
          </p>



          <div

            className="
            mt-6

            grid

            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
            "

          >


            {
              zones.map((zone)=>{

                const Icon = zone.icon;

                const active =
                  selected.includes(zone.title);



                return (

                  <button

                    key={zone.title}

                    type="button"

                    onClick={() =>
                      toggleZone(zone.title)
                    }


                    className={`

                    relative

                    rounded-[28px]

                    border

                    p-5

                    text-right

                    transition-all

                    duration-300

                    backdrop-blur-xl


                    ${
                      active

                      ?

                      "border-[#D1A054] bg-gradient-to-br from-[#006D77]/30 to-[#83C5BE]/30 shadow-[0_0_35px_rgba(209,160,84,0.25)]"

                      :

                      "border-white/50 bg-white/30 hover:bg-white/50"

                    }

                    `}

                  >


                    {
                      active && (

                        <span

                          className="
                          absolute

                          left-4
                          top-4

                          flex

                          h-6
                          w-6

                          items-center
                          justify-center

                          rounded-full

                          bg-[#D1A054]

                          text-white
                          "

                        >

                          <Check size={14}/>

                        </span>

                      )
                    }



                    <div

                      className="
                      flex

                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-xl

                      bg-[#006D77]/10

                      text-[#006D77]
                      "

                    >

                      <Icon size={22}/>

                    </div>



                    <h3

                      className="
                      mt-4
                      font-black
                      text-[#153B44]
                      "

                    >
                      {zone.title}

                    </h3>


                    <p

                      className="
                      mt-2

                      text-xs

                      leading-5

                      text-gray-500
                      "

                    >
                      {zone.desc}

                    </p>


                  </button>

                );

              })
            }


          </div>


        </div>






        <textarea

          placeholder="معرفی کوتاه درباره فعالیت حرفه‌ای شما..."

          className="

          mt-10

          h-32

          w-full

          rounded-[28px]

          border

          border-white/50

          bg-white/30

          p-5

          text-sm

          outline-none

          backdrop-blur-xl

          focus:border-[#006D77]

          "

        />




        <button

          className="

          mt-8

          flex

          items-center

          gap-3

          rounded-2xl

          bg-[#006D77]

          px-10

          py-4

          font-black

          text-white

          shadow-xl

          transition-all

          hover:-translate-y-1

          hover:bg-[#153B44]

          "

        >

          <Save size={18}/>

          ذخیره تغییرات


        </button>


      </div>


    </section>

  );

}





function Input({
  icon,
  placeholder,
}:{
  icon: React.ReactNode;
  placeholder:string;
}) {


  return (

    <div
      className="
      relative
      "
    >

      <div

        className="
        absolute

        right-4

        top-1/2

        -translate-y-1/2

        text-[#006D77]
        "

      >

        {icon}

      </div>



      <input

        placeholder={placeholder}

        className="

        h-14

        w-full

        rounded-2xl

        border

        border-white/50

        bg-white/30

        pr-12

        text-sm

        text-[#153B44]

        placeholder:text-gray-400

        outline-none

        backdrop-blur-xl

        transition-all

        focus:border-[#006D77]

        focus:bg-white/50

        "

      />

    </div>

  );

}