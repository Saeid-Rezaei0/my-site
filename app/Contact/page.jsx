"use client";

import AdvancedLocationMap from "@/components/AdvancedLocationMap";
import { messageFromUser } from "@/components/DataArrays/AllData";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     alert("پیام شما با موفقیت ارسال شد!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* هدر */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              تماس با من
            </h1>
            <p className="text-xl text-slate-300">
              خوشحال می‌شوم از طریق راه‌های زیر با من در ارتباط باشید
            </p>
          </div>
        </div>
      </header>

      {/* محتوای اصلی */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* اطلاعات تماس */}
          <div className="space-y-8">
            {/* کارت اطلاعات */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">
                اطلاعات تماس
              </h2>

              <div className="space-y-6">
                {/* تلفن */}
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-xl">
                    <FaPhone className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">تلفن</h3>
                    <p className="text-slate-300 mt-1">09388449181</p>
                    {/* <p className="text-slate-300">۰۲۱ ۱۲۳۴۵۶۷۸</p> */}
                  </div>
                </div>

                {/* ایمیل */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-xl">
                    <FaEnvelope className="text-purple-400 text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">ایمیل</h3>
                    <p className="text-slate-300"> saeid.rezaei695@gmail.com</p>
                    <a
                      href=" https://saeidrezaei.netlify.app/"
                      target="_blank"
                      className="text-slate-300 mt-1"
                    >
                      آدرس سایت: saeidrezaei.netlify.app
                    </a>
                  </div>
                </div>

                {/* آدرس */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-xl">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">آدرس</h3>
                    <p className="text-slate-300 mt-1">
                      تهران، خیابان حکیمیه پلاک 34
                    </p>
                  </div>
                </div>
              </div>

              {/* شبکه‌های اجتماعی */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h3 className="font-semibold text-lg mb-4">شبکه‌های اجتماعی</h3>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/S_Rezaei00"
                    className="social-icon"
                    aria-label="Telegram" // تغییر به Telegram
                    target="_blank" // اضافه کردن برای باز شدن در تب جدید
                    rel="noopener noreferrer" // برای امنیت
                  >
                    <FaTelegram size={24} />
                  </a>{" "}
                  <a
                    href="https://github.com/Saeid-Rezaei0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 hover:bg-purple-500/20 p-3 rounded-xl transition-all duration-300 border border-slate-600 hover:border-purple-400"
                  >
                    <FaGithub className="text-2xl text-purple-400" />
                  </a>
                  <a
                    href="https://ir.linkedin.com/in/saeid-rezaei-9a471636a"
                    className="social-icon"
                    aria-label="LinkedIn Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/saeid_rezai0/"
                    className="social-icon"
                    aria-label="Instagram Profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* کارت زمان پاسخگویی */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">
                زمان پاسخگویی
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">شنبه تا چهارشنبه</span>
                  <span className="font-medium">۹:۰۰ - ۱۸:۰۰</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-slate-300">پنجشنبه</span>
                  <span className="font-medium">۹:۰۰ - ۱۴:۰۰</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">جمعه</span>
                  <span className="font-medium">تعطیل</span>
                </div>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">
              ارسال پیام
            </h2>
            <p className="text-slate-300 mb-8">
              برای هرگونه سوال، پیشنهاد یا همکاری می‌توانید با من تماس بگیرید
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <FaUser className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="نام و نام خانوادگی"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <FaEnvelope className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="آدرس ایمیل"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <FaComment className="text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="متن پیام شما..."
                    rows="5"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 px-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20"
              >
                ارسال پیام
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* نقشه */}
     <AdvancedLocationMap />
    </div>
  );
}
