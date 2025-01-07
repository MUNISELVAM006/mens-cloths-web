
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Shirts from '../pages/Shirts';
import TShirts from '../pages/TShirts';
import Pant from '../pages/Pant';
import Hoodie from '../pages/Hoodie';



const Hero = () => {
  return (
    <div>
       
           <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/Shirts' element={<Shirts />} />
            <Route path='/TShirts' element={<TShirts />} />
            <Route path='/Pant' element={<Pant />} />
            <Route path='/Hoodie' element={<Hoodie />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

    
    </div>
  )
}

export default Hero




// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const Hero = () => {
//   const [defaultproduct,setDefaultproduct]=useState([])

// const fetchproduct = async()=>{
//   try{
//     console.log("API URL:", import.meta.env.VITE_API);

//     const response = await axios.get(`${import.meta.env.VITE_API}/api`)

// setDefaultproduct(response.data)
// console.log(defaultproduct)

//   }catch(err){
//     console.log(err)
//   }
// }
// useEffect(()=>{
//   fetchproduct()
// },[])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Hero


