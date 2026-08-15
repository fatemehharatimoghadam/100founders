"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowLeft,
  SearchX,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProfileCard from "@/components/profile/ProfileCard";
import QRCodeProfile from "@/components/profile/QRCodeProfile";

import { users as defaultUsers } from "@/data/users";


type User = {
  id: string;
  image:string;
  phone: string;
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  field: string;
  email: string;
  telegram: string;
  bio: string;
};


export default function ProfilePageClient({
  id,
}: {
  id: string;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const [profileUrl, setProfileUrl] = useState("");


  useEffect(() => {
    const storedUsers: User[] = JSON.parse(
      localStorage.getItem("mockUsers") || "[]"
    );

    const allUsers: User[] = [
      ...defaultUsers,
      ...storedUsers,
    ];

    const foundUser = allUsers.find(
      (item) => item.id === id
    );

    setUser(foundUser || null);

    setProfileUrl(
      `${window.location.origin}/profile/${id}`
    );

    setLoading(false);
  }, [id]);


  if (loading) {
    return (
      <>
        <Navbar />

        <main
          className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-light
            pt-[72px]
          "
        >
          <span
            className="
              loading
              loading-ring
              loading-lg
              text-primary
            "
          />
        </main>
      </>
    );
  }


  if (!user) {
    return (
      <>
        <Navbar />

        <main
          dir="rtl"
          className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-light
            px-6
            pt-[72px]
          "
        >
          <div
            className="
              w-full
              max-w-md
              rounded-[30px]
              border
              border-dark/5
              bg-white
              p-8
              text-center

              shadow-[0_20px_60px_rgba(21,59,68,0.08)]
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-light
                text-primary
              "
            >
              <SearchX size={28} />
            </div>

            <h1
              className="
                mt-6
                text-2xl
                font-black
                text-dark
              "
            >
              پروفایل پیدا نشد
            </h1>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-gray
              "
            >
              پروفایلی با این شناسه در شبکه 100Founders وجود ندارد.
            </p>

            <Link
              href="/"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-dark
                px-6
                py-3
                text-sm
                font-bold
                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-footer
              "
            >
              بازگشت به صفحه اصلی

              <ArrowLeft
                size={16}
                className="
                  text-gold
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </Link>
          </div>
        </main>
      </>
    );
  }


  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-light
          px-4
          pb-20
          pt-[112px]

          sm:px-6
        "
      >
        {/* Decorative glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-soft/20
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-gold/10
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
          "
        >
          {/* Page intro */}

          <div
            className="
              mb-10
              flex
              flex-col
              gap-4

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-gold" />

                <p
                  dir="ltr"
                  className="
                    text-xs
                    font-bold
                    tracking-[0.14em]
                    text-gold
                  "
                >
                  100FOUNDERS PROFILE
                </p>
              </div>

              <h1
                className="
                  mt-4
                  text-3xl
                  font-black
                  text-dark

                  md:text-4xl
                "
              >
                پروفایل عضو شبکه
              </h1>
            </div>


            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-gray
              "
            >
              پروفایل حرفه‌ای اعضای 100Founders برای معرفی،
              ارتباط و توسعه همکاری‌های جدید.
            </p>
          </div>


          {/* Main Grid */}

          <div
            className="
              grid
              gap-7

              lg:grid-cols-[1fr_360px]
              lg:items-start
            "
          >
            <ProfileCard
              image={user.image}
              name={`${user.firstName} ${user.lastName}`}
              position={user.position}
              company={user.company}
              field={user.field}
              bio={user.bio}
              email={user.email}
              telegram={user.telegram}
            />

            <QRCodeProfile
              url={profileUrl}
              name={`${user.firstName} ${user.lastName}`}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}