"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/data/users";


export default function LoginForm() {


  const router = useRouter();


  const [phone,setPhone] = useState("");
  const [otpSent,setOtpSent] = useState(false);
  const [otp,setOtp] = useState("");



  function sendOTP(){

    console.log("Send OTP:", phone);

    // Mock API
    setOtpSent(true);

  }



  function verifyOTP(){

    console.log("Verify OTP:", otp);



    const user = users.find(
      (item)=> item.phone === phone
    );



    if(user){

      router.push(
        `/profile/${user.id}`
      );

    }
    else{

       localStorage.setItem(
         "registerPhone",
       phone
     );


    router.push(
        "/register"
     );

    }


  }



  return (

    <div
      className="
      w-full
      max-w-md
      bg-white
      rounded-3xl
      shadow-xl
      p-8
      border
      border-[rgb(243,239,232)]
      "
    >


      <div className="text-center">


        <div
          className="
          mx-auto
          mb-6
          text-2xl
          font-bold
          text-[rgb(31,73,61)]
          "
        >
          <span dir="ltr">
            100 CEOs
          </span>
        </div>


        <h1
          className="
          text-3xl
          font-bold
          text-[rgb(31,73,61)]
          "
        >
          ورود مدیران
        </h1>


        <p
          className="
          mt-3
          text-[#6B6B6B]
          "
        >
          ورود به شبکه{" "}
          <span
            dir="ltr"
            className="
            text-[rgb(51,102,89)]
            font-medium
            "
          >
            100 CEOs
          </span>
        </p>


      </div>



      {
        !otpSent ? (

          <div className="mt-8">


            <label
              className="
              text-sm
              text-[rgb(61,61,61)]
              font-medium
              "
            >
              شماره موبایل
            </label>


            <input
              type="tel"
              placeholder="0912 123 4567"
              className="
              input
              input-bordered
              w-full
              mt-2
              bg-white
              text-[rgb(61,61,61)]
              focus:border-[rgb(51,102,89)]
              "
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />



            <button
              onClick={sendOTP}
              className="
              btn
              bg-[rgb(51,102,89)]
              text-white
              border-none
              w-full
              mt-6
              hover:bg-[rgb(31,73,61)]
              "
            >
              ارسال کد تایید
            </button>


          </div>


        ) : (


          <div className="mt-8">


            <label
              className="
              text-sm
              text-[rgb(61,61,61)]
              font-medium
              "
            >
              کد تایید
            </label>


            <input
              type="text"
              placeholder="1234"
              className="
              input
              input-bordered
              w-full
              mt-2
              bg-white
              text-[rgb(61,61,61)]
              text-center
              tracking-[0.5em]
              focus:border-[rgb(51,102,89)]
              "
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
            />



            <button
              onClick={verifyOTP}
              className="
              btn
              bg-[rgb(51,102,89)]
              text-white
              border-none
              w-full
              mt-6
              hover:bg-[rgb(31,73,61)]
              "
            >
              تایید و ورود
            </button>


          </div>


        )
      }


    </div>

  );

}