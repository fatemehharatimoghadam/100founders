export default function EventHero() {


  return (

    <section
      className="
      min-h-[70vh]
      flex
      items-center
      px-6
      py-20
      bg-[rgb(31,73,61)]
      text-white
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        text-center
        "
      >


        <p
          className="
          tracking-widest
          text-[rgb(243,239,232)]
          font-medium
          "
        >
          EVENT
        </p>



        <h1
          className="
          mt-6
          text-4xl
          md:text-6xl
          font-bold
          leading-relaxed
          "
        >

          اولین گردهمایی{" "}

          <span dir="ltr">
            100 CEOs
          </span>

        </h1>




        <p
          className="
          mt-6
          text-xl
          text-[rgb(243,239,232)]
          "
        >

          گردهمایی مدیران ارشد برای توسعه،
          همکاری و ساخت آینده کسب‌وکار

        </p>




        <div
          className="
          mt-10
          grid
          md:grid-cols-3
          gap-5
          "
        >


          <div
            className="
            bg-white/10
            rounded-2xl
            p-5
            "
          >

            <p className="text-sm">
              تاریخ
            </p>

            <p className="font-bold mt-2">
              ۱ شهریور ۱۴۰۵
            </p>

          </div>




          <div
            className="
            bg-white/10
            rounded-2xl
            p-5
            "
          >

            <p className="text-sm">
              شهر
            </p>

            <p className="font-bold mt-2">
              زاهدان
            </p>

          </div>




          <div
            className="
            bg-white/10
            rounded-2xl
            p-5
            "
          >

            <p className="text-sm">
              محل برگزاری
            </p>

            <p className="font-bold mt-2">
              کافه گرند سنتنیال
            </p>

          </div>



        </div>


      </div>


    </section>

  );

}