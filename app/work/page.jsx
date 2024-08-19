"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowsRightDown, TbCornerLeftDownDouble } from "react-icons/tb";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaEye, FaGithub } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import WorkSliderbtns from "../../components/WorkSliderbtns";

const projects = [
  {
    name: "01",
    category: "باغ تالار پالادیوم",
    description:"با طراحی تعاملی و نقشه‌های ناوبری دقیق، دسترسی به بخش‌های مختلف باغ تالار ما آسان و سریع است. منوهای آکاردئونی ما تجربه کاربری شما را بهبود می‌بخشند و اطلاعات مورد نیاز را به شکلی منظم و زیبا ارائه می‌دهند. صفحه گالری ما نیز امکانات و زیبایی‌های باغ تالار را به شکلی کاربردی و جذاب به نمایش می‌گذارد.",
    stack: [{ name: "html 5" }, { name: "css 5" }, { name: "javascript" } , { name: "BootStrap" }  , { name: "React.js" }],
    images: [ "/image/header.png", "/image/main.png", "/image/main-2.png", "/image/slider.png", "/image/contact.png", "/image/map.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "02",
    category: "وب سایت فروشگاهی",
    description:
"تجربه‌ای نوین از خرید آنلاین با وب‌سایت ما وب‌سایت فروشگاهی ما با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    stack: [{ name: "javascript"},{name:"React,js"}, {name: "Sass"}, {name:"Redux"}, {name:"Next,js , Sql"}, ],
    images: [ "/image/header-22.png","/image/main-26.png", "/image/main-223.png", "/image/cate.png", "/image/shop.png", "/image/productpage.png", "/image/panel.png", "/image/admin-21.png", "/image/about-shop.png", "/image/cantact.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "03",
    category: " وب سایت  فروش انلاین ساعت",
    description:"در این وب‌سایت فروش ساعت، با مجموعه‌ای متنوع از ساعت‌های لوکس، اسپرت و کلاسیک، هر سلیقه‌ای پوشش داده شده است. امکانات جستجوی پیشرفته به شما کمک می‌کند تا به‌راحتی ساعت مورد نظر خود را پیدا کنید. با پشتیبانی 24 ساعته و چت آنلاین، سوالات شما در سریع‌ترین زمان پاسخ داده می‌شود. طراحی مدرن این وب‌سایت، خرید را برای شما آسان و لذت‌بخش می‌کند",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "javascript" }, { name: "BootStrap" }, { name: "Map-online" }],
    images: [ "/image/watch3.png","/image/watch.png", "/image/watch11.png", "/image/watch417.png", "/image/watch67.png", "/image/watch13221.png", "/image/watch881.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "04",
    category: " وب سایت شخصی خودم",
    description:
      "وب سایت شخصی خودم که برای ارائه خدمات و ثبت سفارش های کاربران ساخته شده که از تلنولوژی های روز استفاده شده",
    stack: [{ name: "framer-motion" }, { name: "Tailwind CSS" }, { name: "javascript" }, { name: "React" }, { name: "Next.js" }],
    images: ["/image/my-web.png", "/image/my-web-2.png", "/image/my-web-33.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },

];

function Work() {
  const [project, setProject] = useState(projects[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleImageClick = (project, index) => {
    setCurrentProject(project);
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="title-feature overflow-hidden w-[90%] mx-auto">
        <div className="line ml-3"></div>
        <h3 className="text-white mt-[-0.6rem] gap-4 whitespace-nowrap font-bold py-8 text-2xl">
          نمونه کار های من
        </h3>
        <div className="line mr-3"></div>
      </div>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-6xl mt-4 leading-none font-extrabold text-transparent text-outline-custom">
                  {project.name}
                </div>
                <h4 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h4>
                <p className="text-white/60">{project.description}</p>
                  <span className="text-[15px] whitespace-nowrap text-white/60">تکنولوژی های به کار رفته 
                  <TbCornerLeftDownDouble />
                   </span>
                <ul className="flex items-center flex-wrap justify-end gap-5" dir="ltr">
                  {project.stack.map((item, index) => (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <div>
                    <TooltipProvider delayDuration={10} c>
                      <Tooltip>
                        <TooltipTrigger
                          onClick={() => handleImageClick(project, 0)}
                          className="w-[50px] animate-bounce h-[50px] rounded-full flex justify-center items-center bg-white/20 text-3xl group-hover:text-gray-700"
                        >
                          <FaEye />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>مشاهد دمو</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={10}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white/20 text-3xl group-hover:text-gray-700">
                          <FaGithub />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>گیت هاب </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] ">
            <Swiper
  spaceBetween={30}
  slidesPerView={1}
  className="lg:h-[520px] mb-12"
  onSlideChange={handleSliderChange}
  navigation={true}
>
  {projects.map((project, index) => (
      <SwiperSlide key={index} className="w-full rounded-lg">
        <div
          className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer"
          onClick={() => handleImageClick(project, 0)}
        >
          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10"></div>
          <div className="relative rounded-lg w-full h-full group">
            <Image
              src={project.images[0]}
              fill
              className="object-cover"
              alt="image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-65 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col justify-center items-center">
                <span className="text-white text-4xl">
                  <FaEye />
                </span>
                <span className="text-white">برای دیدن جزییات بیشتر کلیک کنید</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}

  <WorkSliderbtns
    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none "
    btnStyles="bg-gray-400 pt-3 rounded-lg hover:bg-accent-hover text-primary text-[20px] flex  w-[44px] h-[44px] flex justify-center transition-all text-center"
  />
</Swiper>

            </div>
          </div>
        </div>
      </section>

      {/* Modal Implementation */}
      {showModal && currentProject && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
    <div className="relative h-[100vh] w-screen md:w-[700px]">
      <Image
        src={currentProject.images[selectedImageIndex]}
        alt="Selected Image"
        fill
        className="object-contain  rounded-lg"
      />
    
      <button
        className="absolute lg:top-10 top-52 right-4 text-accent text-lg bg-black p-2 rounded-full z-10"
        onClick={() => setShowModal(false)}
      >
        <MdCancel className="font-medium text-2xl text-tertiary-dark" />
      </button>
      <div className="flex gap-2 items-center justify-between absolute bottom-60 left-0 right-0 px-4">
        <FaArrowRight
          onClick={handleNextImage}
          className="cursor-pointertext-white text-accent  rounded-lg w-10 h-8 bg-black bg p-2"
        />
        <FaArrowLeft
          onClick={handlePreviousImage}
          className="cursor-pointertext-white  rounded-lg w-10 h-8 bg-black p-2"
        />
      </div>
    </div>
  </div>
)}


    </>
  );
}
export default Work;
