import {
  BriefcaseBusiness,
  Building2,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";


type ProfileProps = {
  name: string;
  position: string;
  company: string;
  field: string;
  bio: string;
  email: string;
  telegram: string;
};


export default function ProfileCard({
  name,
  position,
  company,
  field,
  bio,
  email,
  telegram,
}: ProfileProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");


  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-dark/5
        bg-white

        shadow-[0_20px_60px_rgba(21,59,68,0.08)]
      "
    >
      {/* ========================================
          PROFILE HEADER
      ======================================== */}

      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-l
          from-primary
          to-dark
          px-7
          pb-10
          pt-9
          text-white

          md:px-10
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            border
            border-white/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-40
            right-[20%]
            h-80
            w-80
            rounded-full
            bg-soft/20
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            text-center

            sm:flex-row
            sm:items-center
            sm:text-right
          "
        >
          {/* Avatar */}

          <div
            className="
              flex
              h-28
              w-28
              shrink-0
              items-center
              justify-center
              rounded-[28px]
              border
              border-white/20
              bg-white/10
              text-3xl
              font-black
              text-gold

              shadow-[0_16px_40px_rgba(0,0,0,0.18)]

              backdrop-blur-md
            "
          >
            {initials}
          </div>


          <div
            className="
              mt-6
              sm:mr-7
              sm:mt-0
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:justify-start
              "
            >
              <Sparkles
                size={15}
                className="text-gold"
              />

              <span
                className="
                  text-xs
                  font-bold
                  text-gold
                "
              >
                عضو 100Founders
              </span>
            </div>

            <h1
              className="
                mt-3
                text-3xl
                font-black
                leading-[1.5]
                text-white

                md:text-4xl
              "
            >
              {name}
            </h1>

            <p
              className="
                mt-2
                text-base
                font-bold
                text-gold
              "
            >
              {position}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-white/65
              "
            >
              {company}
            </p>
          </div>
        </div>
      </div>


      {/* ========================================
          PROFILE BODY
      ======================================== */}

      <div
        className="
          p-7
          md:p-10
        "
      >
        {/* Business info */}

        <div
          className="
            grid
            gap-4

            sm:grid-cols-2
          "
        >
          <InfoCard
            icon={
              <Building2 size={20} />
            }
            label="شرکت / برند"
            value={company}
          />

          <InfoCard
            icon={
              <BriefcaseBusiness size={20} />
            }
            label="حوزه فعالیت"
            value={field}
          />
        </div>


        {/* Bio */}

        <div
          className="
            mt-7
            rounded-[26px]
            bg-light
            p-6
          "
        >
          <p
            className="
              text-sm
              font-black
              text-dark
            "
          >
            درباره من
          </p>

          <p
            className="
              mt-3
              text-sm
              leading-8
              text-gray

              md:text-base
            "
          >
            {bio || "اطلاعات معرفی هنوز تکمیل نشده است."}
          </p>
        </div>


        {/* Contact */}

        <div
          className="
            mt-7
            border-t
            border-dark/10
            pt-7
          "
        >
          <p
            className="
              text-sm
              font-black
              text-dark
            "
          >
            راه‌های ارتباطی
          </p>


          <div
            className="
              mt-5
              grid
              gap-4

              sm:grid-cols-2
            "
          >
            <a
              href={`mailto:${email}`}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-dark/5
                p-4

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-gold/25
                hover:shadow-md
              "
            >
              <ContactIcon>
                <Mail size={18} />
              </ContactIcon>

              <div>
                <p
                  className="
                    text-xs
                    text-gray
                  "
                >
                  ایمیل
                </p>

                <p
                  dir="ltr"
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-dark
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  {email}
                </p>
              </div>
            </a>


            {telegram && (
              <a
                href={`https://t.me/${telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-dark/5
                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-gold/25
                  hover:shadow-md
                "
              >
                <ContactIcon>
                  <Send size={18} />
                </ContactIcon>

                <div>
                  <p
                    className="
                      text-xs
                      text-gray
                    "
                  >
                    تلگرام
                  </p>

                  <p
                    dir="ltr"
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-dark
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {telegram}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}


function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-dark/5
        bg-white
        p-5
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-light
          text-primary
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-xs
            text-gray
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            text-sm
            font-bold
            text-dark
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}


function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-dark
        text-gold

        transition-all
        duration-300

        group-hover:bg-gold
        group-hover:text-dark
      "
    >
      {children}
    </div>
  );
}