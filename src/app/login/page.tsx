import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="
          min-h-screen
          bg-light
          px-4
          pb-16
          pt-[96px]
          sm:px-6
          lg:pb-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
          "
        >
          <LoginForm />
        </div>
      </main>

      <Footer />
    </>
  );
}