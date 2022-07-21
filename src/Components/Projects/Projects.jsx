import React from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Project1 from '../../img/Project1.png'
import Project2 from '../../img/Project2.png'
import Project3 from '../../img/Project3.png'
import Project4 from '../../img/Project4.png'
import Project5 from '../../img/Project5.png'
import Project6 from '../../img/Project6.png'
import Project7 from '../../img/Project7.png'
import Project8 from '../../img/Project8.png'
import Project9 from '../../img/Project9.png'
import Project10 from '../../img/Project10.png'
import 'swiper/css'

const Projects = () => {
  return (
    <div className='projects'>
        {/* Heading */}
        <span>Recent Projects
            <br/>
            our students.
        </span>
        <span>Projects</span>

         {/* Slider */}
         <Swiper>
            <SwiperSlide>
                <img src={Project1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project9} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project10} alt="" />
            </SwiperSlide>
         </Swiper>
    

    </div>
  )
}

export default Projects