"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FaPhoneAlt } from "react-icons/fa";
import Socials from "./Socials";

function Header() {
  const [scrolled, setscrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handlerscroll = () => {
      if (window.scrollY >= 150) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", handlerscroll);

    return () => {
      window.removeEventListener("scroll", handlerscroll);
    };
  }, []);

  return (
    <header
      className={`${"sticky backdrop-blur-md bg-slate-900/80 border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10"} py-3 text-white  top-0 left-0 w-full z-50 transition-all duration-500`}
    >
      {" "}
      <div className="container mx-auto flex justify-between items-center">
        {/* mobile nav */}
        <div className="">
          <MobileNav />
        </div>
        <div className={`hidden lg:flex order-2 lg:order-1`}>
          <Nav />
        </div>
        <div className="order-1 lg:order-2 ">
          <button
            onClick={() => setIsOpen(true)}
            className="button-contact bg-black text-white flex items-center p-2 pr-10 rounded"
          >
            <div className="txt-upload">ارتباط با من</div>
            {/* <FaPhone/> */}
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 top-96 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-cyan-500/10 max-w-md w-full p-8 relative border border-cyan-500/20">
              {/* دکمه بستن */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-1 rounded-full hover:bg-slate-700/50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              {/* هدر مدال */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-cyan-500/10 blur-md rounded-full"></div>
                  <h2 className="relative text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent py-2">
                    ارتباط با من
                  </h2>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mt-4"></div>
              </div>

              {/* محتوای مدال */}
              <p className="text-center text-slate-300 mb-6 leading-relaxed">
                برای سفارش پروژه یا همکاری می‌توانید از طریق راه‌های زیر با من
                در ارتباط باشید
              </p>

              {/* اطلاعات تماس */}
              <div className="bg-slate-700/30 rounded-xl p-4 mb-6 border border-slate-600/50">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mr-3">
                    <FaPhoneAlt className="text-cyan-400 text-lg" />
                  </div>
                  <a
                    href="tel:+989388449181"
                    className="text-slate-100 text-lg font-medium hover:text-cyan-400 transition-colors duration-300"
                  >
                    ۰۹۳۸۸۴۴۹۱۸۱ 
                  </a>
                </div>

                <div className="flex items-center justify-center mt-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="mailto:example@email.com"
                    className="text-slate-100 text-lg font-medium hover:text-cyan-400 transition-colors duration-300"
                  >
                    example@email.com
                  </a>
                </div>
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-4">
                  یا از طریق شبکه‌های اجتماعی
                </p>
                <div className="flex justify-center gap-3">
                  <Socials
                    containerStyles="flex gap-4"
                    iconsStyles="w-12 h-12 border border-cyan-500/30 bg-slate-800/50 rounded-xl flex justify-center items-center text-cyan-400 text-lg hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow hover:shadow-cyan-400/10"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
