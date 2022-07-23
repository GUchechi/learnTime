import React from 'react'
import './Testimonials.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import {themeContext} from '../../Context';
import { useContext} from 'react'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='testimonials'>
         {/* Left side */}
         <div className='awesome'>
            <span style={{color: darkMode? "white" : ""}}>What they are</span>
            <span>Saying about us
            </span>
            <span style={{color: darkMode? "white" : ""}}>
                87% of our students are working 
                <br />
                with top Tech-companies
                <br/>  
                <br />            
             Check what others are enjoying!!!</span>
             <button className="button s-button">@LearnTime</button>
        </div>

        {/* Right side*/}
        <div className="w-right">
            <motion.div 
            initial={{rotate: 45}}
            whileInView = {{rotate :1000}}
            viewport={{margin:'-40px'}}
            transition={{duration: 13.5, type:'spring'}}
            
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify}alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
            </motion.div>
            {/* Background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Testimonials