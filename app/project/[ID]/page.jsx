"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { projects } from "@/components/DataArrays/AllData";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaPalette,
  FaChevronRight,
  FaDesktop,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import {
  RiPagesLine,
  RiLightbulbFlashLine,
  RiTeamLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiRedux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Link from "next/link";

// آیکون‌های تکنولوژی
const techIcons = {
  Html: SiHtml5,
  Css: SiCss3,
  javascript: SiJavascript,
  BootStrap: SiBootstrap,
  "Map-online": FaCode,
  "html 5": SiHtml5,
  "css 5": SiCss3,
  "React.js": SiReact,
  Sass: SiSass,
  Redux: SiRedux,
  "Next.js": SiNextdotjs,
  "framer-motion": FaCode,
  "Tailwind CSS": SiTailwindcss,
};

const techColors = {
  Html: "text-orange-500",
  Css: "text-blue-500",
  javascript: "text-yellow-400",
  BootStrap: "text-purple-500",
  "Map-online": "text-blue-400",
  "html 5": "text-orange-500",
  "css 5": "text-blue-500",
  "React.js": "text-cyan-400",
  Sass: "text-pink-400",
  Redux: "text-purple-600",
  "Next.js": "text-black",
  "framer-motion": "text-blue-600",
  "Tailwind CSS": "text-cyan-500",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const projectName = params.ID;
    const foundProject = projects?.find((p) => p.id == projectName);
    setProject(foundProject);
  }, [params.ID]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="text-white text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className="relative w-full h-96 lg:h-[80vh]">
              <img
                src={project.images[lightboxIndex]}
                alt={`${project.category} - Image ${lightboxIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}

      {/* هدر */}
      <header className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10 px-4">
          <Link
            href="/Examplework"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            بازگشت به نمونه کارها
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm uppercase tracking-wider">
                  پروژه منتخب
                </span>
              </div>

              <h1 className="text-4xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {project.category}
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                    مشاهده لایو پروژه
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-slate-600 shadow-lg hover:shadow-slate-500/10 group"
                  >
                  <FaGithub className="group-hover:scale-110 transition-transform" />
                  مشاهده در گیت‌هاب
                </a>
              </div>

              {/* آمار پروژه */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <FaRocket className="text-cyan-400 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {project.images.length}+
                  </div>
                  <div className="text-slate-400 text-sm">صفحه طراحی شده</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {project.stack.length}+
                  </div>
                  <div className="text-slate-400 text-sm">
                    تکنولوژی استفاده شده
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/20 group">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <button
                    onClick={prevImage}
                    className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors transform hover:scale-110"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => openLightbox(currentImageIndex)}
                    className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors transform hover:scale-110"
                  >
                    <FaExpand />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors transform hover:scale-110"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-cyan-400 scale-110"
                        : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* بخش تکنولوژی‌ها */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FaCode className="text-cyan-400 text-2xl" />
              <h2 className="text-3xl font-bold">تکنولوژی‌های استفاده شده</h2>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              این پروژه با استفاده از بهترین و مدرن‌ترین تکنولوژی‌های توسعه وب
              پیاده‌سازی شده است
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {project.stack.map((tech, index) => {
              const TechIcon = techIcons[tech.name] || FaCode;
              const colorClass = techColors[tech.name] || "text-gray-400";

              return (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-xl p-6 text-center border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <TechIcon
                    className={`text-4xl mb-3 mx-auto ${colorClass} group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* گالری تصاویر */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <RiPagesLine className="text-purple-400 text-2xl" />
              <h2 className="text-3xl font-bold">گالری پروژه</h2>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              برای مشاهده هر تصویر در اندازه بزرگ، روی آن کلیک کنید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={`${project.category} - Image ${index + 1}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <FaExpand className="text-white text-2xl mb-2 mx-auto" />
                    <span className="text-white text-lg font-semibold">
                      کلیک برای بزرگ‌نمایی
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ویژگی‌های پروژه */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <RiLightbulbFlashLine className="text-yellow-400 text-2xl" />
              <h2 className="text-3xl font-bold">ویژگی‌های بارز پروژه</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaDesktop,
                color: "cyan",
                title: "طراحی ریسپانسیو",
                description: "سازگاری کامل با تمام دستگاه‌ها",
              },
              {
                icon: RiTeamLine,
                color: "purple",
                title: "تجربه کاربری عالی",
                description: "طراحی کاربرپسند و intuitive",
              },
              {
                icon: FaPalette,
                color: "blue",
                title: "طراحی مدرن",
                description: "استفاده از جدیدترین trends طراحی",
              },
              {
                icon: RiCustomerService2Line,
                color: "green",
                title: "پشتیبانی کامل",
                description: "سیستم پشتیبانی یکپارچه",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700/50 rounded-xl p-6 text-center border border-slate-600 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-${feature.color}-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}
                >
                  <feature.icon
                    className={`text-${feature.color}-400 text-2xl`}
                  />
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <h2 className="text-3xl font-bold mb-6 relative z-10">
              آماده شروع پروژه بعدی هستید؟
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              اگر به دنبال توسعه‌دهنده‌ای با تجربه و خلاق برای پروژه خود هستید،
              خوشحال می‌شوم در این زمینه با شما همکاری کنم.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-cyan-500/20"
              >
                شروع همکاری
              </Link>
              <Link
                href="/work"
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-slate-500/10"
              >
                مشاهده سایر نمونه کارها
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}