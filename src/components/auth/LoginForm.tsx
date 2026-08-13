"use client";

import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Handshake,
  KeyRound,
  LockKeyhole,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { users } from "@/data/users";


export default function LoginForm() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");


  function normalizePhone(value: string) {
    return value.replace(/\D/g, "").slice(0, 11);
  }


  function sendOTP() {
    setError("");

    if (!/^09\d{9}$/.test(phone)) {
      setError("شماره موبایل را به‌صورت صحیح وارد کنید.");
      return;
    }

    console.log("Send OTP:", phone);

    // Mock API
    setOtpSent(true);
  }


  function verifyOTP() {
    setError("");

    if (otp.trim().length < 4) {
      setError("کد تأیید را کامل وارد کنید.");
      return;
    }

    console.log("Verify OTP:", otp);

    const user = users.find(
      (item) => item.phone === phone
    );

    if (user) {
      router.push(`/profile/${user.id}`);
      return;
    }

    localStorage.setItem("registerPhone", phone);

    router.push("/register");
  }


  function changePhone() {
    setOtp("");
    setError("");
    setOtpSent(false);
  }


  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-dark/5
        bg-white

        shadow-[0_24px_70px_rgba(21,59,68,0.12)]

        lg:grid
        lg:min-h-[720px]
        lg:grid-cols-[0.9fr_1.1fr]
      "
    >
      {/* ========================================
          FORM SIDE
      ======================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[620px]
          items-center
          justify-center
          bg-white
          px-6
          py-12

          sm:px-8
          md:px-10
          lg:min-h-[720px]
          lg:px-14
        "
      >
        {/* Decorative Arc */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-44
            -top-32
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-gold/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-32
            -top-20
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-dark/5
          "
        />


        <div
          className="
            relative
            z-10
            w-full
            max-w-md
          "
        >
          {/* Brand */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
              className="h-px w-9 bg-gold"
            />

            <p
              dir="ltr"
              className="
                text-xs
                font-bold
                tracking-[0.14em]
                text-gold
              "
            >
              100FOUNDERS ACCESS
            </p>
          </div>


          {/* Heading */}
          <div className="mt-8">
            <p
              className="
                text-sm
                font-bold
                text-gray
              "
            >
              به شبکه 100Founders خوش آمدید
            </p>

            <h1
              className="
                mt-3
                text-3xl
                font-black
                leading-[1.55]
                text-dark

                sm:text-4xl
              "
            >
              {otpSent
                ? "تأیید شماره موبایل"
                : "ورود به حساب کاربری"}
            </h1>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray
              "
            >
              {otpSent ? (
                <>
                  کد تأیید ارسال‌شده به شماره{" "}
                  <span
                    dir="ltr"
                    className="
                      font-bold
                      text-dark
                    "
                  >
                    {phone}
                  </span>{" "}
                  را وارد کنید.
                </>
              ) : (
                <>
                  برای دسترسی به پروفایل و امکانات اختصاصی شبکه،
                  شماره موبایل خود را وارد کنید.
                </>
              )}
            </p>
          </div>


          {/* State Icon */}
          <div
            className="
              mt-7
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-dark
              text-gold

              shadow-[0_10px_28px_rgba(21,59,68,0.16)]
            "
          >
            {otpSent ? (
              <KeyRound
                aria-hidden="true"
                size={25}
              />
            ) : (
              <LockKeyhole
                aria-hidden="true"
                size={25}
              />
            )}
          </div>


          {/* ========================================
              PHONE STATE
          ======================================== */}

          {!otpSent ? (
            <div className="mt-8">
              <label
                htmlFor="phone"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-dark
                "
              >
                شماره موبایل
              </label>

              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="0912 123 4567"
                  value={phone}
                  onChange={(event) => {
                    setPhone(
                      normalizePhone(event.target.value)
                    );

                    if (error) {
                      setError("");
                    }
                  }}
                  className="
                    input
                    input-bordered
                    h-14
                    w-full
                    rounded-2xl
                    border-border
                    bg-white
                    px-12
                    text-center
                    text-base
                    font-medium
                    text-dark

                    shadow-[0_4px_14px_rgba(21,59,68,0.03)]

                    transition-all
                    duration-300

                    placeholder:text-gray/45

                    focus:border-primary
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/10
                  "
                />

                <Phone
                  aria-hidden="true"
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray
                  "
                />
              </div>


              {error && (
                <p
                  role="alert"
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-red-500
                  "
                >
                  {error}
                </p>
              )}


              <button
                type="button"
                onClick={sendOTP}
                className="
                  btn
                  group
                  mt-6
                  h-14
                  min-h-14
                  w-full
                  rounded-2xl
                  border-0
                  bg-dark
                  text-sm
                  font-bold
                  text-white

                  shadow-[0_10px_28px_rgba(21,59,68,0.16)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-footer
                  hover:text-white
                  hover:shadow-[0_14px_34px_rgba(21,59,68,0.22)]
                "
              >
                ارسال کد تأیید

                <ArrowLeft
                  aria-hidden="true"
                  size={17}
                  className="
                    text-gold
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
              </button>
            </div>
          ) : (
            /* ========================================
                OTP STATE
            ======================================== */

            <div className="mt-8">
              <label
                htmlFor="otp"
                className="
                  mb-2
                  block
                  text-sm
                  font-bold
                  text-dark
                "
              >
                کد تأیید
              </label>

              <input
                id="otp"
                type="text"
                dir="ltr"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="ــــ"
                maxLength={6}
                value={otp}
                onChange={(event) => {
                  setOtp(
                    event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 6)
                  );

                  if (error) {
                    setError("");
                  }
                }}
                className="
                  input
                  input-bordered
                  h-14
                  w-full
                  rounded-2xl
                  border-border
                  bg-white
                  text-center
                  text-xl
                  font-black
                  tracking-[0.45em]
                  text-dark

                  shadow-[0_4px_14px_rgba(21,59,68,0.03)]

                  transition-all
                  duration-300

                  focus:border-primary
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary/10
                "
              />


              {error && (
                <p
                  role="alert"
                  className="
                    mt-3
                    text-sm
                    font-medium
                    text-red-500
                  "
                >
                  {error}
                </p>
              )}


              <button
                type="button"
                onClick={verifyOTP}
                className="
                  btn
                  group
                  mt-6
                  h-14
                  min-h-14
                  w-full
                  rounded-2xl
                  border-0
                  bg-dark
                  text-sm
                  font-bold
                  text-white

                  shadow-[0_10px_28px_rgba(21,59,68,0.16)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-footer
                  hover:text-white
                  hover:shadow-[0_14px_34px_rgba(21,59,68,0.22)]
                "
              >
                تأیید و ورود

                <ArrowLeft
                  aria-hidden="true"
                  size={17}
                  className="
                    text-gold
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
              </button>


              <button
                type="button"
                onClick={changePhone}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  text-sm
                  font-bold
                  text-primary

                  transition-colors
                  duration-300

                  hover:text-dark
                "
              >
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                />

                اصلاح شماره موبایل
              </button>
            </div>
          )}


          {/* Divider */}
          <div
            className="
              my-8
              flex
              items-center
              gap-4
            "
          >
            <span className="h-px flex-1 bg-dark/10" />

            <span
              className="
                text-xs
                text-gray/60
              "
            >
              ورود امن اعضای شبکه
            </span>

            <span className="h-px flex-1 bg-dark/10" />
          </div>


          {/* Security note */}
          <div
            className="
              flex
              items-start
              gap-3
              rounded-2xl
              bg-light
              p-4
            "
          >
            <ShieldCheck
              aria-hidden="true"
              size={18}
              className="
                mt-0.5
                shrink-0
                text-primary
              "
            />

            <p
              className="
                text-xs
                leading-6
                text-gray
              "
            >
              ورود شما با شماره موبایل انجام می‌شود و اطلاعات حساب
              فقط برای دسترسی به خدمات شبکه 100Founders استفاده خواهد شد.
            </p>
          </div>


          {/* Terms */}
          <p
            className="
              mt-7
              text-center
              text-[11px]
              leading-6
              text-gray/60
            "
          >
            با ورود به حساب کاربری، شرایط استفاده و حریم خصوصی
            100Founders را می‌پذیرید.
          </p>
        </div>
      </div>



      {/* ========================================
          VISUAL / IMAGE SIDE
      ======================================== */}

      <div
        className="
          relative
          hidden
          min-h-[720px]
          overflow-hidden
          bg-dark

          lg:block
        "
      >
        <Image
          src="/images/login/login-hero.PNG"
          alt="شبکه بنیان‌گذاران و مدیران 100Founders"
          fill
          priority
          sizes="55vw"
          className="
            object-cover
            object-center
          "
        />


        {/* Dark Overlay */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-dark/95
            via-dark/20
            to-dark/15
          "
        />


        {/* Side Gradient */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-0
            w-[28%]
            bg-gradient-to-r
            from-dark/80
            to-transparent
          "
        />


        {/* Gold Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            right-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-gold/10
            blur-3xl
          "
        />


        {/* Brand */}
        <div
          className="
            absolute
            right-8
            top-8
            z-10
          "
        >
          <p
            dir="ltr"
            className="
              text-lg
              font-black
              tracking-tight
              text-white
            "
          >
            100
            <span className="text-gold">
              Founders
            </span>
          </p>
        </div>


        {/* Image Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-8
            md:p-10
            lg:p-12
          "
        >
          <div
            className="
              max-w-xl
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Sparkles
                aria-hidden="true"
                size={19}
                className="text-white"
              />

              <p
                className="
                  text-sm
                  font-bold
                  text-white
                "
              >
                شبکه‌ای برای رشد
              </p>
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-[1.6]
                text-white

                xl:text-4xl
              "
            >
              جایی که ارتباط‌های درست،
              <span className="text-gold">
                {" "}
                فرصت‌های بزرگ
              </span>{" "}
              می‌سازند.
            </h2>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-8
                text-white/60
              "
            >
              به جامعه‌ای از بنیان‌گذاران، مدیران و رهبران کسب‌وکار
              متصل شوید و مسیرهای تازه‌ای برای همکاری و رشد بسازید.
            </p>


            {/* Features */}
            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-3
              "
            >
              <FeatureItem
                icon={<Handshake size={18} />}
                title="همکاری"
                description="فرصت‌های مشترک"
              />

              <FeatureItem
                icon={<Users size={18} />}
                title="شبکه‌سازی"
                description="ارتباط حرفه‌ای"
              />

              <FeatureItem
                icon={<CalendarDays size={18} />}
                title="رویدادها"
                description="تجربه‌های اختصاصی"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.06]
        p-4

        backdrop-blur-md

        transition-all
        duration-300

        hover:border-gold/25
        hover:bg-white/[0.09]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-gold/10
          text-gold
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-3
          text-sm
          font-bold
          text-white
        "
      >
        {title}
      </p>

      <p
        className="
          mt-1
          text-[11px]
          text-white/45
        "
      >
        {description}
      </p>
    </div>
  );
}