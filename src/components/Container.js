import React from 'react'
import './Container.css'
import icon1 from '../assets/Transparent2.png'

function Container() {
  return (
    <div className='container'>
        <div className='container_header'>
                <div className='container_icon'>
                    <img  src={icon1}/>
                </div>
                <div className='container_header_text'>
                    <h1>New This Week</h1>
                </div>
        </div>

        <div className='container_body'>
                <div className='container_img'>
                    <img src='https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'/>

                </div>
                <div className='container_paragraph'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>

                </div>

        </div>


    </div>
  )
}

export default Container