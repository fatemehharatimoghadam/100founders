const speakers = [
  {
    name: "آقای رستمی",
    bio: "توضیحات کوتاه درباره سوابق، تجربه و حوزه فعالیت سخنران.",
  },
  {
    name: "آقای جعفری",
    bio: "توضیحات کوتاه درباره سوابق، تجربه و حوزه فعالیت سخنران.",
  },
];


export default function Speakers() {
  return (
    <section
      className="
      py-24
      px-6
      bg-white
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <p
            className="
            text-[rgb(51,102,89)]
            font-medium
            tracking-widest
            "
          >
            SPEAKERS
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
            سخنرانان این دوره
          </h2>

          <p
            className="
            mt-4
            text-[#6B6B6B]
            "
          >
            معرفی مهمانان و سخنرانان این گردهمایی
          </p>

        </div>


        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          "
        >

          {speakers.map((speaker) => (

            <article
              key={speaker.name}
              className="
              bg-[rgb(243,239,232)]
              rounded-3xl
              overflow-hidden
              border
              border-[#E7E0D7]
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
              "
            >

              {/* Temporary Image Placeholder */}

              <div
                className="
                h-80
                bg-[#E7E0D7]
                flex
                items-center
                justify-center
                text-[rgb(51,102,89)]
                font-medium
                "
              >
                تصویر سخنران
              </div>


              <div className="p-8">

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[rgb(31,73,61)]
                  "
                >
                  {speaker.name}
                </h3>


                <p
                  className="
                  mt-4
                  leading-8
                  text-[#6B6B6B]
                  "
                >
                  {speaker.bio}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}