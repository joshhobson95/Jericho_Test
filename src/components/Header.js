import React from 'react'
import balloons from '../assets/Cropped_balloons.jpg'
import logo from '../assets/Logo.png'

import giftcard from '../assets/f.browngiftcard.jpg'
import blog from '..//assets/f.yellowblog.jpg'
import community from '..//assets/Community.jpg'
import FFC from '..//assets/f.brownflower.jpg'

import './Header.css'
import ContactUs from './SVGs/ContactUs'
import Products from './SVGs/Products'


function Header() {
  return (
    <div className='header'>




        <div className='photo_banner'>
            <img className='balloons' src={balloons} alt='ballons'/>
            <div className='logo_div'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
        </div>


        <div className='navbar'>
  <div className='nav_item'>
    <div className='products'>
    <Products />
    </div>
    <span>Products</span>
  </div>
  <div className='nav_item'>
    <img src={giftcard} alt='Gift Card'/>
    <span>Gift Cards</span>
  </div>
  <div className='nav_item'>
    <img src={blog} alt='Blog'/>
    <span>Blog and Gallery</span>
  </div>
  <div className='nav_item'>
    <img src={community} alt='Community'/>
    <span>Community</span>
  </div>
  <div className='nav_item'>
    <img src={FFC} alt='FFC'/>
    <span>Frequent Flower Club</span>
  </div>
  <div className='nav_item'>
    <div className='contactus'>
    <ContactUs />
    </div>
    <span>Contact Us</span>
  </div>
</div>





    </div>
  )
}

export default Header