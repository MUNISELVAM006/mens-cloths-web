import React from 'react'
import { useState,useRef } from 'react';
import {Link} from 'react-router-dom'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";

import shirt from "/src/img/shirt.jpg"
import tshirt from "/src/img/tshirt.jpg"
import pant from "/src/img/black pant.webp"
import hoodie from "/src/img/Hoody.avif"

import shirt1 from "/src/img/shirt1.jpg"
import shirt2 from "/src/img/shirt2.webp"
import shirt3 from "/src/img/shirt3.webp"
import shirt4 from "/src/img/shirt4.webp"
import shirt5 from "/src/img/shirt5.jpg"
import shirt6 from "/src/img/shirt6.avif"
import shirt7 from "/src/img/shirt7.avif"

import pant1 from "/src/img/pant1.avif"
import pant2 from "/src/img/pant2.jpg"
import pant3 from "/src/img/pant3.jpg"
import pant4 from "/src/img/pant4.webp"
import pant5 from "/src/img/pant5.webp"
import pant6 from "/src/img/pant6.webp"
import pant7 from "/src/img/pant7.webp"

import tshirt1 from "/src/img/tshirt1.webp"
import tshirt2 from "/src/img/tshirt2.jpg"
import tshirt3 from "/src/img/tshirt3.jpg"
import tshirt4 from "/src/img/tshirt4.jpg"
import tshirt5 from "/src/img/tshirt5.webp"
import tshirt6 from "/src/img/tshirt6.jpg"
import tshirt7 from "/src/img/tshirt7.jpg"


