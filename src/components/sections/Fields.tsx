import Image from "next/image";


const fields = [

  {
    title: "املاک و ساخت‌وساز",
    image: "/images/fields/realestate.jpeg",
  },

  {
    title: "کافه و رستوران",
    image: "/images/fields/restaurant.jpeg",
  },

  {
    title: "گردشگری و هتلداری",
    image: "/images/fields/tourism.jpeg",
  },

  {
    title: "زیبایی و سلامت",
    image: "/images/fields/health.jpeg",
  },

  {
    title: "خودرویی",
    image: "/images/fields/automotive.jpeg",
  },

  {
    title: "صنعت و معدن",
    image: "/images/fields/industry.jpeg",
  },

];



export default function Fields() {


  return (

    <section

      className="
      py-32
      px-6
      bg-white
      "

    >


      <div className="max-w-7xl mx-auto">



        {/* Header */}

        <div

          className="
          text-center
          mb-16
          "

        >


          <p

            className="
            text-[rgb(0,109,119)]
            text-sm
            font-medium
            tracking-[0.35em]
            "

          >

            BUSINESS FIELDS

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

            حوزه‌های فعالیت اعضای شبکه

          </h2>


        </div>






        {/* Cards */}

        <div

          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-5
          "

        >



          {
            fields.map((field,index)=>(


              <div

                key={index}

                className="
                group
                relative
                h-[360px]
                overflow-hidden
                rounded-2xl
                cursor-pointer
                "

              >



                {/* Image */}

                <Image

                  src={field.image}

                  alt={field.title}

                  fill

                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "

                />





                {/* Overlay */}

                <div

                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[rgb(21,59,68)]
                  via-[rgba(21,59,68,0.25)]
                  to-transparent
                  transition
                  duration-500
                  group-hover:from-[rgb(21,59,68)]
                  "

                />






                {/* Title */}

                <div

                  className="
                  absolute
                  bottom-0
                  right-0
                  left-0
                  p-6
                  "

                >

                  <h3

                    className="
                    text-lg
                    font-bold
                    text-white
                    transition
                    duration-500
                    group-hover:text-[rgb(209,160,84)]
                    "

                  >

                    {field.title}

                  </h3>


                </div>





              </div>


            ))
          }



        </div>



      </div>


    </section>

  );

}