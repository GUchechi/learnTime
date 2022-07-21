import React from 'react'
import './Testimonials.css'


const Testimonials = () => {
  return (
    <div className='testimonials'>
         {/* Left side */}
         <div className='awesome'>
            <span>What they are</span>
            <span>Saying about us
            </span>
            <span>
                87% of our students are working 
                <br />
                with top Tech-companies
                <br/>  
                <br />            
             Check what others are enjoying!!!</span>
             <button className="button s-button">@LearnTime</button>
        </div>
    </div>
  )
}

export default Testimonials