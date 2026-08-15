import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProfileHero from "@/components/dashboard/ProfileHero";


export default function DashboardPage() {

  return (

    <DashboardLayout>


      {/* Profile Hero */}

      <ProfileHero />



      {/* Dashboard Welcome */}

      <div
        className="
        mt-8
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.04]
        p-8

        backdrop-blur-xl
        "
      >

        <h2
          className="
          text-3xl
          font-black
          text-[#B9A27B]
          "
        >
          100Founders Dashboard
        </h2>


        <p
          className="
          mt-4
          leading-8
          text-white/60
          "
        >
          پنل اختصاصی اعضای شبکه مدیران و بنیان‌گذاران
          برای مدیریت پروفایل، کارت عضویت و ارتباطات حرفه‌ای.
        </p>


      </div>



      {/* Quick Cards Placeholder */}

      <div
        className="
        mt-8
        grid
        gap-6

        md:grid-cols-3
        "
      >


        <div
          className="
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          p-6
          "
        >

          <p
            className="
            text-sm
            text-white/40
            "
          >
            کارت عضویت
          </p>


          <p
            className="
            mt-3
            text-xl
            font-black
            text-white
            "
          >
            VIP Member Card
          </p>

        </div>




        <div
          className="
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          p-6
          "
        >

          <p
            className="
            text-sm
            text-white/40
            "
          >
            QR اختصاصی
          </p>


          <p
            className="
            mt-3
            text-xl
            font-black
            text-white
            "
          >
            Profile QR
          </p>

        </div>




        <div
          className="
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          p-6
          "
        >

          <p
            className="
            text-sm
            text-white/40
            "
          >
            رویدادها
          </p>


          <p
            className="
            mt-3
            text-xl
            font-black
            text-white
            "
          >
            Upcoming Events
          </p>

        </div>


      </div>


    </DashboardLayout>

  );

}