"use client";
import Phone from "@/components/Phone";
import State from "@/components/State";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import TypingEffect from "../components/TypeingEffect"; // نام صحیح کامپوننت
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaTelegram,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiAmazonaws,
  SiDocker,
  SiNginx,
  SiJest,
  SiPostman,
} from "react-icons/si";

function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl animate-pulse-slow delay-1500"></div>

      <div className="container mt-[0] lg:mt-[-4rem] relative z-10 mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-8 lg:gap-16">
          {/* Image content - سمت راست */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-500/10 rounded-3xl blur-md animate-pulse-slow"></div>
              <div className="relative mt-2 rounded-lg overflow-hidden">
                <Phone />
              </div>
            </div>
          </div>
          {/* Text content - سمت چپ */}
          <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="mb-6 flex flex-col items-center lg:items-start">
              <span className="text-cyan-400 text-xl lg:text-2xl font-light tracking-wider mb-2 inline-block">
                <span className="text-cyan-500 mr-2"></span> سلام، من
              </span>

              <h1 className="text-4xl lg:text-3xl xl:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  سعید رضایی
                </span>
              </h1>

              <div className="flex items-center mb-6">
                <div className="w-2 h-2  rounded-full mr-2"></div>
                <span className=" text-lg">
                  <TypingEffect />
                </span>
              </div>
            </div>
            <p className="text-slate-300/90 rtl text-right text-lg lg:text-md leading-relaxed max-w-xl mb-10">
              <span className="text-cyan-400 inline-block mr-1 mx-2">✦</span>
              توسعه‌دهنده فول‌استک با بیش از 4 سال تجربه حرفه‌ای در طراحی و
              پیاده‌سازی راه‌حل‌های نرم‌افزاری مقیاس‌پذیر و سازمانی. متخصص در
              توسعه اپلیکیشن‌های مدرن، سامانه‌های پرترافیک و پرسرعت با
              معماری‌های پیشرفته و پیاده‌سازی بهترین روش‌های روز صنعت.
            </p>
            {/* Skills icons */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {/* Frontend */}
              <div className="skill-icon group" title="Next.js">
                <SiNextdotjs className="text-white text-2xl group-hover:text-gray-300 transition-colors" />
              </div>
              <div className="skill-icon group" title="React">
                <FaReact className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors" />
              </div>
              <div className="skill-icon group" title="TypeScript">
                <SiTypescript className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="skill-icon group" title="JavaScript">
                <FaJs className="text-yellow-400 text-2xl group-hover:text-yellow-300 transition-colors" />
              </div>
              <div className="skill-icon group" title="Tailwind CSS">
                <SiTailwindcss className="text-cyan-400 text-2xl group-hover:text-cyan-300 transition-colors" />
              </div>

              {/* Backend */}
              <div className="skill-icon group" title="Node.js">
                <FaNodeJs className="text-green-500 text-2xl group-hover:text-green-400 transition-colors" />
              </div>
              <div className="skill-icon group" title="PostgreSQL">
                <SiPostgresql className="text-blue-600 text-2xl group-hover:text-blue-500 transition-colors" />
              </div>
              <div className="skill-icon group" title="MongoDB">
                <SiMongodb className="text-green-600 text-2xl group-hover:text-green-500 transition-colors" />
              </div>
              <div className="skill-icon group" title="Redis">
                <SiRedis className="text-red-600 text-2xl group-hover:text-red-500 transition-colors" />
              </div>
              <div className="skill-icon group" title="GraphQL">
                <SiGraphql className="text-pink-600 text-2xl group-hover:text-pink-500 transition-colors" />
              </div>

              {/* DevOps & Tools */}
              <div className="skill-icon group" title="Git">
                <FaGitAlt className="text-orange-600 text-2xl group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="skill-icon group" title="Docker">
                <SiDocker className="text-blue-500 text-2xl group-hover:text-blue-400 transition-colors" />
              </div>

              <div className="skill-icon group" title="Postman">
                <SiPostman className="text-orange-500 text-2xl group-hover:text-orange-400 transition-colors" />
              </div>
            </div>
            {/* Buttons and socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start">
              <a
                href="/Resume.pdf"
                download
                className="group relative flex items-center gap-3 bg-gradient-to-l from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-1 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <span>دانلود رزومه</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-y-[-2px] transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-md transition-opacity duration-300"></div>
              </a>

              <div className="flex items-center">
                <div className="flex gap-5">
                  <a
                    href="https://github.com/Saeid-Rezaei0"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://ir.linkedin.com/in/saeid-rezaei-9a471636a"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/S_Rezaei00"
                    className="social-icon"
                    aria-label="Telegram" // تغییر به Telegram
                    target="_blank" // اضافه کردن برای باز شدن در تب جدید
                    rel="noopener noreferrer" // برای امنیت
                  >
                    <FaTelegram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
