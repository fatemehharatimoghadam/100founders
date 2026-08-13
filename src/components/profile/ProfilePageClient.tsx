"use client";


import { useEffect, useState } from "react";
import ProfileCard from "@/components/profile/ProfileCard";
import QRCodeProfile from "@/components/profile/QRCodeProfile";
import { users as defaultUsers } from "@/data/users";


type User = {
  id: string;
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


  const [user,setUser] = useState<User | null>(null);



  useEffect(()=>{


    // کاربران پیش فرض
    let allUsers = [
      ...defaultUsers
    ];



    // کاربران ثبت شده جدید
    const storedUsers =
      JSON.parse(
        localStorage.getItem("mockUsers") || "[]"
      );



    allUsers = [
      ...allUsers,
      ...storedUsers
    ];



    const foundUser =
      allUsers.find(
        (item)=> item.id === id
      );



    setUser(foundUser || null);



  },[id]);




  if(!user){

    return (

      <main
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[rgb(243,239,232)]
        "
      >

        <h1
          className="
          text-2xl
          font-bold
          text-[rgb(31,73,61)]
          "
        >
          پروفایل پیدا نشد
        </h1>

      </main>

    );

  }



  return (

    <main
      className="
      min-h-screen
      bg-[rgb(243,239,232)]
      flex
      flex-col
      items-center
      justify-center
      gap-8
      px-6
      py-16
      "
    >


      <ProfileCard

        name={`${user.firstName} ${user.lastName}`}

        position={user.position}

        company={user.company}

        field={user.field}

        bio={user.bio}

        email={user.email}

        telegram={user.telegram}

      />



      <QRCodeProfile

        url={`http://localhost:3000/profile/${user.id}`}

      />


    </main>

  );

}