"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome, FaLaptopCode, FaUser } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import Image from "next/image";
import Socials from "./Socials";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "../DataArrays/AllData";
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
 

  const pathname = usePathname();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <div className="relative p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 transition-all duration-300 group">
          <TiThMenuOutline className="text-2xl text-cyan-400 group-hover:text-white transition-colors" />
          <div className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border-l border-cyan-500/20 p-0">
        <div className="flex flex-col h-full relative">
          {/* افکت های پس زمینه */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

          {/* هدر منو */}
          <div className="p-5 border-b border-cyan-500/20 flex justify-between items-center bg-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2  rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-light">منو</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1 rounded-full hover:bg-slate-800/50"
            >
              <IoCloseOutline className="text-xl" />
            </button>
          </div>

          {/* محتوای منو */}
          <div className="flex flex-col items-center px-5 py-6 flex-grow overflow-y-auto">
            {/* پروفایل */}
            <div className="relative mb-8 flex flex-col items-center">
              <div className="relative z-10 mb-2">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-50 blur-lg animate-pulse-slow"></div>
                <div className="relative rounded-full p-1 bg-slate-900">
                  <Image
                    src="/moblienav.png"
                    alt="پروفایل سعید رضایی"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-cyan-500/30 object-cover shadow-lg"
                  />
                </div>
              </div>
              <h5 className="mt-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                سعید رضایی
              </h5>
              <p className="text-cyan-400/80 flex text-xs mt-1 bg-slate-800/50 px-3 py-1 rounded-full">
                (طراح سایت)  <span className="lg:flex mx-1 hidden">FullStack developer</span>
              </p>
            </div>

            {/* آیتم‌های منو */}
            <nav className="w-full mt-[-1rem] ">
              <div className="flex flex-col gap-3">
                {links.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-500 group ${
                      menu.path === pathname
                        ? "bg-gradient-to-l from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/10"
                        : "bg-slate-800/30 hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-lg transition-all duration-300 ${
                          menu.path === pathname
                            ? "text-cyan-400"
                            : "text-slate-400 group-hover:text-cyan-400"
                        }`}
                      >
                        {menu.icon}
                      </span>
                      <span
                        className={`text-base font-medium transition-all duration-300 ${
                          menu.path === pathname
                            ? "text-cyan-300"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {menu.name}
                      </span>
                    </div>
                    {menu.path === pathname && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* شبکه‌های اجتماعی */}
            <div className=" pt-6 mt-2 border-t border-cyan-500/20 w-full">
              <p className="text-center text-slate-400 text-xs mb-3">
                من را دنبال کنید
              </p>
              <div className="flex justify-center">
                <Socials
                  containerStyles="flex lg:gap-4 gap-1"
                  iconsStyles="w-11 h-11 border border-cyan-500/30 bg-slate-800/50 rounded-xl flex justify-center items-center text-cyan-400 text-lg hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow hover:shadow-cyan-400/10"
                />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
