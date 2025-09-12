import React from 'react'


const About = () => {
  return (
    <div data-scroll data-scroll-speed=".2" className='main  w-full  bg-[#D1ED62]  rounded-t-3xl ' >
{/*--first  */}
               <h1 className='px-14 text-[3.4vw] font-["Neue_Montreal"] mr-60 leading-[3.7vw] tracking-tighter ' >We craft category-defining presentations,
                 brand <br /> identities, and digital experiences that drive
                  funding, <br /> sales, and market leadership.</h1>


{/* --second */}

                  <div className='border-t-[1px] border-zinc-600 mt-20 flex px-14 pt-6 pb-10 ' >
                      
                <div className=' w-[52%] ' >
                    <p>What you can expect:</p>
                </div>



                <div className=' w-23% space-y-8 text-zinc-900  ' >
                    
                       <p> We don't just make slides. We shape  <br />
                        strategy, storytelling, design scalable <br />
                         brand systems, and build presentations <br />
                          that make people say: "I want in!" <br /> </p>

                       <p> Our clients make the world go round – <br />  
                       from deep tech, aerospace and robotics <br /> 
                        to music festivals and Michelin-starrbred 
                         <br /> restaurants. </p>
                       
                      <p> Since 2019, we've been the go-to partner <br /> 
                        for Yahoo, Medallia, Uber, Lexus, <br /> 
                         Salience Labs, Trawa and AllThingsGo.
                         </p>
                </div>



               <div className=' relative   ' >
                 <div className='flex flex-col ml-32 bottom-0 left-0 h-[20vh] absolute bo    '  >
                    <p>S:</p>
                    <a  href="#"  className=' hover:underline ' > instagram</a>
                    <a  href="#"  className=' hover:underline ' > Facebook</a>
                    <a  href="#"  className=' hover:underline ' > Whatsapp</a>
                    <a  href="#" className=' hover:underline '  > Twitter</a>
                </div>
               </div>

                  </div>



{/* --third */}

                  <div className='border-t-[1px] border-zinc-600  flex px-14 pt-10  pb-20' >
                    <div className=' w-[50%] ' >
                        <h1 className=' text-[3.7vw] ' >How we can help:</h1>
      
                           <button className=' flex gap-10 rounded-full text-white px-6 py-4 uppercase items-center bg-zinc-800  mt-2 ' >Read More 
                            <div className= ' w-2 h-2 bg-zinc-100 rounded-full mt-1 ' ></div>
                             </button>
                    </div>



                    <div className=' w-[50%]  ' >
                              <img className=' rounded-2xl mt-2 ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>
       </div>

    </div>
  ) 
}

export default About