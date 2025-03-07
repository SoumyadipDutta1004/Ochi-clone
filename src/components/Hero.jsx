import { motion } from "motion/react";
import { FaArrowDownLong } from "react-icons/fa6";



export default function Hero() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-screen p-1 bg-neutral-900">

      <IterateHeading />
      <BottomArea />
      <SiteOfTheDay />

    </div>
  )
}


function IterateHeading() {
  return (
    <div className="px-20 mt-40">
      {['We create', 'eye-opening', 'presentations'].map((item, i) => {
        return (
          <div key={i} className="flex items-center marker">

            {i === 1 && <motion.div
              initial={{
                width: 0
              }}
              animate={{
                width: '9vw'
              }}
              transition={{
                duration: 1,
                ease: [0.86, 0, 0.07, 1],
                delay: 1
              }}
              className="w-[9vw] h-[6.5vw] origin-left rounded-lg relative top-1.5 overflow-hidden">
              <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" className="w-full h-full object-cover" />
            </motion.div>}

            <h1
              key={i}
              className="text-[8vw] font-bold uppercase leading-[7.5vw] tracking-tight text-white font-Oswald"
            >
              {item}
            </h1>
          </div>
        );
      })}
    </div>
  )
}


function Button({ text }) {
  return (
    <button
      className={`${typeof text !== 'string' ? '-rotate-135 p-2' : 'px-3 py-1'} group-hover:bg-neutral-400 group-hover:text-neutral-950 duration-200 ease-in uppercase cursor-pointer rounded-full border-[2px] border-neutral-400`}
    >
      {text}
    </button>
  );
}


function BottomArea() {
  return (
    <div className="border-t-[1px] border-neutral-700 mt-32 flex justify-between items-center px-20 py-6 text-white">
      {['For public and private companies', 'From the first pitch to IPO'].map((item, i) => {
        return <p key={i} className="text-lg font-light leading-none tracking-tighter">
          {item}
        </p>;
      })}
      <div className="flex items-center gap-2 group">
        <Button text="start the project" />
        <Button text={<FaArrowDownLong />} />

      </div>
    </div>
  );
}


function SiteOfTheDay() {
  return (
    <div className="absolute top-56 right-7.5 p-4 origin-right flex items-center justify-between text-white -rotate-90 bg-red-500 h-15">
      <div className="font-medium flex items-center justify-between gap-2">Site of the day. <p className="text-xl font-bold rotate-90">W.</p></div>
    </div>
  );
}