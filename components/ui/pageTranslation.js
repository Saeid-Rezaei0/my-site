"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTranslation({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
}

export default PageTranslation;


















// "use client"
// import { AnimatePresence, motion } from "framer-motion"
// import { useParams } from "next/navigation"
// function pageTranslation({ children }) {
//   const pathname = useParams()
//   return (
//     <AnimatePresence>
//       <div className="" key={pathname}>
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{
//             opacity: 0,
//             transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
//           }}
//           className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
//         />
//       </div>
//       {children}
//     </AnimatePresence>
//   )
// }

// export default pageTranslation