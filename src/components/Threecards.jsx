import React from 'react'

const Threecards = () => {
  return (

////////////////////////------------------------ Three cards main div-----------------------///////////////////////////

    <div className='h-screen w-full px-14 bg-gray-100 ' >
      
     <div className="cardscontainer h-full w-full  flex gap-5 items-center mt-18 ">


{/* ----this is contain the first left side image  */}

        <div className='cardcontainer1 w-[50%]    ' >
            <div className='card w-full bg-emerald-900  rounded-2xl  h-[54vh] flex items-center justify-center relative ' >
                <img className='absolute items-center w-[10rem]  object-cover ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute px-2 py-1 border-[1.4px] rounded-3xl border-yellow-300 bottom-8 left-[4.2%] text-amber-200 ' > &copy;2019-2020 </button>
            </div>
            
        </div>




{/* ---- and this container contain the both are in there  */}

        <div className='cardcontainer2  w-[50%]  h-[54vh] flex gap-5  '>


            {/* --first card */}
             <div className='card w-full bg-zinc-900    rounded-2xl flex items-center justify-center relative ' >
                <img className=' w-[10rem] ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                  <button className=' absolute px-2 py-1 border-[1.4px] rounded-3xl border-zinc-300 bottom-8 left-[4.2%] text-white ' > RATING5.0 ON CLUTCH </button>

             </div>


             {/* ---second card */}
             <div className='card w-full bg-brown-600 relative   rounded-2xl flex items-center justify-center bg-zinc-800 ' >
                <img className=' w-[6rem] absolute ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                                <button className=' absolute px-2 py-1 border-[1.4px] rounded-3xl border-zinc-300 bottom-8 left-[4.2%] text-white ' >BUSSINESS BOOTCAMP ALLUMNI </button>

             </div>
        </div>
        
     </div>
    
     



    </div>
  )
}

export default Threecards
