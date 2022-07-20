import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n_wrapper">
        <div className="n_left">
            <div className="n_name">LearnTime</div>
            <span>toggle</span>
        </div>
        <div className="n_right">
            <div className="n_list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Learn</li>
                    <li>Code</li>
                    <li>Tesmonials</li>
                    <li>Login</li>
                </ul>
            </div>
            <button className="button n_button">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar