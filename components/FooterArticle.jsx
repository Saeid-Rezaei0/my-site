import { FaArrowLeft, FaEye, FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
function FooterArticle({articles}) {
  return (
    <footer className="bg-slate-800/80 backdrop-blur-md text-white py-16 border-t border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              درباره بلاگ تخصصی
            </h3>
            <p className="text-slate-300 mb-6">
              این بلاگ به اشتراک‌گذاری دانش و تجربیات در زمینه توسعه فرانت‌اند،
              تکنولوژی‌های وب و بهترین روش‌های برنامه‌نویسی می‌پردازد.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-slate-700/50 rounded-lg"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-slate-700/50 rounded-lg"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-slate-700/50 rounded-lg"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2 bg-slate-700/50 rounded-lg"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">
              دسترسی سریع
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  مقالات
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  پروژه‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  درباره من
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  تماس با من
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">تماس با من</h3>
            <address className="not-italic text-slate-300">
              <p className="mb-2">ایمیل: saeid.rezaei695@gmail.com</p>
              <p className="mb-4">تلفن: 09388449181 </p>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FaEye className="ml-1" />
                <span>
                  تعداد بازدیدها:{" "}
                  {articles
                    .reduce((sum, article) => sum + article.views, 0)
                    .toLocaleString()}
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center text-slate-400">
          <p>© ۱۴۰۲ - تمام حقوق محفوظ است. طراحی و توسعه با ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterArticle;
