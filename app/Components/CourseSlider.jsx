"use client"

import sliderData from "@Constants"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


const CourseSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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


  return (
<div className="p-4">
        
        <Slider {...settings} >
{sliderData.map((item , index)=>(
    <div className="h-auto p-2 border shadow-md rounded-md  outline-none overflow-hidden" key={index}>
        <Image className="w-full" src={item.image} height={100} width={350}  alt={item.Course} priority/>

<h1 className="text-xl text-gray-900 font-semibold pt-4 pb-2 pl-6">{item.Course}</h1>
<hr className="border-1 m-2 border-blue-500"/>
    
<div className="flex justify-between mt-4 ml-2 mr-2 text-blue-500 text-xl font-semibold">
    <span className="ml-6">{item.Price}</span>
    <button className=" bg-blue-500 text-white lg:px-4 md:px-2 px-1 lg:text-xl md:text-sm text-xs lg:py-2 md:py-1 py-1 rounded hover:w-[55%] ml-auto">Know more <ChevronRightIcon className="inline size-4" /> </button>
</div>


    </div>
))}
        </Slider>
      </div>

  )
}

export default CourseSlider