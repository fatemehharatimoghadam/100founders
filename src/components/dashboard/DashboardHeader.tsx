"use client";


import {
  Bell,
} from "lucide-react";


export default function DashboardHeader(){


return (

<header
className="
flex
items-center
justify-between
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-5

backdrop-blur-xl
"
>


<div>

<p
className="
text-xs
text-white/40
"
>
خوش آمدید
</p>


<h1
className="
mt-2
text-2xl
font-black
text-white
"
>
داشبورد مدیر
</h1>


</div>



<button
className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-[#B9A27B]/10
text-[#B9A27B]
"
>

<Bell size={20}/>

</button>


</header>

);

}