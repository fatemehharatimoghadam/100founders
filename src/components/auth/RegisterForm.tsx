"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const fields = [
  "سرمایه‌گذاری",
  "ساخت‌وساز",
  "فناوری",
  "صنعت",
  "انرژی",
  "بازرگانی",
  "کشاورزی",
  "خدمات",
];


export default function RegisterForm() {

  const router = useRouter();

  const [error, setError] = useState("");


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    position: "",
    field: "",
    email: "",
    telegram: "",
    bio: "",
  });


  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  }


  function submitForm() {

    // Validation
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.company.trim() ||
      !form.position.trim() ||
      !form.field.trim() ||
      !form.email.trim()
    ) {

      setError("لطفاً اطلاعات ضروری را کامل کنید.");

      return;
    }


    // ID موقت برای Mock
    const newUserId = `100-ceo-${Date.now()}`;


    // شماره موبایل وارد شده در Login
    const phone =
      localStorage.getItem("registerPhone") || "";


    const newUser = {

      id: newUserId,

      phone,

      firstName: form.firstName.trim(),

      lastName: form.lastName.trim(),

      company: form.company.trim(),

      position: form.position.trim(),

      field: form.field,

      email: form.email.trim(),

      telegram: form.telegram.trim(),

      bio: form.bio.trim(),

    };


    // Mock Database
    const oldUsers = JSON.parse(
      localStorage.getItem("mockUsers") || "[]"
    );


    const updatedUsers = [
      ...oldUsers,
      newUser
    ];


    localStorage.setItem(
      "mockUsers",
      JSON.stringify(updatedUsers)
    );


    // ذخیره کاربر فعلی
    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );


    // انتقال به صفحه اختصاصی مدیر
    router.push(
      `/profile/${newUserId}`
    );

  }


  return (

    <div
      className="
      w-full
      max-w-2xl
      bg-white
      rounded-3xl
      shadow-xl
      p-8
      border
      border-[rgb(243,239,232)]
      "
    >


      {/* Header */}

      <div className="text-center mb-8">


        <div
          className="
          text-2xl
          font-bold
          text-[rgb(31,73,61)]
          mb-5
          "
          dir="ltr"
        >
          100 CEOs
        </div>


        <h1
          className="
          text-3xl
          font-bold
          text-[rgb(31,73,61)]
          "
        >
          تکمیل پروفایل مدیر
        </h1>


        <p
          className="
          mt-3
          text-[rgb(107,107,107)]
          "
        >

          عضویت در شبکه{" "}

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


      {/* Form */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-5
        "
      >


        {/* First Name */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            نام *
          </label>

          <input
            name="firstName"
            value={form.firstName}
            placeholder="نام"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


        {/* Last Name */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            نام خانوادگی *
          </label>

          <input
            name="lastName"
            value={form.lastName}
            placeholder="نام خانوادگی"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


        {/* Company */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            شرکت / برند *
          </label>

          <input
            name="company"
            value={form.company}
            placeholder="نام شرکت یا برند"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


        {/* Position */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            سمت سازمانی *
          </label>

          <input
            name="position"
            value={form.position}
            placeholder="مثلاً مدیرعامل"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[hsl(0,0%,24%)]
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


        {/* Business Field */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            حوزه فعالیت *
          </label>

          <select
            name="field"
            value={form.field}
            className="
            select
            select-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          >

            <option value="">
              انتخاب حوزه فعالیت
            </option>

            {fields.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>


        {/* Email */}

        <div>

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            ایمیل *
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="example@email.com"
            dir="ltr"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            text-left
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


        {/* Telegram */}

        <div className="md:col-span-2">

          <label
            className="
            text-sm
            font-medium
            text-[rgb(61,61,61)]
            "
          >
            Telegram ID
          </label>

          <input
            name="telegram"
            value={form.telegram}
            placeholder="@username"
            dir="ltr"
            className="
            input
            input-bordered
            w-full
            mt-2
            bg-white
            text-[rgb(61,61,61)]
            text-left
            focus:border-[rgb(51,102,89)]
            "
            onChange={handleChange}
          />

        </div>


      </div>


      {/* Bio */}

      <div className="mt-5">

        <label
          className="
          text-sm
          font-medium
          text-[rgb(61,61,61)]
          "
        >
          معرفی کوتاه
        </label>

        <textarea
          name="bio"
          value={form.bio}
          placeholder="در یک یا دو خط درباره فعالیت حرفه‌ای خود بنویسید..."
          maxLength={250}
          className="
          textarea
          textarea-bordered
          w-full
          mt-2
          min-h-32
          bg-white
          text-[rgb(61,61,61)]
          focus:border-[rgb(51,102,89)]
          resize-none
          "
          onChange={handleChange}
        />


        <div
          className="
          text-xs
          text-gray-400
          mt-1
          text-left
          "
          dir="ltr"
        >
          {form.bio.length} / 250
        </div>

      </div>


      {/* Error */}

      {error && (

        <div
          className="
          mt-5
          rounded-xl
          bg-red-50
          px-4
          py-3
          text-sm
          text-red-600
          "
        >
          {error}
        </div>

      )}


      {/* Submit */}

      <button
        type="button"
        onClick={submitForm}
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
        ثبت اطلاعات و ورود به شبکه
      </button>


    </div>

  );

}