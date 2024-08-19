import { motion } from "framer-motion";
function Stairs() {
    const stairAnimation = {
        initial : {
            top: "0%"
        },
        animate: {
            top: "100%"
        },
        exit: {
            top: ["100%", "0%"]
        }
    }
    const reversIndex = (index) => {
        const totalStepe = 6;
        return totalStepe - index  - 1 
    }
  return (
    <>
    {[...Array(6)].map((_, index)=> {
      return  <motion.div key={index} variants={stairAnimation} initial="initial" 
        animate="animate" exit="exit"  transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: reversIndex(index) * 0.1,
        }} 
        className="h-full w-full bg-white relative"
        />
    })}
    </>
  )
}

export default Stairs