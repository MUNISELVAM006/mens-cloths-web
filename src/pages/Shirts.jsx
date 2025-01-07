import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { LuSlidersHorizontal } from "react-icons/lu";



const Shirts = () => {

const shirts_colleaction = [
{
image:'/src/img/shirt1.jpg',
name:"a",
rate: "Rs.999.00"

},
{
  image:'/src/img/shirt2.webp',
  name:"b",
  rate: "Rs.799.00"
  },
  {
    image:'/src/img/shirt3.webp',
    name:"c",
    rate: "Rs.699.00"
    },
    {
      image:'/src/img/shirt4.webp',
      name:"plain Formal shirt",
      rate: "Rs.1199.00"
      },
      {
        image:'/src/img/shirt5.jpg',
        name:"plain Formal shirt",
        rate: "Rs.650.00"
        },
        {
          image:'/src/img/shirt6.avif',
          name:"plain Formal shirt",
          rate: "Rs.500.00"
          },
          {
            image:'/src/img/shirt7.avif',
            name:"z",
            rate: "Rs.1499.00"
            },
            {
              image:'/src/img/shirt8.webp',
              name:"m",
              rate: "Rs.1299.00"
              },
              {
                image: '/src/img/shirt9.webp',
                name:"plain Formal shirt",
                rate: "Rs.950.00"
                },
                {
                  image:'/src/img/shirt10.jpg',
                  name:"a",
                  rate: "Rs.700.00"
                  },
]
const[filter,setFilter]=useState(false)
const[sorted,setSorted]=useState("default")
const sortCollection = () => {
  if (sorted === "a_z") {
    return [...shirts_colleaction].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sorted === "z_a") {
    return [...shirts_colleaction].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sorted === "high") {
    return [...shirts_colleaction].sort((a, b) => {
      const rateA = parseFloat(a.rate.replace(/[^\d]/g, "")); // Remove non-numeric except '.'
      const rateB = parseFloat(b.rate.replace(/[^\d]/g, ""));
      return rateB - rateA; // High to Low
    });
  } else if (sorted === "low") {
    return [...shirts_colleaction].sort((a, b) => {
      const rateA = parseFloat(a.rate.replace(/[^\d]/g, ""));
      const rateB = parseFloat(b.rate.replace(/[^\d]/g, ""));
      return rateA - rateB; // Low to High
    });
  }
  return shirts_colleaction;
};



  return (
    <>
  <div>    
           <div className='text-center m-20'>
           <span className='text-6xl font-bold'> Shirts </span>
           </div>
            
        <div className='w-[300px] justify-self-end  ' >
           
            <div className='flex items-center justify-self-end space-x-2 mr-10 ' >
                 <span  className='font-bold  ' >Sort by:  </span>
                 <p className='' >  Filter   </p>
                 <LuSlidersHorizontal onClick={()=>setFilter(!filter)} className='' /> 
           </div>

           {
          <div style={{display :filter ? "block" : "none"  }} className='flex w-[300px] text-lg absolute bg-white border border-gray-200 mt-4 p-4 rounded-lg ' >

               <ul className='text-zinc-400 ' >
                <li className='text-black fon m-2  p-1 ' >Filter</li>
                <li className='m-2 p-1 hover:text-black' onClick={()=>setSorted("a_z")} >Alphabetically, A-Z </li>
                <li className='m-2 p-1 hover:text-black' onClick={()=>setSorted("z_a")} >Alphabetically, Z-A </li>
                <li className='m-2  p-1 hover:text-black' onClick={()=>setSorted("high")} >Price high to low </li>
                <li className='m-2  p-1 hover:text-black'onClick={()=>setSorted("low")} >Price low to high </li>
               </ul>
          </div>
           }
         

      </div>
           
           
        <div className='grid grid-cols-4 gap-4"  ' >
      
          {
            sortCollection().map((item,index)=>(
              <div className='m-auto text-center ' key={index} >
              <img className='w-[300px] h-[400px] m-5 rounded-lg  ' src={item.image} alt = "shirts_collection" />
              <p className='text-black font-bold' >{item.name}</p>
              <p>{item.rate}</p>
              </div>
            ))
          }
        </div>
          
        

    </div>
    </>
  
  )
}

export default Shirts
