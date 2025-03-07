import { useEffect, useRef, useState } from "react";




export default function Eyes() {

  return (
    <div data-scroll data-scroll-speed="-.6" className="relative w-full h-screen bg-cover bg-[url('/playBg.png')]">
      <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Eye />
        <Eye />
      </div>
    </div>
  )
}


function Eye() {

  const [rotate, setRotate] = useState(0);
  const [rotateTwo, setRotateTwo] = useState(0);
  const eyeRef = useRef(null);

  
  function delta(ref, e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let deltaX = mouseX - rect.left;
      let deltaY = mouseY - rect.top;
      
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      return angle - 180;
    }
  }
  
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setRotate(delta(eyeRef, e));
      setRotateTwo(delta(eyeRef, e));
    })
  });
  
  
  return (
    <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-neutral-100 rounded-full relative">
      <div style={{ transform: `rotate(${rotateTwo}deg)` }} className="w-4/5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <div style={{ transform: `rotate(${-rotateTwo}deg)` }} className="w-[9vw] h-[9vw] relative bg-neutral-800 rounded-full">
          <div style={{ transform: `rotate(${rotate}deg)` }} className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] p-0.5">
            <div className="h-5 w-5 bg-neutral-100 rounded-full" />
          </div>
          <p ref={eyeRef} className="text-white font-Oswald text-2xl uppercase absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Play</p>
        </div>
      </div>
    </div>
  );
}

{/* <div ref={eyeRef} className="w-3/5 h-3/5 relative bg-neutral-800 rounded-full">
        <div style={{ transform: `rotate(${rotate}deg)` }} className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] p-0.5">
          <div className="h-5 w-5 bg-neutral-100 rounded-full" />
        </div>
        <p className="text-white font-Oswald text-2xl uppercase absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Play</p>
      </div> */}