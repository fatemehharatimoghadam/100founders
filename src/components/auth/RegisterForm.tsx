"use client";

import Image from "next/image";

import {
  type ChangeEvent,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Mail,
  Send,
  Sparkles,
  User,
  Users,
} from "lucide-react";


const businessFields = [
  "سرمایه‌گذاری",
  "ساخت‌وساز",
  "فناوری",
  "صنعت",
  "انرژی",
  "بازرگانی",
  "کشاورزی",
  "خدمات",
] as const;


type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  field: string;
  email: string;
  telegram: string;
  bio: string;
};


export default function RegisterForm() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormState>({
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
    event: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }


  function validateStepOne() {
    if (
      !form.firstName.trim() ||
      !form.lastName.trim()
    ) {
      setError("نام و نام خانوادگی را کامل کنید.");
      return false;
    }

    return true;
  }


  function validateStepTwo() {
    if (
      !form.company.trim() ||
      !form.position.trim() ||
      !form.field.trim()
    ) {
      setError("اطلاعات کسب‌وکار را کامل کنید.");
      return false;
    }

    return true;
  }


  function validateStepThree() {
    if (!form.email.trim()) {
      setError("وارد کردن ایمیل ضروری است.");
      return false;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("ایمیل واردشده معتبر نیست.");
      return false;
    }

    return true;
  }


  function nextStep() {
    setError("");

    if (step === 1 && !validateStepOne()) {
      return;
    }

    if (step === 2 && !validateStepTwo()) {
      return;
    }

    setStep((current) =>
      Math.min(current + 1, 3)
    );
  }


  function previousStep() {
    setError("");

    setStep((current) =>
      Math.max(current - 1, 1)
    );
  }


  function submitForm() {
    setError("");

    if (!validateStepThree()) {
      return;
    }

    const newUserId =
      `100-founder-${Date.now()}`;

    const phone =
      localStorage.getItem("registerPhone") || "";

    const newUser = {
      id: newUserId,
      phone,

      firstName:
        form.firstName.trim(),

      lastName:
        form.lastName.trim(),

      company:
        form.company.trim(),

      position:
        form.position.trim(),

      field:
        form.field,

      email:
        form.email.trim(),

      telegram:
        form.telegram.trim(),

      bio:
        form.bio.trim(),
    };


    const oldUsers = JSON.parse(
      localStorage.getItem("mockUsers") || "[]"
    );


    const updatedUsers = [
      ...oldUsers,
      newUser,
    ];


    localStorage.setItem(
      "mockUsers",
      JSON.stringify(updatedUsers)
    );


    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );


    router.push(
      `/profile/${newUserId}`
    );
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
        lg:min-h-[760px]
        lg:grid-cols-[0.95fr_1.05fr]
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
          min-h-[700px]
          items-center
          justify-center
          bg-white
          px-6
          py-12

          sm:px-8
          md:px-10
          lg:min-h-[760px]
          lg:px-12
        "
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-28
            h-[480px]
            w-[480px]
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
            -right-28
            -top-16
            h-[380px]
            w-[380px]
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
            max-w-xl
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
              className="
                h-px
                w-9
                bg-gold
              "
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
              JOIN 100FOUNDERS
            </p>
          </div>


          {/* Header */}
          <div className="mt-7">
            <p
              className="
                text-sm
                font-bold
                text-gray
              "
            >
              تکمیل عضویت
            </p>

            <h1
              className="
                mt-3
                text-3xl
                font-black
                leading-[1.5]
                text-dark

                sm:text-4xl
              "
            >
              پروفایل حرفه‌ای خود را
              <span className="text-gold">
                {" "}
                تکمیل کنید
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-7
                text-gray
              "
            >
              اطلاعات شما برای ساخت پروفایل اختصاصی
              و ایجاد ارتباطات حرفه‌ای در شبکه
              100Founders استفاده می‌شود.
            </p>
          </div>


          {/* ========================================
              STEPPER
          ======================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-3
            "
          >
            <StepItem
              number={1}
              title="اطلاعات فردی"
              active={step === 1}
              completed={step > 1}
            />

            <StepItem
              number={2}
              title="کسب‌وکار"
              active={step === 2}
              completed={step > 2}
            />

            <StepItem
              number={3}
              title="تکمیل پروفایل"
              active={step === 3}
              completed={false}
            />
          </div>


          {/* Progress */}
          <div
            className="
              mt-5
              h-1
              overflow-hidden
              rounded-full
              bg-light
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-gold
                transition-all
                duration-500
              "
              style={{
                width:
                  step === 1
                    ? "33.333%"
                    : step === 2
                      ? "66.666%"
                      : "100%",
              }}
            />
          </div>


          {/* ========================================
              STEP 1
          ======================================== */}

          {step === 1 && (
            <div
              className="
                mt-8
                grid
                gap-5
                md:grid-cols-2
              "
            >
              <FormField
                label="نام"
                required
              >
                <div className="relative">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="نام"
                    autoComplete="given-name"
                    className={inputClass}
                  />

                  <User
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <FormField
                label="نام خانوادگی"
                required
              >
                <div className="relative">
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="نام خانوادگی"
                    autoComplete="family-name"
                    className={inputClass}
                  />

                  <User
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <div
                className="
                  rounded-2xl
                  bg-light
                  p-5
                  md:col-span-2
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <Sparkles
                    aria-hidden="true"
                    size={18}
                    className="
                      mt-1
                      shrink-0
                      text-gold
                    "
                  />

                  <p
                    className="
                      text-xs
                      leading-6
                      text-gray
                    "
                  >
                    نام شما در پروفایل اختصاصی
                    100Founders و بخش معرفی اعضای شبکه
                    نمایش داده خواهد شد.
                  </p>
                </div>
              </div>
            </div>
          )}


          {/* ========================================
              STEP 2
          ======================================== */}

          {step === 2 && (
            <div
              className="
                mt-8
                grid
                gap-5
                md:grid-cols-2
              "
            >
              <FormField
                label="شرکت / برند"
                required
              >
                <div className="relative">
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="نام شرکت یا برند"
                    className={inputClass}
                  />

                  <Building2
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <FormField
                label="سمت سازمانی"
                required
              >
                <div className="relative">
                  <input
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="مثلاً بنیان‌گذار"
                    className={inputClass}
                  />

                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <div className="md:col-span-2">
                <FormField
                  label="حوزه فعالیت"
                  required
                >
                  <div className="relative">
                    <select
                      name="field"
                      value={form.field}
                      onChange={handleChange}
                      className="
                        select
                        select-bordered
                        h-14
                        w-full
                        appearance-none
                        rounded-2xl
                        border-border
                        bg-white
                        px-4
                        pl-12
                        text-sm
                        text-dark

                        shadow-[0_4px_14px_rgba(21,59,68,0.03)]

                        transition-all
                        duration-300

                        focus:border-primary
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    >
                      <option value="">
                        انتخاب حوزه فعالیت
                      </option>

                      {businessFields.map(
                        (item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        )
                      )}
                    </select>

                    <ChevronDown
                      aria-hidden="true"
                      size={17}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-gray
                      "
                    />
                  </div>
                </FormField>
              </div>
            </div>
          )}


          {/* ========================================
              STEP 3
          ======================================== */}

          {step === 3 && (
            <div
              className="
                mt-8
                grid
                gap-5
              "
            >
              <FormField
                label="ایمیل"
                required
              >
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    autoComplete="email"
                    className={`
                      ${inputClass}
                      text-left
                    `}
                  />

                  <Mail
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <FormField label="Telegram ID">
                <div className="relative">
                  <input
                    name="telegram"
                    dir="ltr"
                    value={form.telegram}
                    onChange={handleChange}
                    placeholder="@username"
                    className={`
                      ${inputClass}
                      text-left
                    `}
                  />

                  <Send
                    aria-hidden="true"
                    size={17}
                    className={inputIconClass}
                  />
                </div>
              </FormField>


              <FormField label="معرفی کوتاه">
                <div className="relative">
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="درباره فعالیت حرفه‌ای، تجربه یا زمینه‌های همکاری خود بنویسید..."
                    maxLength={250}
                    className="
                      textarea
                      textarea-bordered
                      min-h-32
                      w-full
                      resize-none
                      rounded-2xl
                      border-border
                      bg-white
                      p-4
                      pl-12
                      text-sm
                      leading-7
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

                  <FileText
                    aria-hidden="true"
                    size={17}
                    className="
                      absolute
                      left-4
                      top-4
                      text-gray
                    "
                  />
                </div>

                <div
                  dir="ltr"
                  className="
                    mt-2
                    text-left
                    text-xs
                    text-gray/60
                  "
                >
                  {form.bio.length} / 250
                </div>
              </FormField>
            </div>
          )}


          {/* Error */}
          {error && (
            <div
              role="alert"
              className="
                mt-5
                rounded-2xl
                border
                border-red-100
                bg-red-50
                px-4
                py-3
                text-sm
                font-medium
                text-red-600
              "
            >
              {error}
            </div>
          )}


          {/* ========================================
              ACTIONS
          ======================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
            "
          >
            {step > 1 && (
              <button
                type="button"
                onClick={previousStep}
                className="
                  btn
                  h-13
                  min-h-13
                  min-w-[110px]
                  rounded-2xl
                  border
                  border-dark/10
                  bg-white
                  text-sm
                  font-bold
                  text-dark

                  transition-all
                  duration-300

                  hover:border-primary/20
                  hover:bg-light
                "
              >
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                />

                قبلی
              </button>
            )}


            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="
                  btn
                  group
                  h-13
                  min-h-13
                  flex-1
                  rounded-2xl
                  border-0
                  bg-dark
                  text-sm
                  font-bold
                  text-white

                  shadow-[0_10px_26px_rgba(21,59,68,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-footer
                  hover:text-white
                "
              >
                ادامه

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
            ) : (
              <button
                type="button"
                onClick={submitForm}
                className="
                  btn
                  group
                  h-13
                  min-h-13
                  flex-1
                  rounded-2xl
                  border-0
                  bg-gold
                  text-sm
                  font-bold
                  text-dark

                  shadow-[0_10px_28px_rgba(209,160,84,0.20)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-gold/90
                  hover:text-dark
                  hover:shadow-[0_14px_32px_rgba(209,160,84,0.28)]
                "
              >
                تکمیل عضویت

                <CheckCircle2
                  aria-hidden="true"
                  size={18}
                />
              </button>
            )}
          </div>
        </div>
      </div>



      {/* ========================================
          VISUAL SIDE
      ======================================== */}

      <div
        className="
          relative
          hidden
          min-h-[760px]
          overflow-hidden
          bg-dark

          lg:block
        "
      >
        <Image
          src="/images/login/login-hero.PNG"
          alt="شبکه بنیان‌گذاران 100Founders"
          fill
          priority
          sizes="52vw"
          className="
            object-cover
            object-center
          "
        />


        {/* Dark gradient for text readability */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-dark
            via-dark/45
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
            w-[30%]
            bg-gradient-to-r
            from-dark/80
            to-transparent
          "
        />


        {/* Brand */}
        <div
          className="
            absolute
            right-9
            top-9
            z-20
          "
        >
          <p
            dir="ltr"
            className="
              text-xl
              font-black
              text-white

              drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]
            "
          >
            100
            <span className="text-gold">
              Founders
            </span>
          </p>
        </div>


        {/* Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
            p-10
            xl:p-12
          "
        >
          {/* No glass panel */}
          <div className="max-w-xl">

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Users
                aria-hidden="true"
                size={18}
                className="
                  text-gold
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                "
              />

              <p
                className="
                  text-sm
                  font-bold
                  text-gold
                  drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
                "
              >
                عضویت در 100Founders
              </p>
            </div>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-[1.65]
                text-white

                drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]

                xl:text-4xl
              "
            >
              پروفایل شما،
              <span className="text-gold">
                {" "}
                نقطه شروع ارتباط‌های تازه
              </span>
            </h2>


            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-8
                text-white/85

                drop-shadow-[0_3px_10px_rgba(0,0,0,0.60)]
              "
            >
              با تکمیل پروفایل خود، به شبکه‌ای از
              بنیان‌گذاران و رهبران کسب‌وکار متصل شوید
              و زمینه‌های همکاری خود را معرفی کنید.
            </p>


            <div
              className="
                mt-7
                space-y-3
              "
            >
              <BenefitItem>
                پروفایل حرفه‌ای اختصاصی
              </BenefitItem>

              <BenefitItem>
                معرفی حوزه فعالیت و کسب‌وکار
              </BenefitItem>

              <BenefitItem>
                دسترسی به شبکه و رویدادهای منتخب
              </BenefitItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const inputClass = `
  input
  input-bordered
  h-14
  w-full
  rounded-2xl
  border-border
  bg-white
  px-4
  pl-12
  text-sm
  text-dark
  shadow-[0_4px_14px_rgba(21,59,68,0.03)]
  transition-all
  duration-300
  placeholder:text-gray/45
  focus:border-primary
  focus:outline-none
  focus:ring-2
  focus:ring-primary/10
`;


