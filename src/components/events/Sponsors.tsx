const sponsors = [
  {
    name: "آوید",
    description:
      "مجموعه همراه و حامی این دوره از رویداد 100 CEOs",
  },
];


export default function Sponsors() {

  return (

    <section
      className="
      py-24
      px-6
      bg-white
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
            SPONSORS
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
            حامیان و مجموعه‌های همکار
          </h2>

        </div>



        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >

          {
            sponsors.map((item,index)=>(

              <div
                key={index}
                className="
                rounded-3xl
                bg-[rgb(243,239,232)]
                p-8
                text-center
                border
                border-[#E7E0D7]
                "
              >


                <div
                  className="
                  w-24
                  h-24
                  mx-auto
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[rgb(51,102,89)]
                  font-bold
                  "
                >
                  Logo
                </div>



                <h3
                  className="
                  mt-6
                  text-xl
                  font-bold
                  text-[rgb(31,73,61)]
                  "
                >
                  {item.name}
                </h3>



                <p
                  className="
                  mt-3
                  text-gray-600
                  leading-7
                  "
                >
                  {item.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}