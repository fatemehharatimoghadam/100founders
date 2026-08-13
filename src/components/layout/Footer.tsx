import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";


const footerLinks = [
  {
    title: "شبکه",
    links: [
      {
        label: "ورود به شبکه",
        href: "/login",
      },
      {
        label: "درخواست دعوت‌نامه",
        href: "/invite",
      },
      {
        label: "قوانین و مقررات",
        href: "/terms",
      },
      {
        label: "حریم خصوصی",
        href: "/privacy",
      },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      {
        label: "درباره ما",
        href: "/#about",
      },
      {
        label: "شبکه بنیان‌گذاران",
        href: "/#values",
      },
      {
        label: "رویدادها",
        href: "/#events",
      },
      {
        label: "سؤالات متداول",
        href: "/#faq",
      },
      {
        label: "تماس با ما",
        href: "/contact",
      },
    ],
  },
] as const;


const socialLinks = [
  {
    label: "اینستاگرام 100Founders",
    href: "https://instagram.com/100.ceos.ir",
    icon: Instagram,
  },
  {
    label: "لینکدین 100Founders",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "تلگرام 100Founders",
    href: "#",
    icon: Send,
  },
  {
    label: "ایمیل 100Founders",
    href: "mailto:info@100ceos.ir",
    icon: Mail,
  },
] as const;


export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="
        relative
        overflow-hidden
        bg-footer
        text-white
      "
    >
      {/* Top Accent */}
      <div
        aria-hidden="true"
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-gold/60
          to-transparent
        "
      />


      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-primary/15
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-gold/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[35%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-soft/5
          blur-3xl
        "
      />


      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-14
          md:py-16
        "
      >
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-[1.15fr_0.8fr_0.8fr_1fr]
            lg:items-start
          "
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="صفحه اصلی 100Founders"
              className="
                group
                inline-flex
                rounded-2xl
                outline-none
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.03]
                focus-visible:ring-2
                focus-visible:ring-gold/50
              "
            >
              <div
                className="
                  relative
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  p-3
                  shadow-[0_14px_35px_rgba(0,0,0,0.20)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[2px]
                    origin-right
                    scale-x-0
                    bg-gold
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                <Image
                  src="/images/logo.jpg"
                  alt="100Founders"
                  width={80}
                  height={80}
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>
            </Link>


            <h2
              dir="ltr"
              className="
                mt-4
                w-fit
                text-2xl
                font-extrabold
                tracking-tight
              "
            >
              100
              <span className="text-gold">
                Founders
              </span>
            </h2>


            <p
              className="
                mt-3
                max-w-sm
                text-sm
                leading-7
                text-white/60
              "
            >
              شبکه‌ای برای ارتباط میان بنیان‌گذاران، کارآفرینان و
              رهبران کسب‌وکار؛ بستری برای انتقال تجربه، شکل‌گیری
              همکاری‌های ارزشمند و رشد مشترک.
            </p>


            {/* Social */}
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <SocialIcon
                  key={label}
                  href={href}
                  label={label}
                >
                  <Icon
                    aria-hidden="true"
                    size={18}
                  />
                </SocialIcon>
              ))}
            </div>
          </div>


          {/* Footer Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <FooterHeading>
                {column.title}
              </FooterHeading>

              <nav
                aria-label={column.title}
                className="
                  mt-5
                  flex
                  flex-col
                  gap-4
                "
              >
                {column.links.map((link) => (
                  <FooterLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </nav>
            </div>
          ))}


          {/* Contact */}
          <div>
            <FooterHeading>
              ارتباط با ما
            </FooterHeading>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-5
              "
            >
              <ContactItem
                icon={<Phone size={18} />}
                title="شماره تماس"
                value="021-91035274"
                href="tel:02191035274"
              />

              <ContactItem
                icon={<Mail size={18} />}
                title="ایمیل"
                value="info@100ceos.ir"
                href="mailto:info@100ceos.ir"
              />

              <ContactItem
                icon={<Instagram size={18} />}
                title="اینستاگرام"
                value="@100.ceos.ir"
                href="https://instagram.com/100.ceos.ir"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div
        className="
          border-t
          border-white/10
          bg-black/5
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            py-5
            text-center
            md:flex-row
            md:text-right
          "
        >
          <p className="text-xs text-white/45">
            © ۱۴۰۵{" "}
            <span dir="ltr">
              100Founders
            </span>
            . تمامی حقوق محفوظ است.
          </p>

          <div
            className="
              flex
              items-center
              gap-5
              text-xs
              text-white/50
            "
          >
            <Link
              href="/privacy"
              className="
                transition-all
                duration-300
                hover:-translate-y-px
                hover:text-gold
              "
            >
              حریم خصوصی
            </Link>

            <span className="h-4 w-px bg-white/20" />

            <Link
              href="/terms"
              className="
                transition-all
                duration-300
                hover:-translate-y-px
                hover:text-gold
              "
            >
              قوانین و مقررات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <h3
        className="
          text-lg
          font-bold
          text-gold
        "
      >
        {children}
      </h3>

      <div
        aria-hidden="true"
        className="
          mt-2
          h-[2px]
          w-10
          rounded-full
          bg-gold
        "
      />
    </>
  );
}


function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        w-fit
        items-center
        gap-2
        text-sm
        text-white/65

        transition-all
        duration-300

        hover:-translate-x-1
        hover:text-white
      "
    >
      <ArrowLeft
        aria-hidden="true"
        size={14}
        className="
          text-gold
          transition-transform
          duration-300
          group-hover:-translate-x-1
        "
      />

      {label}
    </Link>
  );
}


function SocialIcon({
  children,
  href,
  label,
}: {
  children: ReactNode;
  href: string;
  label: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full

        border
        border-gold/35

        bg-white/[0.02]

        text-white/70

        outline-none

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-110
        hover:border-gold
        hover:bg-gold
        hover:text-footer

        focus-visible:ring-2
        focus-visible:ring-gold/50
      "
    >
      {children}
    </a>
  );
}


function ContactItem({
  icon,
  title,
  value,
  href,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        group
        flex
        w-fit
        items-center
        gap-3

        rounded-lg

        outline-none

        transition-all
        duration-300

        hover:-translate-y-0.5

        focus-visible:ring-2
        focus-visible:ring-gold/40
        focus-visible:ring-offset-4
        focus-visible:ring-offset-footer
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center

          rounded-full

          border
          border-gold/35

          bg-gold/5
          text-gold

          transition-all
          duration-300

          group-hover:scale-110
          group-hover:border-gold
          group-hover:bg-gold
          group-hover:text-footer
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-xs text-white/40">
          {title}
        </p>

        <p
          dir="ltr"
          className="
            mt-1
            text-sm
            text-white/80

            transition-colors
            duration-300

            group-hover:text-gold
          "
        >
          {value}
        </p>
      </div>
    </a>
  );
}