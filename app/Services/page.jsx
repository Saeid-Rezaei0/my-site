"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { services } from "@/components/DataArrays/AllData";
function Services() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen py-16 overflow-hidden">
      <div className=" mx-auto lg:px-20 px-2">
        {/* هدر بخش خدمات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-cyan-500 mr-4"></div>
            <span className="text-cyan-400 font-semibold px-2">
              خدمات تخصصی
            </span>
            <div className="w-12 h-0.5 bg-cyan-500 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            خدمات من
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            راهکارهای جامع توسعه وب و نرم‌افزار برای کسب‌وکارهای آنلاین. از
            طراحی تا پیاده‌سازی و پشتیبانی.
          </p>
        </motion.div>

        {/* کارت‌های خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 group-hover:opacity-30 transition-opacity">
                  {service.num}
                </span>
                <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* تکنولوژی‌های مرتبط */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700/40 text-slate-300 text-xs rounded-full border border-slate-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-700/50 group-hover:border-cyan-400/20 transition-colors">
                <Link
                  href={service.href}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center transition-colors"
                >
                  اطلاعات بیشتر
                </Link>
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <FaArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA پایین صفحه */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              آماده شروع پروژه خود هستید؟
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              برای دریافت مشاوره رایگان و بررسی نیازهای پروژه خود با من در تماس
              باشید.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+989388449181"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-medium transition-colors flex items-center"
              >
                درخواست مشاوره
                <FaRocket className="mr-2" />
              </a>
              <a
                href="#workSample"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors border border-slate-600"
              >
                مشاهده نمونه کارها
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
