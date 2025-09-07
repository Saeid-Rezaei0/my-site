"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  FaCalendar,
  FaClock,
  FaEye,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaBookOpen,
  FaHeart,
  FaShare,
  FaComment,
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink,
  FaBookmark,
  FaFire,
  FaHistory,
  FaThumbsUp,
  FaRegBookmark,
} from "react-icons/fa";

import { articles } from "@/components/DataArrays/AllData";
export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [articleData, setArticleData] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    // یافتن مقاله بر اساس slug
    const foundArticle = articles.find((article) => article.slug === slug);

    if (foundArticle) {
      setArticleData(foundArticle);

      // یافتن مقالات مرتبط (از همان دسته‌بندی)
      const related = articles
        .filter(
          (article) =>
            article.id !== foundArticle.id &&
            article.category === foundArticle.category
        )
        .slice(0, 4);

      setRelatedArticles(related);

      // مقالات پربازدید
      const popular = articles
        .filter((article) => article.id !== foundArticle.id)
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      setPopularArticles(popular);
    } else {
      // اگر مقاله پیدا نشد، به صفحه 404 هدایت شود
      router.push("/404");
    }
  }, [slug, router]);

  // نمایش loading تا زمانی که داده‌ها لود شوند
  if (!articleData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* دکمه منوی موبایل */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-slate-800/70 backdrop-blur-md rounded-lg text-cyan-400 border border-cyan-500/30"
        >
          {isMobileMenuOpen ? "بستن" : "منو"}
        </button>
      </div>

      {/* نوار برگشت */}
      <div className="mx-auto px-4 py-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FaArrowLeft className="ml-2" />
          بازگشت
        </button>
      </div>

      <div className="lg:px-10 mx-auto px-4 py-6 pb-12 flex flex-col lg:flex-row gap-8">
        {/* نوار کناری */}
        <aside
          className={`lg:w-1/4 order-2 lg:order-1 ${
            isMobileMenuOpen
              ? "block fixed inset-0 z-40 bg-slate-900 p-6 overflow-y-auto"
              : "hidden lg:block"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6 shadow-2xl shadow-cyan-500/10 mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaFire className="ml-2 text-rose-500" />
              مقالات پربازدید
            </h3>
            <div className="space-y-4">
              {popularArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors cursor-pointer"
                  onClick={() => {
                    router.push(`/Blog/${article.slug}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-md font-semibold text-white line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center mt-1 text-xs text-slate-400">
                      <FaEye className="ml-1" />
                      <span>{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-2xl shadow-purple-500/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaHistory className="ml-2 text-purple-400" />
              جدیدترین مقالات
            </h3>
            <div className="space-y-3">
              {articles.slice(0, 5).map((article) => (
                <div
                  key={article.id}
                  className="flex items-center p-2 rounded-lg hover:bg-slate-700/30 transition-colors cursor-pointer"
                  onClick={() => {
                    router.push(`/Blog/${article.slug}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full ml-2"></div>
                  <span className="text-sm text-slate-300 truncate">
                    {article.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* محتوای اصلی مقاله */}
        <main className="lg:w-3/4 w-full order-1 lg:order-2">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-4 md:p-6 lg:p-8 shadow-2xl shadow-cyan-500/10">
            {/* هدر مقاله */}
            <div className="mb-6 md:mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm flex items-center">
                  <FaTag className="ml-1" />
                  {articleData.category}
                </span>
                {articleData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm flex items-center"
                  >
                    <FaTag className="ml-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {articleData.title}
              </h1>

              <p className="text-base md:text-lg text-slate-300 mb-6">
                {articleData.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-slate-400 justify-end">
                <div className="flex items-center flex-row-reverse">
                  <FaUser className="mr-1" />
                  <span>{articleData.author}</span>
                </div>
                <div className="flex items-center flex-row-reverse">
                  <FaCalendar className="mr-1" />
                  <span>{articleData.date}</span>
                </div>
                <div className="flex items-center flex-row-reverse">
                  <FaClock className="mr-1" />
                  <span>{articleData.readTime} مطالعه</span>
                </div>
                <div className="flex items-center flex-row-reverse">
                  <FaEye className="mr-1" />
                  <span>{articleData.views.toLocaleString()} بازدید</span>
                </div>
              </div>
            </div>

            {/* تصویر مقاله */}
            <div className="mb-6 md:mb-8 rounded-xl overflow-hidden">
              <img
                src={articleData.image}
                alt={articleData.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* محتوای مقاله */}
            <article
              className="prose prose-sm md:prose-lg prose-invert max-w-none mb-6 md:mb-8 text-right"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            />

            {/* تعاملات */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 border-t border-slate-700/50 gap-4">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors flex-row-reverse ${
                    isLiked
                      ? "bg-rose-500/20 text-rose-400"
                      : "bg-slate-700/50 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {isLiked ? (
                    <FaThumbsUp className="text-rose-400" />
                  ) : (
                    <FaHeart />
                  )}
                  <span>۱۲۵</span>
                </button>

                <button className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-slate-700 transition-colors flex-row-reverse">
                  <FaComment />
                  <span>نظر دهید</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors flex-row-reverse ${
                    isBookmarked
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-slate-700/50 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {isBookmarked ? (
                    <FaBookmark className="text-cyan-400" />
                  ) : (
                    <FaRegBookmark />
                  )}
                  <span>ذخیره</span>
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <div className="flex gap-1 md:gap-2">
                  <button className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:bg-slate-700 transition-colors">
                    <FaFacebook />
                  </button>
                  <button className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:bg-slate-700 transition-colors">
                    <FaTwitter />
                  </button>
                  <button className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:bg-slate-700 transition-colors">
                    <FaLinkedin />
                  </button>
                  <button className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:bg-slate-700 transition-colors">
                    <FaLink />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-slate-700 transition-colors">
                  <FaShare />
                  <span>اشتراک گذاری</span>
                </button>
              </div>
            </div>

            {/* مقالات مرتبط */}
            {relatedArticles.length > 0 && (
              <div className="pt-6 md:pt-8 border-t border-slate-700/50">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                  <FaChevronRight className="ml-1 text-cyan-400" />
                  مقالات مرتبط
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {relatedArticles.map((article) => (
                    <div
                      key={article.id}
                      className="bg-slate-800/30 rounded-xl p-3 md:p-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors cursor-pointer group"
                      onClick={() => router.push(`/Blog/${article.slug}`)}
                    >
                      <div className="mb-3 md:mb-4 rounded-lg overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs md:text-sm text-slate-500">
                        <span>{article.date}</span>
                        <span className="flex items-center">
                          <FaClock className="ml-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .prose h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }

        .prose h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #e2e8f0;
        }

        .prose p {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #cbd5e1;
        }

        .prose ul,
        .prose ol {
          margin-bottom: 1rem;
          padding-right: 1.5rem;
          color: #cbd5e1;
        }

        .prose li {
          margin-bottom: 0.5rem;
        }

        .prose pre {
          background-color: #1e293b;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1rem;
        }

        .prose code {
          background-color: #334155;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }

        .prose pre code {
          background-color: transparent;
          padding: 0;
          border-radius: 0;
        }

        .prose-invert {
          color: #cbd5e1;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .prose {
            font-size: 0.9rem;
          }

          .prose h2 {
            font-size: 1.3rem;
          }

          .prose h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
