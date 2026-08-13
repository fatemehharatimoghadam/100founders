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


  return (

    <div
      className="
      max-w-xl
      w-full
      bg-white
      rounded-3xl
      shadow-xl
      p-8
      border
      border-[#F3EFE8]
      "
    >


      {/* Avatar */}

      <div
        className="
        w-28
        h-28
        mx-auto
        rounded-full
        bg-[#F3EFE8]
        flex
        items-center
        justify-center
        text-4xl
        font-bold
        text-[#336659]
        "
      >
        {name.charAt(0)}
      </div>



      <div className="text-center mt-6">


        <h1
          className="
          text-3xl
          font-bold
          text-[#1F493D]
          "
        >
          {name}
        </h1>


        <p
          className="
          mt-2
          text-[#336659]
          font-medium
          "
        >
          {position}
        </p>


        <p
          className="
          text-gray-600
          "
        >
          {company}
        </p>


      </div>




      <div
        className="
        mt-8
        space-y-4
        "
      >


        <div>
          <span className="font-bold text-[#1F493D]">
            حوزه فعالیت:
          </span>

          <p className="text-gray-600 mt-1">
            {field}
          </p>
        </div>



        <div>
          <span className="font-bold text-[#1F493D]">
            معرفی:
          </span>

          <p className="text-gray-600 mt-1 leading-8">
            {bio}
          </p>
        </div>



        <div>
          <span className="font-bold text-[#1F493D]">
            ایمیل:
          </span>

          <p className="text-gray-600 mt-1">
            {email}
          </p>
        </div>



        <div>
          <span className="font-bold text-[#1F493D]">
            Telegram:
          </span>

          <p
            dir="ltr"
            className="text-gray-600 mt-1"
          >
            {telegram}
          </p>
        </div>


      </div>


    </div>

  );
}