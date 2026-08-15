import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ClientProfileForm from "@/components/client/ClientProfileForm";


export default async function ClientPage({
  params,
}: {
  params: Promise<{ id:string }>;
}) {


  const {id} = await params;


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
      py-12

      sm:px-6
      "
    >


      {/* BACKGROUND */}

      <div

      className="
      absolute
      inset-0

      bg-[url('/images/client/profile-bg.jpg')]

      bg-cover
      bg-center

      "

      />



      {/* BRAND COLOR OVERLAY */}

      <div

      className="
      absolute
      inset-0

      bg-gradient-to-br

      from-[#EDF6F5]/90

      via-[#006D77]/20

      to-[#153B44]/40

      "

      />



      {/* LIGHT GLOW */}

      <div

      className="
      absolute

      -right-40
      top-20

      h-[450px]
      w-[450px]

      rounded-full

      bg-[#83C5BE]/30

      blur-3xl

      "

      />


      <div

      className="
      absolute

      -left-40
      bottom-20

      h-[400px]
      w-[400px]

      rounded-full

      bg-[#D1A054]/20

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


      <ClientProfileForm

      id={id}

      />


      </div>


    </main>



    <Footer />


    </>

  );

}