import Link from "next/link";


export default function About() {

  return (

    <section
      id="about"
      className="
      py-32
      px-6
      bg-white
      "
    >


      <div
        className="
        max-w-5xl
        mx-auto
        text-center
        "
      >



        <p
          className="
          text-[rgb(0,109,119)]
          font-medium
          tracking-[0.35em]
          text-sm
          mb-8
          "
        >
          ABOUT{" "}
          <span dir="ltr">
            100 CEOs
          </span>
        </p>





        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          leading-[1.8]
          text-[rgb(21,59,68)]
          "
        >

          شبکه‌ای از مدیران ارشد

          <br />

          برای ساخت آینده کسب‌وکار

        </h2>





        <p
          className="
          mt-10
          max-w-3xl
          mx-auto
          text-lg
          leading-10
          text-[rgb(102,122,126)]
          "
        >

          <span dir="ltr">
            100 CEOs
          </span>

          یک شبکه تخصصی از مدیرعاملان و مدیران ارشد شرکت‌هاست
          که با هدف ایجاد ارتباطات حرفه‌ای، انتقال تجربه،
          توسعه همکاری‌های اقتصادی و بررسی چالش‌های مدیریتی
          شکل گرفته است.

        </p>





        <p
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          leading-10
          text-[rgb(102,122,126)]
          "
        >

          این شبکه بستری برای گفتگو، تبادل دانش،
          ایجاد فرصت‌های همکاری و توسعه روابط میان
          رهبران کسب‌وکار فراهم می‌کند.

        </p>





        <Link

          href="/about"

          className="
          inline-flex
          mt-10
          px-8
          py-3
          rounded-xl
          bg-[rgb(0,109,119)]
          text-white
          font-medium
          hover:bg-[rgb(21,59,68)]
          transition
          "

        >

          بیشتر درباره ما

        </Link>



      </div>


    </section>

  );

}