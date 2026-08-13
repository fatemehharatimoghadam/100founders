import {
  Network,
  Lightbulb,
  Handshake,
  TrendingUp
} from "lucide-react";


const values = [

  {
    icon: Network,
    title: "شبکه‌سازی مدیریتی",
    description:
      "ایجاد ارتباط میان مدیرعاملان و مدیران ارشد شرکت‌ها برای توسعه روابط حرفه‌ای."
  },

  {
    icon: Lightbulb,
    title: "انتقال تجربه",
    description:
      "اشتراک تجربه‌های واقعی مدیران در مسیر رشد و توسعه کسب‌وکار."
  },

  {
    icon: Handshake,
    title: "فرصت‌های همکاری",
    description:
      "ایجاد مسیرهای جدید برای همکاری تجاری، سرمایه‌گذاری و مشارکت."
  },

  {
    icon: TrendingUp,
    title: "توسعه اقتصادی",
    description:
      "بررسی راهکارهای رشد سازمان‌ها و توسعه منابع انسانی."
  }

];



export default function Values() {


  return (

    <section

      id="values"

      className="
      py-32
      px-6
      bg-[rgb(237,246,245)]
      "

    >


      <div className="max-w-7xl mx-auto">



        {/* Header */}

        <div className="text-center mb-20">


          <p

            className="
            text-[rgb(0,109,119)]
            tracking-[0.35em]
            font-medium
            text-sm
            "

          >

            OUR VALUES

          </p>



          <h2

            className="
            mt-5
            text-4xl
            md:text-5xl
            font-bold
            text-[rgb(21,59,68)]
            "

          >

            ارزش‌های شبکه{" "}

            <span dir="ltr">
              100 CEOs
            </span>

          </h2>


        </div>






        {/* Cards */}

        <div

          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "

        >



          {
            values.map((item,index)=>{


              const Icon = item.icon;



              return (

                <div

                  key={index}

                  className="
                  group
                  bg-white
                  rounded-2xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                  "

                >





                  {/* Icon */}

                  <div

                    className="
                    w-14
                    h-14
                    rounded-xl
                    bg-[rgb(237,246,245)]
                    flex
                    items-center
                    justify-center
                    mb-8
                    transition-all
                    duration-500
                    group-hover:bg-[rgb(209,160,84)]
                    "

                  >



                    <Icon

                      size={28}

                      className="
                      text-[rgb(0,109,119)]
                      transition-all
                      duration-500
                      group-hover:text-white
                      "

                    />


                  </div>






                  {/* Title */}

                  <h3

                    className="
                    text-xl
                    font-bold
                    text-[rgb(21,59,68)]
                    "

                  >

                    {item.title}

                  </h3>






                  {/* Description */}

                  <p

                    className="
                    mt-5
                    leading-8
                    text-[rgb(102,122,126)]
                    "

                  >

                    {item.description}

                  </p>




                </div>

              );


            })
          }



        </div>



      </div>


    </section>

  );

}