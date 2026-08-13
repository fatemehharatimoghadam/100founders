import Link from "next/link";


export default function EventCTA() {


  return (

    <section
      className="
      py-24
      px-6
      bg-[rgb(31,73,61)]
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        text-center
        "
      >


        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
          leading-relaxed
          "
        >

          آماده حضور در اولین گردهمایی{" "}

          <span dir="ltr">
            100 CEOs
          </span>

          هستید؟

        </h2>



        <p
          className="
          mt-6
          text-[rgb(243,239,232)]
          text-lg
          leading-8
          "
        >

          برای تأیید حضور و تکمیل اطلاعات مدیر،
          وارد شبکه شوید.

        </p>




        <Link

          href="/login"

          className="
          btn
          mt-8
          bg-[rgb(243,239,232)]
          text-[rgb(31,73,61)]
          border-none
          px-10
          hover:bg-white
          "

        >

          ثبت حضور در رویداد

        </Link>



      </div>


    </section>

  );

}