import React from 'react'
import './Intro.css'

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
        </div>
        <div className="i_right">I am right side</div>
    </div>
  )
}

export default Intro