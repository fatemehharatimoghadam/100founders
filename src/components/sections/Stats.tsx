import Image from "next/image";
import Counter from "@/components/ui/Counter";


const stats = [

  {
    number: 100,
    title: "مدیرعامل و مدیر ارشد",
  },

  {
    number: 8,
    title: "حوزه فعالیت",
  },

  {
    number: 50,
    title: "شرکت عضو شبکه",
  },

  {
    number: 20,
    title: "جلسه و گردهمایی",
  },

];



export default function Stats() {


  return (

    <section

      className="
      relative
      py-32
      px-6
      overflow-hidden
      "

    >



      {/* Background Image */}

      <Image

        src="/images/stats-bg.PNG"

        alt="network statistics background"

        fill

        className="
        object-cover
        "

      />




      {/* Overlay */}

      <div

        className="
        absolute
        inset-0
        bg-[rgb(21,59,68)]/50
        "

      />





      <div

        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        "

      >





        {/* Header */}

        <div

          className="
          text-center
          mb-16
          "

        >



          <p

            className="
            text-[rgb(237,246,245)]
            tracking-[0.35em]
            text-sm
            "

          >

            NETWORK STATISTICS

          </p>




          <h2

            className="
            mt-5
            text-4xl
            md:text-5xl
            font-bold
            text-white
            "

          >

            شبکه‌ای از مدیران تاثیرگذار

          </h2>



        </div>







        {/* Cards */}

        <div

          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "

        >



          {

            stats.map((item,index)=>(


              <div

                key={index}

                className="
                group
                aspect-square
                flex
                flex-col
                justify-center
                items-center
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:bg-white/20
                hover:border-[rgb(209,160,84)]
                "

              >




                <h3

                  className="
                  text-6xl
                  font-extrabold
                  text-white
                  "

                >

                  <Counter value={item.number}/>

                </h3>





                <p

                  className="
                  mt-5
                  text-white/80
                  text-center
                  px-5
                  text-lg
                  "

                >

                  {item.title}

                </p>



              </div>


            ))

          }


        </div>



      </div>



    </section>


  );

}