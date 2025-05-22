/* eslint-disable no-unused-vars */
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: { opacity: 0, pathLength: 0, fill: "rgba(252, 211, 77, 0)" },
  visible: { opacity: 1, pathLength: 1, fill: "rgba(252, 211, 77, 1)" },
};

const App = () => {
  const ref = useRef(null);
  const completionProgress = useScroll();

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden h-[120vh]">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade In */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-7"
        >
          <motion.div
            className="w-16 aspect-square bg-white rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          ></motion.div>
          <motion.div
            className="w-16 h-16 bg-white rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          ></motion.div>
        </motion.div>

        {/* Shape Shift */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div
            className="h-1/3 w-1/3 bg-rose-400"
            animate={{
              scale: [0, 1, 2, 1, 0],
              rotate: [0, 90, 180, 90, 0],
              borderRadius: ["50%", "10%", "50%", "10%", "50%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          ></motion.div>
        </motion.div>

        {/* Button animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.button
            className="bg-emerald-500 w-1/2 py-3 rounded-xl text-gray-100 tracking-wide"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              background: "#F3F4F6",
              color: "#12B981",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            Click Me
          </motion.button>
        </motion.div>

        {/* Dragging */}
        <motion.div
          ref={ref}
          variants={gridSquareVariants}
          className="overflow-hidden bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div
            className="aspect-square w-1/3 cursor-grab rounded-lg bg-yellow-300"
            drag={true}
            dragConstraints={ref}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 100 }}
          ></motion.div>
        </motion.div>

        {/* Scroll Progress */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div className="w-32 aspect-square bg-gray-50/20 rounded-lg overflow-hidden">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress.scrollYProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Svg Animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeIn", delay: 0 },
                fill: { duration: 2, ease: "easeIn", delay: 2, repeat: Infinity },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default App;
