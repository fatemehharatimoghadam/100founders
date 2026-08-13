export default function Venue() {


  return (

    <section
      className="
      py-24
      px-6
      bg-[rgb(243,239,232)]
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        "
      >


        <div
          className="
          text-center
          mb-14
          "
        >

          <p
            className="
            text-[rgb(51,102,89)]
            font-medium
            tracking-widest
            "
          >
            VENUE
          </p>


          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-[rgb(31,73,61)]
            "
          >
            محل برگزاری
          </h2>


        </div>



        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          items-center
          "
        >


          {/* Image Placeholder */}

          <div
            className="
            h-96
            rounded-3xl
            bg-[#E7E0D7]
            flex
            items-center
            justify-center
            text-[rgb(51,102,89)]
            font-bold
            "
          >

            تصویر محل برگزاری

          </div>




          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
            "
          >


            <h3
              className="
              text-3xl
              font-bold
              text-[rgb(31,73,61)]
              "
            >
              کافه گرند سنتنیال
            </h3>



            <p
              className="
              mt-3
              text-gray-600
              "
            >
              زاهدان
            </p>



            <div
              className="
              mt-8
              space-y-4
              "
            >


              <div>

                <h4
                  className="
                  font-bold
                  text-[rgb(31,73,61)]
                  "
                >
                  آدرس
                </h4>


                <p
                  className="
                  mt-2
                  text-gray-600
                  leading-8
                  "
                >
                  آدرس دقیق محل برگزاری پس از دریافت اطلاعات
                  تکمیل خواهد شد.
                </p>


              </div>




              <button
                className="
                btn
                bg-[rgb(51,102,89)]
                text-white
                border-none
                w-full
                hover:bg-[rgb(31,73,61)]
                "
              >
                مشاهده مسیر روی نقشه
              </button>


            </div>


          </div>



        </div>


      </div>


    </section>

  );

}