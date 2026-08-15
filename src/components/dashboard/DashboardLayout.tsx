"use client";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      dir="rtl"
      className="
      min-h-screen
      bg-[#090909]
      text-white
      lg:flex
      "
    >

      {/* Sidebar */}

      <Sidebar />


      {/* Main */}

      <main
        className="
        flex-1
        px-5
        py-6

        lg:px-10
        "
      >

        <DashboardHeader />


        <div
          className="
          mt-8
          "
        >
          {children}
        </div>


      </main>


    </div>

  );
}