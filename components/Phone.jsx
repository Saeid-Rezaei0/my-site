"use client";
import { motion } from "framer-motion";
import Image from "next/image";
function Phone() {
  return (
    <div className="w-full h-full relative">
      {/* img */}
      <motion.div>
        <motion.div className="w-[298px] h-[298px] lg:w-[495px] mt-2 lg:h-[400px] mix-blend-lighten absolute">
          <Image
            src="/IMG_20250806_101129_872.jpg"
            property=" quakity={200}"
            fill
            alt="phone"
            className="object-contain rounded-full  lg:mt-10 "
          />
        </motion.div>
        <motion.svg
          className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#90e0ef"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 50 25", "16 55 92 72", "15 250 42 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Phone;
