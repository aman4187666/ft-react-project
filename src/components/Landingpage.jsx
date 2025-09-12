import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";




const Landingpage = () => {
  
  return (
    // --------- text section 
    <div data-scroll data-scroll-section  data-scroll-speed="-.3" className='h-full w-full bg-[#f1f1f1] text-black pt-2   '>
        <div className='textstruc mt-40  ' >
        
        {["WE CREATE","EYE OPENING", "PRESENTATIONS" ].map((item,ind)=>{
            return   <div className='masker' key={ind} >
              <div className='w-fit flex  overflow-y-hidden ' >
                {ind === 1 && 
                (<motion.div 
                  initial={{width:"-100%"}} 
                animate={{width:"10vw"}} 
                transition={{ease:(0.76, 0, 0.24, 1)}} 
                className=' w-[1vw]  relative left-[7.6%] bg-green-400 top-[0.8vw] mr-2 overflow-hidden      h-[3.5vw]  '>
                </motion.div> ) }
                <h1  className='text-[5vw] uppercase leading-[5vw] text-black font-["Founders_Grotesk_X-Condensed"]   font-bold px-14  ' >{item}
              
                </h1>
                </div>
            </div>
        })}
        </div>
    
  
  {/*-------------border section   */}

       <div className='border-t w-full  border-black mt-[8%]  flex py-4 justify-between items-center px-14  ' > 

 
        {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item,index)=>{ 
            return <p key={index} className="font-['Neue Montreal'] flex text-[1.1rem]  justify-between items-center  tracking-tight leading-none ">{item}</p>
        })}
        <div className='start flex justify-between items-center text-zinc-950  ' >
            <div className= " px-6 mr-4 border-[1px] py-2 rounded-full leading-none tracking-tighter hover:bg-black text-black  border-zinc-900   ">START THE PROJECT</div>
            <div className="icon w-9 h-9 rounded-full p-2 px-2 border-[1px] border-black  ">  </div>
        </div>

       
      </div>
    
        
    </div>
 
  )
}

export default Landingpage