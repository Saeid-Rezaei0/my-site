"use client";
import CountUp from "react-countup";

function State() {
  const states = [
    {
      num: 2,
      text: "سال تجربه",
    },
      {
      num: 20,
      text: "آخرین پروژه‌ها",
    },
   
    {
      num: 18,
      text: "مشتریان راضی",
    },
     {
      num: 19,
      text: "پروژه‌های تکمیل شده",
    },
  
  ];

  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-0 px-3 lg:px-0">
      <div className="container py-5">
      <div className="flex flex-wrap justify-around gap-8 max-w-[80vw] mx-auto lg:max-w-none">
        {states.map((item, index) => {
          return (
            <div
              className="flex flex-col lg:flex-row  items-center justify-center gap-4 text-center lg:text-right"
              key={index}
            > <h4 className="text-3xl hidden lg:flex">+</h4>
              <CountUp
                end={item.num} 
                duration={4.75}
                delay={2}
                className="text-3xl lg:text-5xl font-extrabold"
              /> 
              <p
                className={`${
                  item.text.length < 15 ? "text-base" : "text-sm"
                } max-w-[150px]  lg:max-w-[900px] text-white/80 leading-snug`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
}

export default State;
