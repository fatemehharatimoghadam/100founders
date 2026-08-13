import {
  Handshake,
  Sparkles,
} from "lucide-react";


const sponsors = [
  {
    name: "آوید",
    description:
      "مجموعه همراه و حامی اولین گردهمایی شبکه 100Founders",
  },
];


export default function Sponsors() {
  return (
    <section
      className="
        bg-white
        px-6
        py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-light
              text-primary
            "
          >
            <Handshake size={22} />
          </div>

          <p
            dir="ltr"
            className="
              mt-5
              text-xs
              font-bold
              tracking-[0.16em]
              text-primary
            "
          >
            PARTNERS & SPONSORS
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              text-dark
              md:text-5xl
            "
          >
            همراهان این رویداد
          </h2>
        </div>


        <div
          className="
            mx-auto
            mt-12
            max-w-lg
          "
        >
          {sponsors.map((item) => (
            <div
              key={item.name}
              className="
                group
                rounded-[30px]
                border
                border-dark/5
                bg-light
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-gold/30
                hover:shadow-xl
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-[24px]
                  bg-dark
                  text-gold
                  shadow-lg
                "
              >
                <Sparkles size={28} />
              </div>

              <h3
                className="
                  mt-7
                  text-2xl
                  font-black
                  text-dark
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-gray
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}