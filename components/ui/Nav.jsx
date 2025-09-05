"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../DataArrays/AllData";
import { FaArrowRight, FaTimes, FaBars } from "react-icons/fa";
function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* دکمه منوی موبایل - کوچک‌تر */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800/80 backdrop-blur-md rounded-lg border border-slate-700/50 shadow-lg hover:bg-slate-700/80 transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-slate-300 text-md" />
        ) : (
          <FaBars className="text-slate-300 text-md" />
        )}
      </button>

      {/* منوی دسکتاپ - ارتفاع کمتر */}
      <nav className="hidden lg:flex items-center gap-2  rounded-2xl px-4 py-2 border border-transparent mr-5 shadow-lg">
        {links.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <Link
              key={index}
              href={link.path}
              className={`relative group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-white bg-blue-600 shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              {/* آیکون */}
              <span
                className={`transition-all duration-200 ${
                  isActive
                    ? "scale-110"
                    : "group-hover:scale-110 group-hover:text-blue-300"
                }`}
              >
                {link.icon}
              </span>

              {/* متن */}
              <span
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-white" : "group-hover:text-blue-300"
                }`}
              >
                {link.name}
              </span>

              {/* افکت active */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 w-1 h-1  rounded-full transform -translate-x-1/2" />
              )}
            </Link>
          );
        })}

        {/* جداکننده و وضعیت آنلاین */}
        <div className="flex items-center ml-4 pl-4 border-l border-slate-700/40">
          <div className="relative flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute -top-0.5 -right-0.5" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </div>
            <span className="text-slate-400 text-xs">آنلاین</span>
          </div>
        </div>
      </nav>

      {/* منوی موبایل */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* منو */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-slate-900 border-l border-slate-700/30 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            {/* هدر منو */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">منو</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* آیتم های منو */}
            <div className="flex-1 space-y-3">
              {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                  <Link
                    key={index}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        isActive ? "text-white" : "group-hover:text-blue-300"
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                    <FaArrowRight
                      className={`text-xs ml-auto transition-transform duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* فوتر منو */}
            <div className="pt-6 mt-auto border-t border-slate-700/50">
              <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>آماده همکاری</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
