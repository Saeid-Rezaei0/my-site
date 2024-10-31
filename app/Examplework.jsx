import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// اضافه کردن ماژول‌های Swiper
SwiperCore.use([Autoplay, Pagination, Navigation]);
const projects = [
  {
    name: "01",
    category: "باغ تالار پالادیوم",
    description: "با طراحی تعاملی و نقشه‌های ناوبری دقیق، دسترسی به بخش‌های مختلف باغ تالار ما آسان و سریع است. منوهای آکاردئونی ما تجربه کاربری شما را بهبود می‌بخشند و اطلاعات مورد نیاز را به شکلی منظم و زیبا ارائه می‌دهند. صفحه گالری ما نیز امکانات و زیبایی‌های باغ تالار را به شکلی کاربردی و جذاب به نمایش می‌گذارد.",
    stack: [{ name: "html 5" }, { name: "css 5" }, { name: "javascript" }, { name: "BootStrap" }, { name: "React.js" }],
    images: ["/image/header.png", "/image/main.png", "/image/main-2.png", "/image/slider.png", "/image/contact.png", "/image/map.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  }, {
    name: "01",
    category: "باغ تالار پالادیوم",
    description: "با طراحی تعاملی و نقشه‌های ناوبری دقیق، دسترسی به بخش‌های مختلف باغ تالار ما آسان و سریع است. منوهای آکاردئونی ما تجربه کاربری شما را بهبود می‌بخشند و اطلاعات مورد نیاز را به شکلی منظم و زیبا ارائه می‌دهند. صفحه گالری ما نیز امکانات و زیبایی‌های باغ تالار را به شکلی کاربردی و جذاب به نمایش می‌گذارد.",
    stack: [{ name: "html 5" }, { name: "css 5" }, { name: "javascript" }, { name: "BootStrap" }, { name: "React.js" }],
    images: ["/image/header.png", "/image/main.png", "/image/main-2.png", "/image/slider.png", "/image/contact.png", "/image/map.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "02",
    category: "وب سایت فروشگاهی",
    description:
      "تجربه‌ای نوین از خرید آنلاین با وب‌سایت ما وب‌سایت فروشگاهی ما با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    stack: [{ name: "javascript" }, { name: "React,js" }, { name: "Sass" }, { name: "Redux" }, { name: "Next,js , Sql" },],
    images: ["/image/set_cofef.png", "/image/main-26.png", "/image/main-223.png", "/image/cate.png", "/image/shop.png", "/image/productpage.png", "/image/panel.png", "/image/admin-21.png", "/image/about-shop.png", "/image/cantact.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "03",
    category: "وب سایت فروشگاهی",
    description:
      "تجربه‌ای نوین از خرید آنلاین با وب‌سایت ما وب‌سایت فروشگاهی ما با طراحی تعاملی و امکانات پیشرفته، تجربه خرید آنلاین شما را به سطح جدیدی ارتقا می‌دهد. با قابلیت جستجوی پیشرفته، به راحتی محصولات مورد نظر خود را پیدا کنید و با چت آنلاین، از پشتیبانی فوری و مؤثر بهره‌مند شوید. طراحی کاربرپسند ما، خریدی سریع و راحت را برای شما به ارمغان می‌آورد.",
    stack: [{ name: "javascript" }, { name: "React,js" }, { name: "Sass" }, { name: "Redux" }, { name: "Next,js , Sql" },],
    images: ["/image/headershop.png", "/image/main-26.png", "/image/main-223.png", "/image/cate.png", "/image/shop.png", "/image/productpage.png", "/image/panel.png", "/image/admin-21.png", "/image/about-shop.png", "/image/cantact.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
  },
  {
    name: "04",
    category: " وب سایت  فروش انلاین ساعت",
    description: "در این وب‌سایت فروش ساعت، با مجموعه‌ای متنوع از ساعت‌های لوکس، اسپرت و کلاسیک، هر سلیقه‌ای پوشش داده شده است. امکانات جستجوی پیشرفته به شما کمک می‌کند تا به‌راحتی ساعت مورد نظر خود را پیدا کنید. با پشتیبانی 24 ساعته و چت آنلاین، سوالات شما در سریع‌ترین زمان پاسخ داده می‌شود. طراحی مدرن این وب‌سایت، خرید را برای شما آسان و لذت‌بخش می‌کند",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "javascript" }, { name: "BootStrap" }, { name: "Map-online" }],
    images: [ "/image/watch.png", "/image/watch3.png",  "/image/watch11.png", "/image/watch417.png", "/image/watch67.png", "/image/watch13221.png", "/image/watch881.png"],
    live: "",
    github: "https://github.com/Saeid-Rezaei0",
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

];
function Examplework() {
  return (
    <>
      <div className="title-feature overflow-hidden lg:pt-10 sm:p2 w-[90%] mx-auto">
        <div className="line ml-3"></div>
        <h3 className="text-white mt-[-0.6rem] gap-4 whitespace-nowrap font-bold py-8 text-2xl">
          نمونه کار های من
        </h3>
        <div className="line mr-3"></div>
      </div>

      <div className="lg:w-[90%] w-[98%] mx-auto">
        {/* بخش پروژه‌های بالا */}
        <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-center items-center lg:px-10 px-5">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true} // فعال کردن ناوبری
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                {project.images.map((image, idx) => (
                 <>
                  <SwiperSlide key={idx}>
                  <img src={image} className="w-full rounded-md sm:h-auto md:h-auto lg:h-[30vh] object-fill " alt={`Image ${idx + 1}`} />
                  </SwiperSlide>
                 </>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        {/* بخش پروژه‌های پایین */}
        <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-center items-center lg:px-10 px-5 mt-7">
          {projects.slice(3).map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
            >
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true} // فعال کردن ناوبری
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                  <img src={image} className="w-full rounded-md sm:h-auto md:h-auto lg:h-[30vh] object-fill " alt={`Image ${idx + 1}`} />
                
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Examplework;
