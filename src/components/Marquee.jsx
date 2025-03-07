import { motion } from "motion/react"





export default function Marquee() {
  
  return (
    <div data-scroll data-scroll-speed="-.1" className="w-full bg-[#004d43] py-28 rounded-tr-3xl rounded-tl-3xl relative z-30 top-22">
      <div className="text border-t-[1px] border-b-[1px] border-white flex whitespace-nowrap text-white overflow-hidden">
        <motion.h1 
          initial={{translateX: 0}}
          animate={{translateX: '-100%'}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="text-[20vw] font-bold leading-none font-Oswald uppercase -mt-8"
        >
          we are ochi we are ochi&nbsp;
        </motion.h1>
        <motion.h1 
          initial={{translateX: 0}}
          animate={{translateX: '-100%'}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="text-[20vw] font-bold leading-none font-Oswald uppercase -mt-8"
        >
          we are ochi we are ochi&nbsp;
        </motion.h1>
        
      </div>
    </div>
  )
}