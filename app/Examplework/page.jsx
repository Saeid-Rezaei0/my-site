"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import MoreButton from "@/components/MoreButton";
import {
  FaInfoCircle,
  FaExpand,
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";
import ProjectLink from "@/components/ProjectLink";
import {
  RiImageLine,
  RiGalleryView2,
  RiPagesLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { projects } from "@/components/DataArrays/AllData";
import Link from "next/link";
import ModalSampaleWork from "@/components/ModalSampaleWork";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { usePathname } from "next/navigation";

function Examplework() {
  const [autoplayDelay, setAutoplayDelay] = useState(500000);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const pathname = usePathname();
  const [isExampleWork, setIsExampleWork] = useState(false);

  useEffect(() => {
    // بررسی اگر مسیر شامل /Examplework باشد
    if (pathname.includes("/Examplework")) {
      setIsExampleWork(true);
    } else {
      setIsExampleWork(false);
    }
  }, [pathname]);
  const allData = isExampleWork ? projects : projects.slice(0, 8);
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
    setSelectedProject(project);
    setCurrentIndex(idx);
    setShowModal(true);
    setShowDescription(false);
  };

  const handleNextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
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
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="px-1 lg:px-10 mx-auto relative z-10">
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
                برای مشاهده جزئیات بیشتر کلیک کنید
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {allData.map((project, index) => (
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
                          <img
                            src={image}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                            alt={`${project.category} - Image ${idx + 1}`}
                            onError={(e) => {
                              e.target.src = "/fallback-image.jpg";
                            }}
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

                    <p className="text-slate-300 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.stack.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-cyan-500/10 text-cyan-400 text-xs px-2 py-1 rounded"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="bg-slate-700/50 text-slate-400 text-xs px-2 py-1 rounded">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 flex items-center text-sm bg-slate-700/50 px-3 py-1 rounded-full gap-1 hover:bg-blue-600 hover:text-white transition-colors">
                          <FaEye className="text-xs" />
                          مشاهده جزئیات
                        </span>
                        <span>
                          {project.live && <ProjectLink project={project} />}
                        </span>
                      </div>
                 
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <MoreButton />
        </div>
      </section>
      <ModalSampaleWork
        showModal={showModal}
        setShowModal={setShowModal}
        selectedProject={selectedProject}
      />
    </>
  );
}

export default Examplework;
