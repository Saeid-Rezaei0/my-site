"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaPhoneAlt,
  FaArrowLeft,
  FaHome,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";
import { FaBoxArchive, FaCode } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import Socials from "./ui/Socials";
import { BookAIcon, PhoneCall } from "lucide-react";

const Footer = () => {
  const [isOpen, setisOpen] = useState(false);
  const [show, setShow] = useState(false);
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
      name: "مقالات",
      path: "/Articles",
      icon: <BookAIcon className="text-green-400" />,
    },
    {
      name: "راه های ارتباطی",
      path: "/Contact",
      icon: <PhoneCall className="text-green-400" />,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b overflow-hidden from-slate-900 to-slate-800 text-white py-12 border-t border-cyan-500/20 w-full">
      {/* افکت های دکوراتیو */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 lg:gap-16 w-full">
          {/* بخش تماس */}
          <div className="text-center lg:text-right flex-1 w-full">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-full">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                آماده همکاری هستم
              </h3>
            </div>
            <p className="text-slate-300 max-w-md leading-relaxed mx-auto lg:mx-0">
              برای شروع پروژه جدید یا مشاوره رایگان، از طریق راه‌های ارتباطی با
              من در تماس باشید
            </p>
            <div className="mt-6 flex flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+989388449181"
                className="group flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 min-w-[180px]"
              >
                <span>تماس تلفنی</span>
                <FaPhoneAlt className="group-hover:animate-pulse" />
              </a>
              <a
                href="mailto:saeid.rezaei695@gmail.com"
                className="group flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-xl transition-all duration-300 border border-slate-600 min-w-[180px]"
              >
                <span>ارسال ایمیل</span>
                <SiMinutemailer className="group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* بخش لینک‌ها */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <FaCode className="text-cyan-400" />
              دسترسی سریع
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-md">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="group flex flex-col items-center p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="text-xl mb-1 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
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
                containerStyles="flex justify-center lg:justify-start gap-3"
                iconsStyles="w-10 h-10 border border-cyan-500/30 bg-slate-800/50 rounded-xl flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-500/20 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center text-sm text-slate-400 mb-2">
                <span>ساخته شده با</span>
                <FaHeart className="text-red-400 mx-2 animate-pulse" />
                <span>توسط سعید رضایی</span>
              </div>
              <p className="text-slate-500 text-xs">
                © 2024 - 2025 - کلیه حقوق محفوظ است
              </p>
            </div>
          </div>
        </div>
      </div>
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
