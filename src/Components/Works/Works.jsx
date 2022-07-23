import React from 'react'
import './Works.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import {themeContext} from '../../Context';
import { useContext} from 'react'


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        {/* Left side */}
        <div className='awesome'>
            <span style={{color: darkMode? "white" : ""}}>Non Tech</span>
            <span>Courses</span>
            <span style={{color: darkMode? "white" : ""}}>Acquire amazing Non-Tech Skills
                <br/>              
             what are you waiting for?</span>
             <button className="button s-button">Start Learning</button>
        </div>
         {/* Right side */}
         <div className='cards'>
            <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Product Management'}
                detail = {"Acquire Skills in Product Management"}
                />
            </div>  
            {/* Second card */}
            <div style={{top: "12rem", left: "-4rem"}}>
                <Card
                 emoji={Glasses}
                 heading = {"Project Management"}
                 detail = {"Acquire Skills in Project Management"}
                />
            </div>
            {/* Third card */}
            <div style={{top: "19rem", left: "13.9rem"}}>
                <Card
                 emoji={Humble}
                 heading = {"Digital Marketing"}
                 detail = {"Acquire Skills in Digital Marketing"}
                />
            </div>
            {/* Fouth Card */}
             <div style={{top: "12rem", left: "29rem"}}>
                <Card
                 emoji={Glasses}
                 heading = {"Technical Writing"}
                 detail = {"Acquire Skills in Technical Writing"}
                />
            </div>
        </div>
    </div>
  )
}

export default Works