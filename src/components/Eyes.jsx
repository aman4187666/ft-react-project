import React, { useEffect, useState } from 'react'

const Eyes = () => {


    // --here i find the location of x,and y and and find there andle  and set in rotate .

const [rotate , setRotate] =useState(0);

useEffect(() =>{
    window.addEventListener("mousemove",(elem) => {
     let mouseX =  elem.clientX 
     let mouseY =  elem.clientY

     let deltaX = mouseX - window.innerWidth/2;
     let deltaY = mouseY - window.innerHeight/2;

     var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);     // find angle with this formula
     setRotate(angle-180);
     


    }); 
});



  return (
    <div className='eyespage w-full h-screen  bg-[#f2f2f2] overflow-hidden  ' >

{/* --background image */}

        <div data-scroll data-scroll-speed="-.9" className='  relative  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center px-14  w-full h-screen '  >
           <div className=' absolute gap-10  flex   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ' >

{/* --first eye */}

                 <div className='circle1 h-[13vw] w-[13vw] bg-white rounded-full flex items-center justify-center ' >
                     <div className="circle2 h-[8.0vw] w-[8.0vw] bg-black rounded-full  relative  ">

                        {/* --in below code find the angle data in degree for rotation */}
                        <div style={{transform:`translate(-50%, -50%  ) rotate(${rotate}deg) `}} className='line h-5 w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden  ' >
                            <div className='circle3 h-[1.3vw] w-[1.3vw] bg-white rounded-full  ' ></div>
                        </div>
                              </div>
                 </div>

{/* --second eye */}
                  <div className='circle1 h-[13vw] w-[13vw] bg-white rounded-full flex items-center justify-center ' >
                        <div className="circle2 relative h-[8.0vw] w-[8.0vw] bg-black rounded-full  flex justify-center items-center  ">
                            <div style={{transform:`translate(-50%, -50%  ) rotate(${rotate}deg) `}} className='line h-5 w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden  ' >
                            <div className='circle3 h-[1.3vw] w-[1.3vw] bg-white rounded-full  ' ></div>
                        </div>
                               </div>
                  </div>

           </div>

          
        </div>
     </div> 
  )
}

export default Eyes 