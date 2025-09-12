import { motion } from 'framer-motion';
import React from 'react'



// ------------------------------i use here the motion but i don't know why it not work  see and ask in future to someone about it------------


const Marqueepage = () => {
   
  return (
    <div data-scroll data-scroll-speed=".2" className=' bg-teal-900 py-20 text-white w-full mr-10  rounded-t-3xl  ' >
        <motion.div className='marquetext  border-t-[1px] border-b-[1px] flex     text-2xl border-white/40 whitespace-nowrap overflow-hidden gap-5   ' >

         <h1
         initial={{x:"0"}} 
         animate={{x:"-100%"}}
         transition={{repeat: Infinity, ease:"linear" ,duration:6 }}
         className='text-[17.6vw] leading-none tracking-tighter font-semibold font-["Founders_Grotesk_X-Condensed"] ' >
          WE ARE OCHI
         </h1>



          <h1 
         initial={{x:"-100%"}} 
         animate={{x:"0%"}}
         transition={{repeat: Infinity, ease:"linear" ,duration:6 }}
         className='text-[17.6vw] leading-none tracking-tighter font-semibold font-["Founders_Grotesk_X-Condensed"] ' >
          WE ARE OCHI
         </h1>


              

        </motion.div>
    </div>
  )
}

export default Marqueepage





