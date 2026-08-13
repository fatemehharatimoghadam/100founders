"use client";

import { useEffect, useRef, useState } from "react";


export default function Counter({
  value,
}: {
  value: number;
}) {


  const [count, setCount] = useState(0);

  const ref = useRef<HTMLSpanElement | null>(null);

  const [start, setStart] = useState(false);



  useEffect(() => {


    const observer = new IntersectionObserver(

      ([entry]) => {

        if(entry.isIntersecting){

          setStart(true);

          observer.disconnect();

        }

      },

      {
        threshold: 0.5
      }

    );


    if(ref.current){

      observer.observe(ref.current);

    }


    return ()=>observer.disconnect();


  }, []);





  useEffect(()=>{


    if(!start) return;


    let current = 0;


    const duration = 1500;

    const intervalTime = 20;


    const increment = value / (duration / intervalTime);



    const timer = setInterval(()=>{


      current += increment;


      if(current >= value){


        setCount(value);

        clearInterval(timer);


      }

      else{


        setCount(Math.floor(current));


      }



    }, intervalTime);



    return ()=>clearInterval(timer);



  },[start,value]);






  return (

    <span ref={ref}>

      {count}+

    </span>

  );

}