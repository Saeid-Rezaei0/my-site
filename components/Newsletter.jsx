import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 z-0"></div>
      <div className="absolute inset-0 bg-dots-pattern z-0 opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <FaEnvelope className="ml-2 text-cyan-400" />
              عضویت در خبرنامه
            </h2>
            <p className="text-slate-300 mb-8">
              با عضویت در خبرنامه، از جدیدترین مقالات و آموزش‌ها به صورت رایگان
              با خبر شوید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="آدرس ایمیل شما"
                className="flex-grow py-3 px-6 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-600/30">
                عضویت
              </button>
            </div>

            <p className="text-slate-400 text-sm mt-4">
              ما هرگز ایمیل شما را با شخص دیگری به اشتراک نمی‌گذاریم.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dots-pattern {
          background-image: radial-gradient(
            circle,
            #ffffff 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}

export default Newsletter;
