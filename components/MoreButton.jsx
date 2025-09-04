import Link from "next/link";
import { FaEye, FaArrowLeft } from "react-icons/fa";

const MoreButton = () => {
  return (
    <Link
      href="/Examplework"
      className="group relative mt-10 mr-3 inline-flex items-center justify-center px-6 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
    >
      <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-700 rounded-full group-hover:mt-0 group-hover:ml-0 opacity-90"></span>

      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>

      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out delay-100 bg-cyan-800 rounded-full opacity-0 group-hover:opacity-100"></span>

      <span className="relative flex items-center gap-2">
        <FaEye className="text-lg transition-transform duration-300 group-hover:scale-110" />
        مشاهده نمونه کارهای بیشتر
        <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default MoreButton;
