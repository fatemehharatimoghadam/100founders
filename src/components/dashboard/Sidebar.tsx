"use client";

import {
  LayoutDashboard,
  UserRound,
  QrCode,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";


const menu = [
  {
    title:"داشبورد",
    icon:LayoutDashboard,
  },
  {
    title:"پروفایل من",
    icon:UserRound,
  },
  {
    title:"QR اختصاصی",
    icon:QrCode,
  },
  {
    title:"رویدادها",
    icon:CalendarDays,
  },
  {
    title:"تنظیمات",
    icon:Settings,
  },
];


export default function Sidebar(){


return (

<aside
className="
hidden
lg:flex
w-[280px]
min-h-screen
border-l
border-white/10
bg-[#0D0D0D]
p-6
flex-col
"
>


{/* Logo */}

<div
className="
text-center
mb-12
"
>

<p
dir="ltr"
className="
text-2xl
font-black
text-white
"
>
100
<span
className="
text-[#B9A27B]
"
>
Founders
</span>
</p>


<p
className="
mt-2
text-xs
text-white/40
"
>
Executive Members
</p>


</div>




{/* Menu */}

<nav
className="
space-y-3
"
>


{
menu.map((item)=>{

const Icon=item.icon;


return (

<button
key={item.title}
className="
group
flex
w-full
items-center
gap-4
rounded-2xl
px-5
py-4
text-sm
font-bold
text-white/60

transition-all

hover:bg-[#B9A27B]/10
hover:text-[#B9A27B]
"
>

<Icon
size={20}
/>


{item.title}


</button>

);

})
}


</nav>




<div
className="
mt-auto
"
>

<button
className="
flex
w-full
items-center
gap-4
rounded-2xl
px-5
py-4
text-sm
font-bold
text-red-400

hover:bg-red-500/10
"
>

<LogOut size={20}/>

خروج

</button>


</div>


</aside>

);

}