import React from 'react';
import './Intro.css';
import Github from '../../../img/github.png'
import LinkedIn from '../../../img/linkedin.png'
import Instagram from '../../../img/instagram.png'
import Vector1 from '../../../img/Vector1.png'
import Vector2 from '../../../img/Vector2.png'
import boy from '../../../img/boy.png'
import thumbup from '../../../img/thumbup.png'
import Crown from '../../../img/crown.png'
import glassesimogi from '../../../img/glassesimoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv';
import {themeContext} from '../../../Context';
import { useContext} from 'react'
import {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i_left">
            <div className="i_name">
                <span style={{color: darkMode? "white" : ""}}>Hello! It's learnTime</span>
                <span >Not sure of where to start?</span>
                <span style={{color: darkMode? "white" : ""}}>Learners around the world are acquiring new skills, launching new careers, advancing in their fields, and enriching their lives.
                Enroll in learnTime today and, you can get the in-demand skills you need to help land a high-paying tech job. 
                Here, you code with your mobile phone, you learn at your own pace, when and where it’s convenient for you. So what are you waiting for?
                </span>
            </div>
            <button className="i_button button">Enroll Now</button>
            <div className="i_icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i_right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
                initial={{left: '-36%'}}
                whileInView= {{left: '-24%'}}
                transition={transition}           
                src={glassesimogi} 
                alt="" 
            />
            <motion.div
            initial={{top: '-4%', left:'74%'}}
            whileInView={{left: '68%'}}
            transition={{transition}}
            
            style={{top: '-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1 ='Learn' txt2='Time'/>
            </motion.div>
            <motion.div 
             initial={{top: '18rem', left:'9rem'}}
             whileInView={{left: '0rem'}}
             transition={{transition}}
            style={{top:'18rem', left: '1rem'}}>
                <FloatingDiv  image={thumbup} txt1='Best In' txt2='Learning'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Intro