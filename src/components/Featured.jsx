import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";





export default function Featured() {

  return (
    <div id="ourwork" data-scroll data-scroll-speed=".1" className="w-full py-10 bg-neutral-900 rounded-tr-3xl rounded-tl-3xl">

      <div className="w-full px-20 pt-20 border-b-[1px] border-neutral-700 pb-12">
        <h1 className="text-6xl text-white font-light">Featured projects</h1>
      </div>

      <Cards text1="Salience Labs" text2="Cardboard Spaceship" image1="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" image2="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" />

      <Cards text1="Fyde" text2="Trawa" image1="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" image2="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" />
    </div>
  )
}

function Cards({ text1, text2, image1, image2 }) {

  const [heading, setHeading] = useState('');

  return (
    <div className="w-full flex gap-8 px-20 py-20 relative">
      <div className="pointer-events-none text-8xl h-32 text-[#cdeb69] overflow-hidden font-bold font-Oswald absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">

        <AnimatePresence mode="wait">

          {heading.split("").map((l, i) => (
            <motion.span
              key={`${heading}${i}`}
              initial={{ y: '120%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                ease: 'anticipate',
                delay: 0.025 * i
              }}
              exit={{ y: "-100%" }}

              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}

        </AnimatePresence>

      </div>

      <Card setHeading={setHeading} text={text1} image={image1} />
      <Card setHeading={setHeading} text={text2} image={image2} />


    </div >
  );
}

function Card({ setHeading, text, image }) {
  return (
    <motion.div
      onHoverStart={() => setHeading(text)}
      onHoverEnd={() => setHeading('')}
      className="w-1/2"
    >
      <div className="flex gap-4 items-center">
        <div className="h-3 w-3 bg-white rounded-full" />
        <p className="text-white text-lg uppercase">{text}</p>
      </div>

      <motion.div
        whileHover={{
          scale: 0.95
        }}
        transition={{
          duration: 0.3
        }}
        className="w-full h-[75vh] bg-neutral-700 rounded-xl mt-6 overflow-hidden"
      >
        <motion.img
          whileHover={{
            scale: 1.1
          }}
          transition={{
            duration: 0.5
          }}
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}