"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const HomeSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pouseOnHover: false,
      };
      const slideData = [
        {
          id:1,
          img: "/banner-1.jpg",
          title: "Trending Item",
          mainTitle: "WOMEN'S LATEST FASHION SALE",
          price: "$20"
        },
        {
          id:2,
          img: "/banner-2.jpg",
          title: "Trending Accessories",
          mainTitle: "MODERN SUNGLASSES",
          price: "$15"
        },
        {
          id:3,
          img: "/banner-3.jpg",
          title: "Scale Offer",
          mainTitle: "NEW FASHION SUMMER SALE",
          price: "$30"
        }
      ];
  return (
    
      <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {slideData.map((item)=> <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price}  />)}
      </Slider>
      </div>
    
  )
}

export default HomeSlider