import React from 'react'
import './FreshIdeas.css'
import icon from '../../assets/Lightbulb.png'
import banner from '../../assets/plants_banner.jpg'

function FreshIdeas() {
    return (
        <div className='ntw'>
            <div className='fi_container'>
            <div className='ntw_header'>
                    <div className='ntw_icon'>
                        <img  src={icon} className="c_icon"/>
                    </div>
                    <div className='ntw_header_text'>
                        <h1>Fresh Ideas</h1>
                    </div>
            </div>
    
            <div className='ntw_body'>
                    <div className='ntw_img'>
                        <img src={banner} className='c_image' alt=''/>
    
                    </div>
                    <div className='ntw_paragraph'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
    
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default FreshIdeas