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

const Intro = () => {
  return (
    <div className="intro">
        <div className="i_left">
            <div className="i_name">
                <span>Hello! It's learnTime</span>
                <span>Not sure of where to start?</span>
                <span>Learners around the world are acquiring new skills, launching new careers, advancing in their fields, and enriching their lives.
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
            <img src={glassesimogi} alt="" />
            <div style={{top: '-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1 ='Learn' txt2='Time'/>
            </div>
            <div style={{top:'18rem', left: '0rem'}}>
                <FloatingDiv  image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>
        </div>
    </div>
  )
}

export default Intro