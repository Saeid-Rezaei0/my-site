import {
  FaArrowLeft,
  FaEye,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
function FooterArticle({ articles }) {
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
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h3 className="font-semibold text-lg mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex gap-4">
                <a
                  href="https://t.me/S_Rezaei00"
                  className="social-icon"
                  aria-label="Telegram" // تغییر به Telegram
                  target="_blank" // اضافه کردن برای باز شدن در تب جدید
                  rel="noopener noreferrer" // برای امنیت
                >
                  <FaTelegram size={24} />
                </a>{" "}
                <a
                  href="https://github.com/Saeid-Rezaei0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700/50 hover:bg-purple-500/20 p-3 rounded-xl transition-all duration-300 border border-slate-600 hover:border-purple-400"
                >
                  <FaGithub className="text-2xl text-purple-400" />
                </a>
                <a
                  href="https://ir.linkedin.com/in/saeid-rezaei-9a471636a"
                  className="social-icon"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/saeid_rezai0/"
                  className="social-icon"
                  aria-label="Instagram Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
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
                  href="/Articles"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  مقالات
                </Link>
              </li>
              <li>
                <Link
                  href="/Examplework"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  پروژه‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/Resume"
                  className="hover:text-cyan-400 transition-colors flex items-center"
                >
                  <FaArrowLeft className="ml-1 text-xs" />
                  درباره من
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
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
      </div>
    </footer>
  );
}

export default FooterArticle;
