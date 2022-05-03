/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
 export default function Container6(){
     return(
        <div className="lp-container-6 container-lg">
      
      <div className="lp-inner-container">
            
           <div className="inner-container-1">OUR WORKS</div>
           <div className="inner-container-2">We done hard works for great products</div>
           <div className="inner-container-3">
            <Card/>
            <Card/>
            <Card/>
           </div>
             
         </div>
     </div>
     )
  
 }
 function Card(){
     return(
         <div className="card-container">
             <div className="card-image-container">
             <Image src="/Rectangle (17).png"  height={327} width={327} alt=" " />
             </div>
             <div className="card-text">
                 <span>Aenefits.com</span>
                 <span>Website Develop</span>
             </div>
         </div>
     )
 }