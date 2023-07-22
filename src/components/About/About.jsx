import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p'>
        <div className='container'>
        <div className='work-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>About <span className='text-dark'>Us</span></h3>
                </div>
                </div>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>Jearmy <span className='text-dark'>Jwellery</span></h3>
                        <p className='text mx-auto'>Step into a world of timeless elegance. Discover exquisite jewelry creations that capture hearts and inspire awe. From dazzling diamonds to vibrant gemstones, our curated collection showcases the epitome of luxury and style. Experience the artistry of our bespoke designs and let us elevate your personal style. Welcome to our jewelry shop, where beauty and grace converge.</p>
                    </div>
                </div>

                <div className='about-grid parent-container '>
                {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item  flex set-align grid' key = {index}>
                                    <div className='about-item-icon '>
                                        <img src = {about_stat.image} alt = "jearmy jwellers" />
                                    </div>
                                    <div className='about-item-text '>
                                    {about_stat.value === "+61 413 593 119" ? (
            <a href="tel:+61413593119">
              <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
              <p className='text'>{about_stat.title}</p>
            </a>
          ) : about_stat.value === "jearmyjwellery@gmail.com" ? (
            <a href={`mailto:${about_stat.value}`}>
              <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
              <p className='text'>{about_stat.title}</p>
            </a>
          ) : (
            <>
              <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
              <p className='text'>{about_stat.title}</p>
            </>
          )}
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                

                <div className='about-grid grid'>
                    <div className='section-title'>
                        {/* <h3 className='text-brown'>Video <span className='text-dark'>Presentation</span></h3> */}
                        <p className='text mx-auto'>
                        Explore our Dazzling Collection of Exquisite Silver and Gold Jewelry and Accessories. From stunning necklaces and bracelets to captivating rings and earrings, indulge in the allure of precious metals and find the perfect piece to enhance your personal charm. Embrace luxury and craftsmanship that transcends trends, and let our jewelry become a reflection of your unique and refined taste. Experience the artistry of silver and gold, and adorn yourself with everlasting beauty
                        </p>
                    </div>

                    <div className='about-video'>
                    <img src = {images.About_Shop} alt = "" className='about-img mx-auto' />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

    </div>
  )
}

export default About