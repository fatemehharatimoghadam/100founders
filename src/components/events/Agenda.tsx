const agenda = [
  {
    time: "18:00",
    title: "پذیرش مهمانان",
    description:
      "ورود مدیران و مهمانان ویژه و آغاز فرآیند پذیرش.",
  },

  {
    time: "18:30",
    title: "افتتاحیه",
    description:
      "شروع رسمی برنامه و معرفی اهداف گردهمایی.",
  },

  {
    time: "19:00",
    title: "سخنرانی‌ها",
    description:
      "ارائه دیدگاه‌ها و تجربه‌های مدیریتی توسط سخنرانان.",
  },

  {
    time: "20:30",
    title: "جلسه شبکه‌سازی",
    description:
      "ارتباط مستقیم مدیران و ایجاد فرصت‌های همکاری.",
  },

  {
    time: "22:00",
    title: "اختتامیه",
    description:
      "پایان برنامه و جمع‌بندی رویداد.",
  },
];


export default function Agenda() {

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
        max-w-5xl
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
            AGENDA
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
            برنامه رویداد
          </h2>

        </div>



        <div
          className="
          space-y-6
          "
        >

          {
            agenda.map((item,index)=>(

              <div
                key={index}
                className="
                flex
                gap-6
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                "
              >


                <div
                  className="
                  min-w-24
                  h-20
                  rounded-2xl
                  bg-[rgb(31,73,61)]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  "
                  dir="ltr"
                >
                  {item.time}
                </div>



                <div>

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-[rgb(31,73,61)]
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                    mt-2
                    text-gray-600
                    leading-8
                    "
                  >
                    {item.description}
                  </p>


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}