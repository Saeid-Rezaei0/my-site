"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
  FaExpand,
  FaExternalLinkAlt,
  FaCode,
  FaEye,
  FaDesktop,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import {
  RiImageLine,
  RiGalleryView2,
  RiPagesLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Image from "next/image";
import { projects } from "@/components/DataArrays/AllData";
import Link from "next/link";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Examplework() {
  const [autoplayDelay, setAutoplayDelay] = useState(500000);
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descriptionItem, setDescriptionItem] = useState(null);
  const [nameItem, setNameItem] = useState(null);
  const [projectItem, setProjectItem] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1516) {
        setAutoplayDelay(3000);
      } else {
        setAutoplayDelay(500000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageClick = (project, idx) => {
    setSelectedImages(project.images);
    setDescriptionItem(project.description);
    setNameItem(project.category);
    setProjectItem(project);
    setCurrentIndex(idx);
    setShowModal(true);
    setShowDescription(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setShowModal(false);
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "ArrowLeft") handlePreviousImage();
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* افکت های دکوراتیو */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="px-1 lg:px-10 mx-auto relative z-10">
          {/* هدر بخش */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                نمونه کارهای من
              </h2>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              مجموعه‌ای از پروژه‌های منتخب که با دقت و خلاقیت طراحی و پیاده‌سازی
              شده‌اند
            </p>
          </div>

          {/* دستورالعمل */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-10 px-4">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <RiImageLine className="text-cyan-400" />
              <span className="text-slate-300 text-sm">
                برای بزرگ‌نمایی کلیک کنید
              </span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <RiGalleryView2 className="text-purple-400" />
              <span className="text-slate-300 text-sm">
                برای مشاهد جزئیات بیشتر کلیک کنید
              </span>
            </div>
          </div>

          {/* گالری نمونه کارها */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative overflow-hidden">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                      el: `.pagination-${index}`,
                      bulletClass: "swiper-pagination-bullet bg-slate-600",
                      bulletActiveClass:
                        "swiper-pagination-bullet-active !bg-cyan-400",
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: `.next-${index}`,
                      prevEl: `.prev-${index}`,
                    }}
                    loop={true}
                    className="h-48 lg:h-64"
                  >
                    {project.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div
                          onClick={() => handleImageClick(project, idx)}
                          className="relative w-full h-48 lg:h-64 cursor-pointer group/image"
                        >
                          <Image
                            src={image}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                            alt={`${project.category} - Image ${idx + 1}`}
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300 flex gap-3">
                              <div className="bg-cyan-500/80 p-2 rounded-full">
                                <FaExpand className="text-white text-sm" />
                              </div>
                              <div className="bg-purple-500/80 p-2 rounded-full">
                                <FaInfoCircle className="text-white text-sm" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation buttons */}
                  <button
                    className={`next-${index} absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <RiArrowRightSLine className="text-lg" />
                  </button>
                  <button
                    className={`prev-${index} absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <RiArrowLeftSLine className="text-lg" />
                  </button>

                  {/* Pagination */}
                  <div
                    className={`pagination-${index} absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 flex gap-1`}
                  />
                </div>
                <Link href={`/project/${project.id}`}>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white hover:text-blue-600 hover:transition-colors font-semibold flex items-center gap-2">
                        <RiPagesLine className="text-cyan-400" />
                        {project.category}
                      </h3>
                      <span className="text-slate-400 text-sm bg-slate-700/50 px-2 py-1 rounded-full">
                        {project.images.length} تصویر
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <span
                      className="text-slate-400 flex hover:bg-blue-600 hover:text-white hover:duration-250
 items-center text-sm text-center 
                     bg-slate-700/50 px-3 py-1 mt-2 rounded-full  gap-1"
                    >
                      <FaEye className="text-xs" />
                      مشاهده جزئیات
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        مشاهده لایو پروژه
                      </a>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مودال نمایش تصویر */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="relative bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* هدر مودال */}
            <div className="flex justify-between items-center p-4 bg-slate-800/50 border-b border-slate-700">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <FaDesktop className="text-cyan-400" />
                {nameItem}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50"
              >
                <MdCancel className="text-xl" />
              </button>
            </div>

            {/* محتوای مودال */}
            <div className="p-4 max-h-[70vh] overflow-auto">
              {showDescription ? (
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaInfoCircle className="text-cyan-400 text-xl" />
                    <h4 className="text-white text-lg font-semibold">
                      توضیحات پروژه
                    </h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {descriptionItem}
                  </p>

                  {projectItem?.technologies && (
                    <div className="mt-6">
                      <h5 className="text-slate-400 mb-2 flex items-center gap-2">
                        <FaCode className="text-purple-400" />
                        تکنولوژی‌های استفاده شده
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {projectItem.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <Image
                    src={selectedImages[currentIndex]}
                    fill
                    className="object-contain"
                    alt={`${nameItem} - Image ${currentIndex + 1}`}
                  />
                </div>
              )}
            </div>

            {/* فوتر مودال */}
            <div className="p-4 bg-slate-800/50 border-t border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDescription}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-white"
                >
                  {showDescription ? (
                    <>
                      <FaEye className="text-cyan-400" />
                      نمایش تصویر
                    </>
                  ) : (
                    <>
                      <FaInfoCircle className="text-purple-400" />
                      مشاهده توضیحات
                    </>
                  )}
                </button>

                {!showDescription && (
                  <span className="text-slate-400 text-sm">
                    {currentIndex + 1} / {selectedImages.length}
                  </span>
                )}
              </div>

              {!showDescription && (
                <div className="flex gap-3">
                  <button
                    onClick={handlePreviousImage}
                    className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-white"
                  >
                    <FaArrowRight />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-white"
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Examplework;
