// import React, { useState } from 'react'
// const Carousel = ({children :slides}) => {
// const [currentIndex,setCurrentIndex] = useState(0)

// const left = ()=>(
//     setCurrentIndex((currentIndex)=>(currentIndex === 0 ?slides.length -1 : currentIndex - 1 ))
// )
// const right = ()=>(
//     setCurrentIndex((currentIndex)=>( currentIndex === slides.length-1 ? 0  : currentIndex + 1   ))
// )

//   return (
//     <div className=' relative m-auto ' >
//        <div className='flex gap-10 transition-transform ease-out duration-500  ' >
//         {slides}
//        </div>
//        <div>

//        </div>

//        <div  className='flex p-4 bg-bl text-black space-x-1 justify-between absolute items-center inset-0'>
//         <button onClick={left} className='p-3 h-10 items-center rounded-full shadow bg-slate-800/80 hover:bg-white' >
//         <FaAngleDoubleLeft />
//         </button>

//         <button onClick={right} className='p-3 h-10 items-center rounded-full shadow bg-slate-800/80 hover:bg-white' >
//             <FaAngleDoubleRight />
//         </button>
//        </div>
       
//     </div>
//   )
// }

// export default Carousel
