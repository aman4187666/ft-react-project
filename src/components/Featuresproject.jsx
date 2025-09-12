
import { motion } from "framer-motion";


import React, { use, useState } from 'react'


const Featuresproject = () => {
motion







  return (

    // ---this is whole page div 

    <div className='featuremain w-full py-24 bg-gray-100   ' >   

      {/*--this is heading div  */}

        <div className='heading w-full px-14 mt-4 border-b-[1px] border-zinc-400 pb-6 ' > 
            <h1  className=' text-[4vw] text-zinc-900 font-["Neue_Montreal"] tracking-tighter ' >Featured projects</h1>
        </div>








         
{/* ----this is all feature of imagescards div */}
    
     <div className="allcards w-full bg-gray-100  py-10 px-14 ">

       
         {/* -----------------------------------------first pages images --------------------------------------------*/}

       <div className='cards1  mt-14 ' >
         <div className="cards w-full flex  gap-10 mt-6 relative ">
                
                {/* ---THIS is first card */}
      
           
   <div 

   className="cardcontainer w-1/2 relative overflow-visible"> 



  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>SALIENCE LABS</span> 
  </div>

  <h2 className='card1 salience text-[6.8vw] flex  text-[#D1ED62] left-full z-[9] tracking-tighter font-bold whitespace-nowrap -translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"FYDE".split('').map((item, index) => (
      <span key={index} className='inline-block '  >{item}</span>))}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRANCH IDENTITY</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>PITCH DECK</button>
  </div>
</div>




 {/* ---THIS is second card */}
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>SALIENCE LABS</span> 
  </div>

  <h2 className='card2 salience text-[6.8vw] text-[#D1ED62] right-full z-[9] tracking-tighter font-bold whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>CONFERENCE</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>EXECUTIVE KEYNOTES</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>PRODUCT LAUNCH</button>
  </div>
</div>







                  


           </div>
         </div>



  {/* ------------------------------------------------second pages images----------------------------------------- */}

        <div className='cards2  mt-14  ' >
         <div className="cards w-full flex  gap-10 mt-6 relative ">
                
                {/* ---THIS is first card */}
      
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>AH2 & MATT HORN </span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] left-full z-[9] tracking-tighter font-bold whitespace-nowrap -translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"AH2 & MATT HORN ".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
   
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>PITCH DECK</button>
  </div>
</div>




 {/* ---THIS is second card */}
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>
VISE</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] right-full z-[9] tracking-tighter font-bold whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>AGENCY</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>COMPANY PRESENTATION</button>
   
  </div>
</div>

           </div>
         </div>
        


{/* ------------------------------------------------third pages images----------------------------------------- */}

          <div className='cards3 mt-14 ' >
         <div className="cards w-full flex  gap-10 mt-6 relative ">
                
                {/* ---THIS is first card */}
      
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span> SOFTSTART </span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] left-full z-[9] tracking-tighter font-bold whitespace-nowrap -translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"SOFTSTART".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRANCH TEMPLATE</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>SALES DECK</button>
  </div>
</div>




 {/* ---THIS is second card */}
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>FYDE</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] right-full z-[9] tracking-tighter font-bold whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>AUDIT</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>COPYWRITEING</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>SALES DECKS</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>SLIDE DESIGHN</button>
  </div>
</div>


           </div>
         </div>
        

{/* ------------------------------------------------fourth pages images----------------------------------------- */}

         <div className='cards4 mt-14 ' >
         <div className="cards w-full flex  gap-10 mt-6 relative ">
                
                {/* ---THIS is first card */}
      
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>
ALL THINGS GO
</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] left-full z-[9] tracking-tighter font-bold whitespace-nowrap -translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"ALL THINGS GO".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRANCH IDENTITY</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>PITCH DECK</button>
  </div>
</div>




 {/* ---THIS is second card */}
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>TRAWA</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] right-full z-[9] tracking-tighter font-bold whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRAND IDENTITY</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>DESIGHN REASEARCH</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>INVESTOR DECK</button>
  </div>
</div>

           </div>
         </div>


{/* ------------------------------------------------fifth pages images----------------------------------------- */}
          
          
         <div className='cards5 mt-14 ' >
         <div className="cards w-full flex  gap-10 mt-6 relative ">
                
                {/* ---THIS is first card */}
      
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>
CARDBOARD SPACESHIP
</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] left-full z-[9] tracking-tighter font-bold whitespace-nowrap -translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"CARDBOARD SPACESHIP".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRANCH TEMPLETE</button>
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>SALES DECK</button>
        <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>SOCIAL MEDIA DECK</button>
  </div>
</div>




 {/* ---THIS is second card */}
           
   <div className="cardcontainer w-1/2 relative overflow-visible"> 
  {/* No fixed height here */}

  <div className='uppertext gap-5 w-full flex items-center'>
    <span className='h-3 w-3 rounded-full bg-black'></span> 
    <span>PREMIUM BLEND</span> 
  </div>

  <h2 className='salience text-[6.8vw] text-[#D1ED62] right-full z-[9] tracking-tighter font-bold whitespace-nowrap translate-x-1/2 top-1/2 -translate-y-1/3 font-["Neue_Montreal"] absolute leading-none'>
    {"PREMIUM BLEND".split('').map((item, index) => <span key={index}>{item}</span>)}
  </h2>

  <div className='w-full bg-green-700 rounded-2xl object-cover overflow-hidden mt-4'>
    <img className='w-full h-[72vh] object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
  </div>

  <div className="btn bottom-0 mt-3 gap-1 flex">
    <button className='px-4 py-1 rounded-3xl border-zinc-700 border-[2px] tracking-tighter'>BRANDED TEMPLATE</button>
    
  </div>
</div>







                  


           </div>
         </div>
                






{/* ------------------------------------------------last middle button --------------------------------------------------------------- */}

       <div className='bigbtn relative w-full mt-20 pb-40 ' >
        <button className=' flex px-4 py-4 absolute border-[2px] border-zinc-700 text-white gap-5 bg-black rounded-3xl items-center justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' > 
          <span className='' >VIEW ALL CASE STUDIES</span> 
           <span className=' w-3 h-3 rounded-full ml-2  bg-white  ' ></span> 
            </button>
       </div>

         </div>
       </div> 


  )
}

export default Featuresproject