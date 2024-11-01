"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination } from 'swiper';
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

const projects = [
  {
    name: "01",
    category: " وب سایت  فروش انلاین ساعت",
    description: "در این وب‌سایت فروش ساعت، با مجموعه‌ای متنوع از ساعت‌های لوکس، اسپرت و کلاسیک، هر سلیقه‌ای پوشش داده شده است. امکانات جستجوی پیشرفته به شما کمک می‌کند تا به‌راحتی ساعت مورد نظر خود را پیدا کنید. با پشتیبانی 24 ساعته و چت آنلاین، سوالات شما در سریع‌ترین زمان پاسخ داده می‌شود. طراحی مدرن این وب‌سایت، خرید را برای شما آسان و لذت‌بخش می‌کند",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "javascript" }, { name: "BootStrap" }, { name: "Map-online" }],
    images: ["/image/watch.png", "/image/watch3.png", "/image/watch11.png", "/image/watch417.png", "/image/watch67.png", "/image/watch13221.png", "/image/watch881.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "02",
    category: "وب سایت فروش قهوه",
    description:
"تجربه‌ای نوین از خرید آنلاین قهوه  با وب‌سایت فروش قهوه با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ، پنل کاربردی جهت راحتی کار صفحه علاقه مندی... خریدی سریع و راحت را برای شما به ارمغان می‌آورد",
    stack: [{ name: "html 5" }, { name: "css 5" }, { name: "javascript" }, { name: "BootStrap" }, { name: "React.js" }],
    images: ["/image/set_cofef.png", "/image/set_coffe_2.png", "/image/set_coffe_3.png", "/image/set_coffe_4png.png", "/image/set_coffe_5.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "03",
    category: "انلاین شاپ کالا چی",
    description:
      "تجربه‌ای نوین از خرید آنلاین با وب‌سایت ما وب‌سایت فروشگاهی ما با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    stack: [{ name: "javascript" }, { name: "React.js" }, { name: "Sass" }, { name: "Redux" }, { name: "Next.js" }],
    images: ["/image/header-2.png", "/image/main-26.png", "/image/main-223.png", "/image/cate.png", "/image/shop.png", "/image/productpage.png", "/image/panel.png", "/image/admin-21.png", "/image/about-shop.png", "/image/cantact.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "04",
    category: "باغ تالار پالادیوم",
    description: "با طراحی تعاملی و نقشه‌های ناوبری دقیق، دسترسی به بخش‌های مختلف باغ تالار ما آسان و سریع است. منوهای آکاردئونی ما تجربه کاربری شما را بهبود می‌بخشند و اطلاعات مورد نیاز را به شکلی منظم و زیبا ارائه می‌دهند. صفحه گالری ما نیز امکانات و زیبایی‌های باغ تالار را به شکلی کاربردی و جذاب به نمایش می‌گذارد.",
    stack: [{ name: "html 5" }, { name: "css 5" }, { name: "javascript" }, { name: "BootStrap" }, { name: "React.js" }],
    images: ["/image/header.png", "/image/main.png", "/image/main-2.png", "/image/slider.png", "/image/contact.png", "/image/map.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0"
  },
  {
    name: "05",
    category: " وب سایت شخصی خودم",
    description:
      "وب سایت شخصی خودم که برای ارائه خدمات و ثبت سفارش های کاربران ساخته شده که از تلنولوژی های روز استفاده شده",
    stack: [{ name: "framer-motion" }, { name: "Tailwind CSS" }, { name: "javascript" }, { name: "React" }, { name: "Next.js" }],
    images: ["/image/my-web.png", "/image/my-web-2.png", "/image/my-web-33.png"],
    live: "",
    github: "https://saeidrezaei.netlify.app",
  },
  {
    name: "06",
    category: "وب سایت اموزشی (ری اکت اپ)",
    description:
"وب سایت اموزشی و فروش دوره های اموزشی(react_app) جهت فروش دوره به صورت انلاین و دانلودی با کیفیتی عالی و تجربه کاربری راحت در اختیار مشتری",
    stack: [{ name: "javascript" }, { name: "React.js" }, { name: "Sass" }, { name: "Redux" }, { name: "Next.js" }],
    images: ["/image/educate_1 (2).png", "/image/educate_1 (1).png", "/image/educate_1 (3).png", "/image/educate_1 (4).png", "/image/educate_1 (5).png", "/image/educate_1 (6).png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
];
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Examplework() {
  const [autoplayDelay, setAutoplayDelay] = useState(500000);
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [discriptionitem, setdiscriptionitem] = useState(null);
  const [nameitem, setnameitem] = useState(null);
  const [showDescription, setShowDescription] = useState(false); // New state for description toggle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1516) {
        setAutoplayDelay(1700);
      } else {
        setAutoplayDelay(500000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageClick = (projectitem, idx) => {
    setSelectedImages(projectitem.images);
    setdiscriptionitem(projectitem.description);
    setnameitem(projectitem.category);
    setCurrentIndex(idx);
    setShowModal(true);
    setShowDescription(false); // Reset description to false when opening the modal
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

  return (
    <>
      <div className="title-feature overflow-hidden lg:pt-10 sm:p2 w-[90%] mx-auto">
        <div className="line ml-3"></div>
        <h3 className="text-white mt-[-0.6rem] gap-4 whitespace-nowrap font-bold py-8 text-2xl">
          نمونه کار های من
        </h3>
        <div className="line mr-3"></div>
      </div>
      <p className='pb-5 px-5 lg:pr-28 text-center lg:text-right lg:mt-[-1rem]'>
        جهت نمایش بقیه صفحات هر کدام اسلاید کنید
      </p>
      <p className='pb-5 px-5 lg:pr-28 text-center lg:text-right lg:mt-[-1rem]'>
        جهت بزرگ نمایی روی عکس کلیک کنید
      </p>
      <div className="lg:w-[90%] w-[98%] mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-center items-center lg:px-10 px-5">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
                navigation={true}
                loop={true}
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      onClick={() => handleImageClick(project, idx)}
                      src={image}
                      className="w-full rounded-md h-[20vh] lg:h-[30vh] object-fill"
                      alt={`Image ${idx + 1}`}
                      />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-center items-center lg:px-10 px-5 mt-7">
          {projects.slice(3).map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
                navigation={true}
                loop={true}
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      onClick={() => handleImageClick(project, idx)}
                      src={image}
                      className="w-full rounded-md h-[20vh] lg:h-[30vh] object-fill"
                      alt={`Image ${idx + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
    <div className="relative h-[100vh] w-screen md:w-[700px] flex justify-center items-center">
      {showDescription ? (
        <div className="bg-white text-black p-4 rounded-lg">
          <h2 className="text-xl pb-3 font-bold">{nameitem}</h2>
          <p>{discriptionitem}</p>
        </div>
      ) : (
        <Image
          src={selectedImages[currentIndex]}
          alt="Selected Image"
          fill
          className="object-contain rounded-lg"
        />
      )}
      <button
        className="absolute lg:top-36 top-52 right-4 text-accent text-lg bg-black p-2 rounded-full z-10"
        onClick={() => setShowModal(false)}
      >
        <MdCancel className="font-medium text-2xl text-tertiary-dark" />
      </button>
      {!showDescription ? ( // Only show buttons when showDescription is false
        <div className="flex gap-2 items-center justify-between absolute bottom-[38%] lg:bottom-40 left-0 right-0 px-4">
          <FaArrowRight
            onClick={handlePreviousImage}
            className="cursor-pointer text-white rounded-lg w-10 h-8 bg-black p-2"
            />
          <FaArrowLeft
            onClick={handleNextImage}
            className="cursor-pointer text-white rounded-lg w-10 h-8 bg-black p-2"
          />
        </div>
      ) : (
       null
      )}
      <button
        className="absolute top-52 lg:top-36 left-4 text-white bg-blue-600 p-2 rounded"
        onClick={toggleDescription}
      >
        {showDescription ? 'نمایش تصویر' : 'نمایش توضیحات'}
      </button>
    </div>
  </div>
)}




    </>
  );
}

export default Examplework;
