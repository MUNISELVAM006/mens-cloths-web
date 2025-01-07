
import React from 'react'
import { useState } from 'react';
import searchicon from '/src/img/search-icon.png'
import {  FaTh, FaThList, FaUserAlt,FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
import { MdClear } from "react-icons/md";




const NavBar = () => {
  const [open, setopen] = useState(false);
    const toggle = () => setopen(!open);
  
    const menuItem = [
      {
        path: "/Home",
        name: "Home",
        icon: <FaTh />
      },
      {
        path: "/contact",
        name: "Contact",
        icon: <FaThList />
      },
      {
        path: "/about",
        name: "About",
        icon: <FaUserAlt />
      }
    ];
  
  return (
    <>
     
       {/* NAV BAR  START*/}
    <div className='flex   w-[100%] justify-between bg-neutral text-zinc-100' > 
                  
                        <Link to='/Home'  className='m-3' >
                          <p className=' p-2 text-3xl font-medium  ' >FLIPKARD</p>
                        </Link>
                        
                        <div>
                          <ul className='m-3 p-4 flex space-x-16' >
                            <li className='hover:text-blue-500 font-bold' >Men </li>
                            <li className='hover:text-blue-500 font-bold' >Women</li>
                            <li className='hover:text-blue-500 font-bold' >Kids</li>
                          </ul>
                        </div>

                         <div className='flex' >
                              <div className='flex m-4  border border-gray-300    ' >
                                  <img className='bg-white ' src={searchicon} alt="search img" />
                                  <input className='outline-none  ' type='text' placeholder='Search'  />
                              </div>

                               
                               <div>
                                  <FaAlignRight onClick={toggle} className='m-6 text-3xl '   />
                              </div>
                         </div>
                         
                           

    </div>  
                          {/* NAV BAR END */}
                               

                               {/* SIDE BAR START */}

                     

                    <nav  className='flex justify-end' >
                    <div style={{width : open ? "350px" : "0px"}} className= ' h-screen  transition-all duration-500 fixed top-0  overflow-hidden bg-slate-600 text-white ' >
                              <div style={{display :open ? "block" : "none"}} className='bg-slate-400  p-3 place-items-end ' >
                              <MdClear onClick={toggle} className=' text-3xl transition-transform duration-300 ease-out hover:scale-125' />

                              </div>
                              
                          {
                            menuItem.map((item,index)=>(

                                 <Link   key={index} className="flex items-center  hover:bg-black  space-x-3 " to={item.path} >
                                    <div style={{display :open ? "block" : "none"}}   className='p-6' >{item.icon}</div> 
                                    <p style={{display :open ? "block" : "none"}}  className='' >{item.name}</p>  
                                  </Link>
                      
                            ))
                          }
                         </div> 
                    </nav>                     
  
         
    </>
  )
}

export default NavBar