const inputIconClass = `
  pointer-events-none
  absolute
  left-4
  top-1/2
  -translate-y-1/2
  text-gray
`;


function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-sm
          font-bold
          text-dark
        "
      >
        {label}

        {required && (
          <span className="mr-1 text-gold">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}


function StepItem({
  number,
  title,
  active,
  completed,
}: {
  number: number;
  title: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-2
        rounded-2xl
        border
        px-2
        py-3
        text-center

        transition-all
        duration-300

        ${
          active
            ? "border-gold/30 bg-gold/5"
            : completed
              ? "border-primary/15 bg-light"
              : "border-dark/5 bg-white"
        }
      `}
    >
      <span
        className={`
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          text-xs
          font-black

          transition-all
          duration-300

          ${
            active
              ? "bg-gold text-dark"
              : completed
                ? "bg-primary text-white"
                : "bg-light text-gray"
          }
        `}
      >
        {completed ? (
          <Check
            aria-hidden="true"
            size={15}
          />
        ) : (
          number
        )}
      </span>

      <span
        className={`
          text-[11px]
          font-bold

          ${
            active
              ? "text-dark"
              : "text-gray"
          }
        `}
      >
        {title}
      </span>
    </div>
  );
}


function BenefitItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-sm
        text-white/85

        drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]
      "
    >
      <span
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-gold
          text-dark

          shadow-[0_4px_12px_rgba(0,0,0,0.20)]
        "
      >
        <Check
          aria-hidden="true"
          size={14}
        />
      </span>

      {children}
    </div>
  );
}