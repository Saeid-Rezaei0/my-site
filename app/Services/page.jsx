"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
function Services() {
  const servises = [
    {
      num: "01",
      title: "توسعه وب",
      discription: "ایجاد و پیاده‌سازی وبسایت‌های مدرن و واکنش‌گرا با استفاده از تکنولوژی‌های روز.",
      href: ""
    },
    {
      num: "02",
      title: "طراحی وب",
      discription: "طراحی رابط کاربری و تجربه کاربری جذاب و کاربرپسند برای وبسایت‌ها و برنامه‌های تحت وب.",
      href: ""
    },
    {
      num: "03",
      title: "مهندس و توسعه دهند نرم افزار",
      discription: "طراحی و توسعه اپلیکیشن‌های وب برای سیستم‌عامل‌های تحت وب سایت و نرم افزار با عملکرد بهینه.",
      href: ""
    },
    {
      num: "04",
      title: "سئو و بهینه‌سازی",
      discription: "بهینه‌سازی وبسایت برای موتورهای جستجو جهت افزایش رتبه و جذب مخاطبان بیشتر.",
      href: ""
    },
  ];
  return (
    <div className="container">
      <div className="title-feature overflow-hidden">
        <div className="line ml-3"></div>
        <h3 className="text-white mt-[-0.rem] gap-4 font-bold py-8 text-3xl">خدمات</h3>
        <div className="line mr-3"></div>
      </div>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0" >
        <div className="container mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {servises.map((serveice, index) => {
              return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group:">
                <div className="w-full flex justify-between gap-1 items-center">
                  <div className="text-4xl text-outline-custom text-transparent duration-300 transition-all">{serveice.num}</div>
                  <Link href={serveice.href}></Link>
                  <FaArrowRight
                    className="flex hover:bg-black hover:text-accent backtotopstyle w-10 h-10 p-2 rounded-lg justify-start transition-all duration-300 transform hover:rotate-45"
                    dir="rtl"
                  />
                </div>
                <h2 className="lg:mt-[-1rem]">{serveice.title}</h2>
                <p className=" hover:text-accent duration-300 transition-all">{serveice.discription}</p>
                <div className="border-b border-white/20 w-full">
                </div>
              </div>
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services