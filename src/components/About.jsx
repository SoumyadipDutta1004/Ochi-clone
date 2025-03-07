import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";



export default function About() {

  const [isHover, setIsHover] = useState(false);

  return (
    <div id="aboutus" className="bg-[#004d43] w-full relative z-30">

      <div className="w-full px-20 bg-[#cdeb69] border-b-[1px] border-neutral-600 rounded-tr-3xl rounded-tl-3xl text-black">
        <h1 className="pt-32 pb-18 font-normal max-w-[80vw] text-6xl font-Oswald tracking-wide">
          Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds, sell products, explain complex ideas,</span> and <span className="underline">hire great people.</span>
        </h1>
      </div>

      <div className="flex justify-between w-full bg-[#cdeb69] px-20 pt-4 pb-10">

        <div className="">
          <h2 className="text-6xl">Our approach:</h2>

          <motion.button
            onHoverStart={() => { setIsHover(true) }}
            onHoverEnd={() => { setIsHover(false) }}
            whileHover="hover"
            className="group flex items-center gap-10 uppercase px-6.5 py-4 bg-[#212121] rounded-full text-white text-[16px] mt-6 cursor-pointer"
          >
            Read more
            <motion.div
              variants={{
                hover: { scale: 5 }
              }}
              transition={{ duration: 0.3 }}
              className="w-2 h-2 bg-white rounded-full flex justify-center items-center"
            >
              <AnimatePresence>
                {isHover && <motion.div exit={{scale: 0, opacity: 0}} className="scale-25 text-black flex justify-center items-center -rotate-135">
                  <FaArrowDownLong />
                </motion.div>}
              </AnimatePresence>
            </motion.div>
          </motion.button>

        </div>

        <div>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" width={789} className="rounded-2xl" />
        </div>
      </div>

    </div>
  )
}