const Home = () => {
 const imagelistRef = useRef(null);
 const imagelistRef2 = useRef(null);
 const imagelistRef3 = useRef(null);
 const [progressWidth, setProgressWidth] = useState(0);
 const [progressWidth2, setProgressWidth2] = useState(0);
 const [progressWidth3, setProgressWidth3] = useState(0);

  
    const handleSlide = (direction ,list) => {
      if( list === "list1" ){
    
      const width = imagelistRef.current.clientWidth/9 * direction;
      imagelistRef.current.scrollBy({ left: width, behavior: "smooth" });
  
    setProgressWidth((prevWidth) => {
      let newWidth = prevWidth + (direction * (100 / shirts.length));
      if (newWidth > 100) newWidth = 100; // Max progress
      if (newWidth < 0) newWidth = 0; // Min progress
      return newWidth;
    });
  }   else if ( list ===  "list2"){
    const width = imagelistRef2.current.clientWidth/9 * direction;
    imagelistRef2.current.scrollBy({ left: width, behavior: "smooth" });

  setProgressWidth2((prevWidth) => {
    let newWidth = prevWidth + (direction * (100 / shirts.length));
    if (newWidth > 100) newWidth = 100; // Max progress
    if (newWidth < 0) newWidth = 0; // Min progress
    return newWidth;
  });

  }else if(list = "list3"){
    const width = imagelistRef3.current.clientWidth/9 * direction;
    imagelistRef3.current.scrollBy({ left: width, behavior: "smooth" });
  
  setProgressWidth3((prevWidth) => {
    let newWidth = prevWidth + (direction * (100 / shirts.length));
    if (newWidth > 100) newWidth = 100; // Max progress
    if (newWidth < 0) newWidth = 0; // Min progress
    return newWidth;
  });
  }
  }




const images =[
{     
       id:1,
       name : "Formal-shirt",
       image : shirt,
       path : "/Shirts"
},
{ 
  id:2,
  name : "T-shirt",
  image :tshirt,
  path : "/TShirts"
},
{
  id:3,
  name : "Polo-pant",
  image :pant,
  path : "/Pant"
},
{
  id:4,
  name : "Sweat Hodies",
  image :hoodie,
  path : "/Hoodie"
},
] 

const shirts = [
 
  
  {
    image : shirt1,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  },
  {
    image : shirt2,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  },
  {
    image : shirt3,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  }, {
    image : shirt4,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  },
  {
    image : shirt5,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  }, {
    image : shirt6,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  }, {
    image : shirt7,
    name:"Black Formal Pant",
    price : "Rs.600.00",
  },
  
]

const pants = [
  {
   image : pant1,
    name:"a",
     price: "Rs.999.00"
  },
  {
   image : pant2,
    name:"b",
     price: "Rs.799.00"
    },
    {
     image : pant3,
      name:"c",
       price: "Rs.699.00"
      },
      {
       image : pant4,
        name:"plain Formal shirt",
         price: "Rs.1199.00"
        },
        {
         image : pant5,
          name:"plain Formal shirt",
           price: "Rs.650.00"
          },
          {
           image : pant6,
            name:"plain Formal shirt",
             price: "Rs.500.00"
            },
            {
             image : pant7,
              name:"z",
               price: "Rs.1499.00"
              }
]

const Tshirts = [
{
  image : tshirt1,
name:"a",
price: "Rs.999.00"

},
{
  image : tshirt2,
  name:"b",
  price: "Rs.799.00"
  },
  {
    image : tshirt3,
    name:"c",
    price: "Rs.699.00"
    },
    {
      image : tshirt4,
      name:"plain Formal shirt",
      price: "Rs.1199.00"
      },
      {
        image : tshirt5,
        name:"plain Formal shirt",
        price: "Rs.650.00"
        },
        {
          image : tshirt6,
          name:"plain Formal shirt",
          price: "Rs.500.00"
          },
          {
            image : tshirt7,
            name:"z",
            price: "Rs.1499.00"
            }
          
          ]

  return (
  <div className='w-[100%] ' >
   
  
         <h1 className='m-2 p-2 text-3xl font-semibold text-center' >SEASONAL ESSENTIALS </h1>            
         <div className='flex m-8 space-x-16' >
            {
                 images.map((item,index)=>(
                    <Link key={index} to={item.path} >
                        <img className='w-[400px] h-[400px] object-contain m-4 rounded-lg transition-transform duration-300 ease-out hover:scale-110'    src={item.image} />
                        <h1 className='m-3 p-3 text-2xl font-semibold text-center'>{item.name}</h1>
                    </Link>
                    ))
            }
        </div>

             

<section id='shirts' >

             <div className='font-bold m-10 text-center text-4xl' >
              PRINTED SHIRT
             </div> 

             <Link to="/Shirts" className='flex justify-end  mr-14 space-x-3 items-center' >
             <p  className='font-medium transition-transform duration-300 ease-out hover:scale-110  ' >View All</p>
            <CiPaperplane className='text-4xl p-2 rounded-full  bg-white shadow hover:bg-zinc-200' />
          </Link>

        <div className='flex justify-center' >
        
               <div id='slider' className='max-w-[1400px] w-[100%] transition-transform duration-300' > 
                      <div  id='image-list' ref={imagelistRef} className='w-[100%] grid-flow-col grid overflow-x-scroll scroll-smooth ' >
                      {
                             shirts.map((item,index)=>(
                             <div id='image-item'    key={index} className='w-[300px]   m-5  rounded-lg  text-center  '>
                                <img   className=' h-[400px] rounded-md object-cover' src={item.image} />
                                <p className='mt-2 font-bold' >{item.name}</p>
                               <p className='mt-2  '  >{item.price}</p>
                             </div>
                                ))}
                      </div>
                          
                       
               </div>

        </div>

        <div  className='flex justify-center items-center space-x-20  text-center ' >
          
           <div  className='text-right ' >
                <button   onClick={()=>handleSlide(-1 ,"list1")}  className='p-3 h-10 items-center rounded-full shadow bg-white' >
                   <FaAngleDoubleLeft/>
                </button>
            </div>

            <div  className='w-[60%] h-[24px] flex items-center  ' >
                 <div  className=' relative h-[2px] w-[100%]  bg-gray-300  ' >
                     <div style={{width: `${progressWidth}%`}}  className=' transition-all duration-300 absolute bg-black h-[2px] rounded-xl  ' >

                     </div>
                 </div>
            </div>

             <div className=' ' >

                <button onClick={()=>handleSlide(1,"list1")} className='p-3 h-10 items-center rounded-full shadow bg-white' >
                     <FaAngleDoubleRight />
                </button>
             </div>

         </div>

</section>

         

<section id='pants' >

         <div className='font-bold m-10 text-center text-4xl' >
              PANTS
          </div>

          <Link to="/Pant" className='flex justify-end  mr-14 space-x-3 items-center' >
             <p  className='font-medium transition-transform duration-300 ease-out hover:scale-110 ' >View All</p>
            <CiPaperplane className='text-4xl p-2 rounded-full  bg-white shadow hover:bg-zinc-200' />
          </Link>

        <div className='flex justify-center ' >
        
              <div id='slider' className='  max-w-[1400px] w-[100%] transition-transform duration-300  ' > 
                      <div  id='image-lists' ref={imagelistRef2} className='w-[100%] grid-flow-col grid overflow-x-scroll scroll-smooth ' >
                      {
                             pants.map((item,index)=>(
                             <div id='image-item'    key={index} className='w-[300px]  m-5  rounded-lg  text-center  '>
                                <img   className=' h-[400px] rounded-md object-cover' src={item.image} />
                                <p className='mt-2 font-bold' >{item.name}</p>
                               <p className='mt-2  '  >{item.price}</p>
                             </div>
                                ))}
                      </div>
                          
                       
               </div>

        </div>

        <div className='flex justify-center items-center space-x-20  text-center ' >
          
           <div  className='text-right ' >
                <button   onClick={()=>handleSlide(-1,"list2")}  className='p-3 h-10 items-center rounded-full shadow bg-white ' >
                   <FaAngleDoubleLeft/>
                </button>
            </div>

            <div  className='w-[60%] h-[24px] flex items-center  ' >
                 <div  className=' relative h-[2px] w-[100%]  bg-gray-300  ' >
                     <div style={{width: `${progressWidth2}%`}}  className=' transition-all duration-300 absolute bg-black h-[2px] rounded-xl  ' >

                     </div>
                 </div>
            </div>

               <div className=' ' >
                  <button onClick={()=>handleSlide(1,"list2")} className='p-3 h-10 items-center rounded-full shadow bg-white' >
                     <FaAngleDoubleRight />
                 </button>
               </div>

         </div>

</section>


<section id='Tshirts' >

            <div className='font-bold m-10 text-center text-4xl' >
              T-shirts
            </div>

            <Link to='/TShirts' className='flex justify-end  mr-14 space-x-3 items-center' >
             <p  className='font-medium transition-transform duration-300 ease-out hover:scale-110 ' >View All</p>
            <CiPaperplane className='text-4xl p-2 rounded-full  bg-white shadow hover:bg-zinc-200' />
          </Link>

  <div className='flex justify-center' >

      <div id='slider' className='max-w-[1400px] w-[100%] transition-transform duration-300 ' > 
             <div  id='image-list' ref={imagelistRef3} className='w-[100%] grid-flow-col grid overflow-x-scroll scroll-smooth ' >
             {
                    Tshirts.map((item,index)=>(
                    <div id='image-item'    key={index} className='w-[300px]   m-5  rounded-lg  text-center  '>
                       <img   className=' h-[400px] rounded-md object-cover' src={item.image} />
                       <p className='mt-2 font-bold' >{item.name}</p>
                      <p className='mt-2  '  >{item.price}</p>
                    </div>
                       ))}
             </div>
                 
              
      </div>

 </div>

<div className='flex justify-center items-center space-x-20  text-center ' >
 
      <div  className='text-right ' >
           <button   onClick={()=>handleSlide(-1,"list3")}  className='p-3 h-10 items-center rounded-full shadow bg-white ' >
                 <FaAngleDoubleLeft/>
          </button>
      </div>

       <div  className='w-[60%] h-[24px] flex items-center  ' >
           <div  className=' relative h-[2px] w-[100%]  bg-gray-300  ' >
               <div style={{width: `${progressWidth3}%`}}  className=' transition-all duration-300 absolute bg-black h-[2px] rounded-xl  ' >

               </div>
           </div>
       </div>

      <div className=' ' >

          <button onClick={()=>handleSlide(1,'list3')} className='p-3 h-10 items-center rounded-full shadow bg-white' >
            <FaAngleDoubleRight />
          </button>
      </div>

</div>

</section>




  </div>
  )
}

export default Home



