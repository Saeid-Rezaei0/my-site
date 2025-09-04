"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaHeart,
  FaHome,
  FaLaptopCode,
  FaPhoneAlt,
  FaUser,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FaBoxArchive, FaCode, FaTools, FaEnvelope } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import Socials from "./ui/Socials";

const links = [
  {
    name: "خانه",
    path: "/",
    icon: <FaHome className="text-cyan-400" />,
  },
  {
    name: "خدمات",
    path: "/Services",
    icon: <FaBoxArchive className="text-purple-400" />,
  },
  {
    name: "رزومه",
    path: "/Resume",
    icon: <FaUser className="text-blue-400" />,
  },
  {
    name: "نمونه کارها",
    path: "/work",
    icon: <FaLaptopCode className="text-green-400" />,
  },
  {
    name: "تماس با من",
    path: "/contact",
    icon: <FaEnvelope className="text-yellow-400" />,
  },
];

const Footer = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 border-t border-cyan-500/20 ">
      {/* افکت های دکوراتیو */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 lg:gap-16">
          {/* بخش تماس */}
          <div className="text-center lg:text-right flex-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                آماده همکاری هستم
              </h3>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed">
              برای شروع پروژه جدید یا مشاوره رایگان، از طریق راه‌های ارتباطی با
              من در تماس باشید
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+989388449181"
                className="group flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                <span>تماس تلفنی</span>
                <FaPhoneAlt className="group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:saeid.rezaei@example.com"
                className="group flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-slate-600"
              >
                <span>ارسال ایمیل</span>
                <SiMinutemailer className="group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* بخش لینک‌ها */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <FaCode className="text-cyan-400" />
              دسترسی سریع
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="group flex flex-col items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 min-w-[120px]"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* بخش شبکه های اجتماعی و کپی رایت */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 mb-3">
                من را در شبکه های اجتماعی دنبال کنید
              </p>
              <Socials
                containerStyles="flex justify-center lg:justify-start gap-4"
                iconsStyles="w-12 h-12 border border-cyan-500/30 bg-slate-800/50 rounded-xl flex justify-center items-center text-cyan-400 text-lg hover:bg-cyan-500/20 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center text-sm text-slate-400 mb-2">
                <span>ساخته شده با</span>
                <FaHeart className="text-red-400 mx-2 animate-pulse" />
                <span>توسط سعید رضایی</span>
              </div>
              <p className="text-slate-500 text-xs">
                © 2024 - کلیه حقوق محفوظ است
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* دکمه اسکرول به بالا */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50"
        aria-label="بازگشت به بالا"
      >
        <FaArrowLeft className="transform rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;
