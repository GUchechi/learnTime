import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import {themeContext} from '../../Context';
import { useContext} from 'react'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        {/* Left side */}
        <div className='awesome'>
            <span style={{color: darkMode? "white" : ""}}>Our Awesome</span>
            <span>Tech Courses</span>
            <span style={{color: darkMode? "white" : ""}}>Acquire On Demand Tech Skills
                <br/>              
             what are you waiting for?</span>
             <button className="button s-button">Start Learning</button>
        </div>

        {/* Right side */}
        <div className='cards'>
            <div style={{left:'14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Web-Development'}
                detail = {"Acquire Skills in Frontend/Backend web development"}
                />
            </div>  
            {/* Second card */}
            <div style={{top: "12rem", left: "-4rem"}}>
                <Card
                 emoji={Glasses}
                 heading = {"Mobile-Development"}
                 detail = {"Acquire Skills in building top-notched applications"}
                />
            </div>
            {/* Third card */}
            <div style={{top: "19rem", left: "13.9rem"}}>
                <Card
                 emoji={Humble}
                 heading = {"Data Science"}
                 detail = {"Acquire skills in Data Science and Data Analysis"}
                />
            </div>
            {/* Fouth Card */}
             <div style={{top: "12rem", left: "29rem"}}>
                <Card
                 emoji={Glasses}
                 heading = {"Cloud Computing"}
                 detail = {"Acquire Skills in Cloud Architeture"}
                />
            </div>

        </div>
    </div>
  )
}

export default Services