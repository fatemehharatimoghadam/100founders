"use client";

import Image from "next/image";

import {
  Building2,
  BriefcaseBusiness,
  Mail,
  Send,
  Crown,
} from "lucide-react";


type ProfileProps = {
  image:string;
  name:string;
  position:string;
  company:string;
  field:string;
  bio:string;
  email:string;
  telegram:string;
};


export default function ProfileCard({
 image,
 name,
 position,
 company,
 field,
 bio,
 email,
 telegram,
}:ProfileProps){


return (

<article
className="
overflow-hidden
rounded-[34px]
bg-[#090909]
border
border-[#B9A27B]/40
shadow-[0_30px_90px_rgba(0,0,0,.35)]
"
>


{/* IMAGE */}

<div
className="
relative
h-[460px]
"
>


<Image

src={image}

alt={name}

fill

priority

className="
object-cover
object-top
"

/>


<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#090909]
via-[#090909]/30
to-transparent
"
/>


<div
className="
absolute
bottom-0
right-0
left-0
p-8
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

100FOUNDERS MEMBER

</div>


<h1
className="
mt-4
text-4xl
font-black
text-[#F1EBDD]
"
>
{name}
</h1>


<p
className="
mt-2
text-[#B9A27B]
font-bold
"
>
{position}
</p>


<p
className="
mt-1
text-white/60
"
>
{company}
</p>


</div>


</div>





{/* BODY */}


<div
className="
p-7
"
>


<div
className="
rounded-[26px]
border
border-[#B9A27B]/30
bg-[#1B1B1B]
p-6
"
>


<div
className="
flex
justify-between
items-center
"
>


<div>

<p
className="
text-xs
text-white/40
"
>
MEMBERSHIP
</p>


<p
className="
mt-2
text-xl
font-black
text-[#F1EBDD]
"
>
100Founders
</p>


</div>



<div
className="
rounded-xl
bg-[#7A1720]
px-4
py-2
text-xs
font-bold
text-white
"
>
VIP
</div>


</div>




<div
className="
mt-6
flex
items-center
gap-3
"
>

<BriefcaseBusiness
className="text-[#B9A27B]"
size={20}
/>


<div>

<p
className="
text-xs
text-white/40
"
>
حوزه فعالیت
</p>

<p
className="
mt-1
font-bold
text-[#F1EBDD]
"
>
{field}
</p>


</div>


</div>



</div>






<div
className="
mt-8
"
>

<h3
className="
text-[#F1EBDD]
font-black
"
>
درباره مدیر
</h3>


<p
className="
mt-3
text-white/60
leading-8
"
>
{bio}
</p>


</div>





<div
className="
mt-8
border-t
border-white/10
pt-7
"
>


<h3
className="
text-[#F1EBDD]
font-black
"
>
ارتباط
</h3>


<div
className="
mt-4
space-y-3
"
>


<a
href={`mailto:${email}`}
className="
flex
items-center
gap-3
rounded-xl
bg-[#1B1B1B]
p-4
text-[#F1EBDD]
"
>

<Mail
className="text-[#B9A27B]"
size={18}
/>

{email}

</a>



<a
href={`https://t.me/${telegram.replace("@","")}`}
className="
flex
items-center
gap-3
rounded-xl
bg-[#1B1B1B]
p-4
text-[#F1EBDD]
"
>

<Send
className="text-[#B9A27B]"
size={18}
/>

{telegram}

</a>


</div>


</div>



</div>



</article>

);


}