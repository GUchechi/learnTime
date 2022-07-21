import React from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
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

            </SwiperSlide>
         </Swiper>
    

    </div>
  )
}

export default Projects