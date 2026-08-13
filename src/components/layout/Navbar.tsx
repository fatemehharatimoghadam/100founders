"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "خانه",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "درباره 100Founders",
    href: "/#about",
    sectionId: "about",
  },
  {
    label: "شبکه بنیان‌گذاران",
    href: "/#values",
    sectionId: "values",
  },
  {
    label: "رویدادها",
    href: "/#events",
    sectionId: "events",
  },
  {
    label: "تماس با ما",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = NAV_ITEMS
      .map((item) => item.sectionId)
      .filter((id): id is string => Boolean(id));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      // اگر نزدیک بالای صفحه هستیم، خانه حتماً فعال شود
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      dir="rtl"
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-black/5
        bg-white
        shadow-[0_2px_12px_rgba(0,0,0,0.06)]
      "
    >
      <nav
        aria-label="منوی اصلی سایت"
        className="
          mx-auto
          flex
          h-[72px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-6
          lg:px-10
          xl:px-14
        "
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="صفحه اصلی 100Founders"
          className="
            flex
            shrink-0
            items-center
            rounded-lg
            outline-none
            transition-all
            duration-300
            hover:scale-[1.03]
            focus-visible:ring-2
            focus-visible:ring-primary/30
          "
        >
          <Image
            src="/images/logo.jpg"
            alt="100Founders"
            width={185}
            height={56}
            priority
            className="
              h-[54px]
              w-[185px]
              object-contain
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            justify-center
            gap-8
            md:flex
            lg:gap-10
          "
        >
          {NAV_ITEMS.map((item) => {
            const isSectionActive =
              pathname === "/" &&
              item.sectionId === activeSection;

            const isPageActive =
              !item.sectionId &&
              pathname === item.href;

            const isActive =
              isSectionActive || isPageActive;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group
                  relative
                  flex
                  h-[72px]
                  items-center
                  justify-center
                  px-1

                  text-[18px]
                  font-medium
                  text-dark

                  outline-none

                  transition-all
                  duration-300
                  ease-out

                  hover:scale-[1.08]
                  hover:text-primary

                  focus-visible:text-primary

                  ${
                    isActive
                      ? "font-semibold text-dark"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    relative
                    whitespace-nowrap
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:-translate-y-[1px]
                  "
                >
                  {item.label}
                </span>

                {/* Active underline */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    bottom-[9px]
                    left-1/2
                    h-[3px]
                    -translate-x-1/2
                    rounded-full
                    bg-gold
                    transition-all
                    duration-300
                    ease-out

                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Login Button */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/login"
            className="
              hidden
              h-[42px]
              min-w-[118px]
              items-center
              justify-center
              rounded-lg
              bg-gold
              px-6
              text-[17px]
              font-bold
              text-dark
              shadow-[0_5px_15px_rgba(209,160,84,0.18)]
              transition-all
              duration-300
              ease-out

              hover:-translate-y-[2px]
              hover:scale-[1.035]
              hover:bg-gold/90
              hover:text-dark
              hover:shadow-[0_8px_22px_rgba(209,160,84,0.28)]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-gold/50
              focus-visible:ring-offset-2

              md:inline-flex
            "
          >
            ورود مدیران
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="باز کردن منو"
            className="
              flex
              h-10
              w-10
              flex-col
              items-center
              justify-center
              gap-1
              rounded-lg
              border
              border-dark/20
              bg-white
              transition-all
              duration-300
              hover:scale-105
              hover:border-gold
              hover:bg-gold/10
              md:hidden
            "
          >
            <span className="block h-0.5 w-5 rounded-full bg-dark" />
            <span className="block h-0.5 w-5 rounded-full bg-dark" />
            <span className="block h-0.5 w-5 rounded-full bg-dark" />
          </button>
        </div>
      </nav>
    </header>
  );
}