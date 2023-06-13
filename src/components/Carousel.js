import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import '../app.css'


const Carousel = () => {

  const testimonials = [
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    },
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    },
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    },
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    },
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    },
    {
      "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates quae eaque consequatur suscipit vero harum quam tempora consectetur voluptas fugit est possimus nobis, accusantium autem voluptatem vitae nulla laudantium!",
      "name": "Smantha caroson",
      "country": "Alexandria,La",
      "Image": ""

    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Slider  {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <TestimonialCard name={testimonial.name} message={testimonial.message} country = {testimonial.country} image = {testimonials.image} />
        </div>
      ))}
    </Slider>
  );
};




export default Carousel