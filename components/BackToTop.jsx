"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  const backtotophandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`${
        show ? "lg:flex box-shadow" : "hidden"
      }       fixed bottom-10 left-5 mx-1`}
      dir="ltr"
      onClick={backtotophandler}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-50"
        aria-label="بازگشت به بالا"
      >
        <FaArrowLeft className="transform rotate-90" />
      </button>
    </div>
  );
}

export default BackToTop;
