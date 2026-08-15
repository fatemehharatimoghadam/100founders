"use client";

import Image from "next/image";

import {
  Crown,
  Building2,
  BriefcaseBusiness,
  Edit3,
} from "lucide-react";


export default function ProfileHero(){

return (

<section
className="
relative
overflow-hidden
rounded-[34px]
border
border-white/10
bg-gradient-to-br
from-[#171717]
to-[#090909]
p-6

md:p-8
"
>


{/* glow */}

<div
className="
absolute
- left-20
-top-20
h-72
w-72
rounded-full
bg-[#B9A27B]/10
blur-3xl
"
/>



<div
className="
relative
flex
flex-col
gap-6

md:flex-row
md:items-center
"
>


{/* IMAGE */}

<div
className="
relative
h-32
w-32
shrink-0
overflow-hidden
rounded-[28px]
border
border-[#B9A27B]/40
"
>

<Image

src="/images/users/ahmad.jpg"

alt="profile"

fill

className="
object-cover
"

/>


</div>





{/* INFO */}

<div
className="
flex-1
"
>


<div
className="
flex
items-center
gap-2
text-[#B9A27B]
text-xs
font-bold
"
>

<Crown size={15}/>

VIP MEMBER

</div>


<h1
className="
mt-3
text-3xl
font-black
text-white
"
>
احمد رضایی
</h1>


<div
className="
mt-3
flex
flex-wrap
gap-4
text-sm
text-white/50
"
>


<span
className="
flex
items-center
gap-2
"
>

<Building2 size={16}/>

Example Company

</span>



<span
className="
flex
items-center
gap-2
"
>

<BriefcaseBusiness size={16}/>

Founder

</span>


</div>


</div>





{/* BUTTON */}

<button
className="
flex
items-center
justify-center
gap-2
rounded-2xl
bg-[#B9A27B]
px-5
py-3
text-sm
font-black
text-black

transition-all

hover:-translate-y-1
"
>

<Edit3 size={17}/>

ویرایش پروفایل

</button>



</div>


</section>

);

}