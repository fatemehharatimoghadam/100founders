export default function ContactPage() {

  return (

    <main
      className="
      min-h-screen
      bg-[#F3EFE8]
      px-6
      py-20
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
          mb-16
          "
        >

          <div
            className="
            text-2xl
            font-bold
            text-[#1F493D]
            "
            dir="ltr"
          >
            100 CEOs
          </div>


          <h1
            className="
            mt-5
            text-4xl
            md:text-5xl
            font-bold
            text-[#1F493D]
            "
          >
            تماس با ما
          </h1>


          <p
            className="
            mt-4
            text-[#6B6B6B]
            leading-8
            "
          >
            برای ارتباط با شبکه مدیران و دریافت اطلاعات بیشتر
            با ما در تماس باشید.
          </p>


        </div>



        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >


          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            text-center
            "
          >

            <h3
              className="
              font-bold
              text-[#1F493D]
              text-xl
              "
            >
              تلفن
            </h3>


            <p
              className="
              mt-4
              text-gray-600
              "
              dir="ltr"
            >
              02191035274
            </p>

          </div>




          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            text-center
            "
          >

            <h3
              className="
              font-bold
              text-[#1F493D]
              text-xl
              "
            >
              ایمیل
            </h3>


            <p
              className="
              mt-4
              text-gray-600
              "
              dir="ltr"
            >
              info@100ceos.ir
            </p>


          </div>




          <div
            className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            text-center
            "
          >

            <h3
              className="
              font-bold
              text-[#1F493D]
              text-xl
              "
            >
              اینستاگرام
            </h3>


            <p
              className="
              mt-4
              text-gray-600
              "
              dir="ltr"
            >
              @100.ceos.ir
            </p>


          </div>


        </div>



        <div
          className="
          mt-10
          bg-white
          rounded-3xl
          shadow-md
          p-8
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            text-[#1F493D]
            mb-6
            "
          >
            ارسال پیام
          </h2>



          <div className="space-y-4">


            <input
              placeholder="نام"
              className="
              input
              input-bordered
              w-full
              "
            />


            <input
              placeholder="ایمیل"
              className="
              input
              input-bordered
              w-full
              "
            />


            <textarea
              placeholder="پیام شما"
              className="
              textarea
              textarea-bordered
              w-full
              h-32
              "
            />


            <button
              className="
              btn
              bg-[#336659]
              text-white
              border-none
              w-full
              hover:bg-[#1F493D]
              "
            >
              ارسال پیام
            </button>


          </div>


        </div>



      </div>


    </main>

  );

}