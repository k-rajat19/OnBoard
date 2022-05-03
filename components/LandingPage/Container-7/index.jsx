/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";

 export default function Container7(){
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,

    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             initialSlide: 2
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //       ]
    //   };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

     return(
         <>
          
        <div className="lp-container-7 ">
         
      
      <div className="lp-inner-container">
      <Slider {...settings}>

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>

</Slider>

         </div>
     </div>
     </>
     )
  
 }
 function Card(){
     return(

     <div className="card-container">
         <div className="card-image-container"></div>
         <div className="card-text-container">
              <div className="text-container-1"
              >
                  <span>Mary Gayle</span>
                  <span>Client</span>

              </div>
              <div className="text-container-2">
              Inspiration comes in many ways and you like to save everything from. sed do exercitation.         
              </div>
         </div>
     </div>
     )
 }