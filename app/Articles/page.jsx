"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaFilter,
  FaTimes,
  FaStar,
  FaFire,
  FaRocket,
  FaTags,
  FaBook,
  FaFolderOpen,
  FaUserEdit,
  FaChevronDown,
  FaFileMedicalAlt,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { SearchIcon } from "lucide-react";
import { articles } from "@/components/DataArrays/AllData";
import Newsletter from "@/components/Newsletter";
import FooterArticle from "@/components/FooterArticle";
import AllArticleComponetnt from "@/components/AllArticleComponetnt";
// داده‌های نمونه
const categories = [
  "همه مقالات",
  "سئو",
  "فرانت‌اند",
  "بک‌اند",
  "امنیت",
  "DevOps",
  "برنامه‌نویسی",
  "هوش مصنوعی",
  "برنامه نویسی موبایل",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("همه مقالات");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const [IsArticlePage, setIsArticlePage] = useState(false);

  useEffect(() => {
    // بررسی اگر مسیر شامل /Examplework باشد
    if (pathname.includes("/Articles")) {
      setIsArticlePage(true);
    } else {
      setIsArticlePage(false);
    }
  }, [pathname]);
  const allData = IsArticlePage ? articles : articles.slice(0, 6);

  // فیلتر مقالات بر اساس دسته‌بندی و جستجو
  const filteredArticles = allData.filter((article) => {
    const matchesCategory =
      activeCategory === "همه مقالات" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((article) => article.featured);

  const toggleSaveArticle = (articleId) => {
    if (savedArticles.includes(articleId)) {
      setSavedArticles(savedArticles.filter((id) => id !== articleId));
    } else {
      setSavedArticles([...savedArticles, articleId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* هدر صفحه */}
      <header className="relative py-6 overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900/80 to-slate-900 border-b border-slate-700/30">
        <div className="absolute inset-0 bg-grid-pattern z-0 opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* عنوان و توضیحات */}
            <div className="mb-10">
              <div className="inline-flex items-center justify-center bg-slate-700/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-600/30 mb-6">
                <FaBook className="text-cyan-400 ml-2" />
                <span className="text-cyan-100 text-sm font-medium">
                  وبلاگ تخصصی توسعه وب
                </span>
              </div>

              <h1 className="text-4xl md:text-4xl font-bold text-white mb-5">
                <span className="text-cyan-400">مقالات</span> تخصصی
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  برنامه نویسی
                </span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                جدیدترین مقالات و آموزش‌های مربوط به
                <span className="text-cyan-300 px-1 font-medium">
                  {" "}
                  برنامه نویسی , طراحی سایت , هوش مصنوعی ,  امنیت  (هک),
                </span>
                و بهترین روش‌های توسعه وب
              </p>
            </div>

            {/* جستجو */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                <FaSearch className="text-slate-400 text-lg" />
              </div>
              <input
                type="text"
                placeholder="جستجو در مقالات بر اساس عنوان، تگ یا محتوا..."
                className="w-full py-4 pr-14 pl-6 rounded-2xl bg-slate-700/50 backdrop-blur-md border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/30 shadow-lg transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <a href="#result">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon className="text-slate-500 text-sm" />
                </div>
              </a>
            </div>

            {/* آمار */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 shadow-inner">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaFileMedicalAlt className="text-cyan-400 text-xl" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp start={0} end={articles.length} duration={2} />
                    {}+
                  </div>
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  مقاله منتشر شده
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaEye className="text-blue-400 text-xl" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp start={0} end={5638} duration={2} />
                    {}
                  </div>
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  بازدید کل
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaFolderOpen className="text-purple-400 text-xl" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {categories.length - 1}
                  </div>
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  دسته‌بندی
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaUserEdit className="text-green-400 text-xl" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {new Set(articles.map((article) => article.author)).size}+
                  </div>
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  نویسنده
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* دکمه اسکرول به پایین */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <FaChevronDown className="text-slate-400 text-xl" />
          </div>
        </div>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
              );
            background-size: 40px 40px;
          }
        `}</style>
      </header>

      {/* دسته‌بندی‌ها */}
      <section className="py-8 bg-slate-800/80 backdrop-blur-md sticky top-0 z-20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-white flex items-center">
              <FaTags className="ml-2 text-cyan-400" />
              دسته‌بندی‌ها
            </h2>

            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg"
            >
              {isFilterOpen ? <FaTimes /> : <FaFilter />}
              فیلتر
            </button>

            <div
              className={`flex flex-wrap gap-2 justify-center ${
                isFilterOpen ? "flex" : "hidden md:flex"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all flex items-center ${
                    activeCategory === category
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                      : "bg-slate-700/50 text-slate-300 hover:bg-slate-700/80"
                  }`}
                >
                  {activeCategory === category && (
                    <FaStar className="ml-1 text-sm" />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* مقالات برتر (اسلایدر) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-cyan-500 flex-1"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <FaFire className="ml-2 text-rose-500" />
              مقالات برتر
            </h2>
            <div className="h-px bg-gradient-to-l from-transparent to-cyan-500 flex-1"></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-slate-600 opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-cyan-500 !opacity-100",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 relative"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10 transition-transform duration-500 hover:shadow-cyan-500/20 hover:-translate-y-2 h-full">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <FaRocket className="ml-1" />
                      {article.category}
                    </div>
                    <button
                      onClick={() => toggleSaveArticle(article.id)}
                      className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-full shadow-md text-slate-300 hover:text-rose-500 transition-colors"
                    >
                      {savedArticles.includes(article.id) ? (
                        <FaHeart className="text-rose-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-400 mb-3">
                      <span className="flex items-center ml-4">
                        <FaCalendarAlt className="ml-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="ml-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/Blog/${article.slug}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                      >
                        مطالعه مقاله
                        <FaArrowLeft className="mr-1 group-hover:-translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex items-center text-sm text-slate-400">
                        <FaEye className="ml-1" />
                        {article.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev !text-cyan-500 after:!text-xl !hidden md:!flex"></div>
            <div className="swiper-button-next !text-cyan-500 after:!text-xl !hidden md:!flex"></div>
          </Swiper>
        </div>
      </section>

      {/* همه مقالات */}
      <AllArticleComponetnt
        filteredArticles={filteredArticles}
        activeCategory={activeCategory}
      />

      {/* خبرنامه */}
      <Newsletter />

      {/* فوتر */}
      <FooterArticle articles={articles} />
    </div>
  );
}
