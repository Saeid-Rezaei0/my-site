import { FaBookOpen, FaFilter, FaUser, FaCalendarAlt, FaEye, FaShareAlt, FaArrowLeft, FaHeart, FaRegHeart, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function AllArticleComponent({ filteredArticles, activeCategory }) {
  const [savedArticles, setSavedArticles] = useState([]);
  
  console.log("Received articles:", filteredArticles);
  console.log("Type of filteredArticles:", typeof filteredArticles);

  // اگر filteredArticles آرایه نباشد، آن را به آرایه تبدیل کنید یا مقدار پیش فرض تعیین کنید
  const articlesArray = Array.isArray(filteredArticles) ? filteredArticles : [];
  
  const toggleSaveArticle = (articleId) => {
    if (savedArticles.includes(articleId)) {
      setSavedArticles(savedArticles.filter(id => id !== articleId));
    } else {
      setSavedArticles([...savedArticles, articleId]);
    }
  };

  return (
    <section className="py-16 bg-slate-900/50" id="result">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-1xl md:text-2xl font-bold text-white flex items-center">
            <FaBookOpen className="ml-2 text-cyan-400" />
            {activeCategory === "همه مقالات"
              ? " مقالات"
              : `مقالات ${activeCategory}`}
          </h2>

          <div className="text-slate-400 text-sm flex items-center">
            <FaFilter className="ml-1" />
            مرتب‌سازی بر اساس:
            <select className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1 text-white mr-2">
              <option>جدیدترین</option>
              <option>پربازدیدترین</option>
              <option>محبوب‌ترین</option>
            </select>
          </div>
        </div>

        {articlesArray.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-slate-400 text-lg">مقاله‌ای یافت نشد.</p>
            <button
              onClick={() => {
                // این توابع باید از طریق props دریافت شوند
                console.log("بازنشانی فیلترها کلیک شد");
              }}
              className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              بازنشانی فیلترها
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesArray.map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-1 h-full flex flex-col group"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/default-image.png"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">
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

                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-slate-400 mb-3">
                    <span className="flex items-center ml-4">
                      <FaUser className="ml-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="ml-1" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-800/30 border-t border-slate-700/50 flex justify-between items-center">
                  <Link
                    href={`/Blog/${article.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                  >
                    مطالعه مقاله
                    <FaArrowLeft className="mr-1 text-sm group-hover:-translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <FaEye className="ml-1" />
                      {article.views.toLocaleString()}
                    </div>
                    <button className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* دکمه مشاهده بیشتر */}
        {articlesArray.length > 5 && (
          <Link href="/Articles">
            <div className="text-center mt-16">
              <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium flex items-center justify-center gap-2 mx-auto shadow-lg shadow-cyan-600/30">
                <FaChartLine />
                مشاهده مقالات بیشتر
              </button>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}

export default AllArticleComponent;