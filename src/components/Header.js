import React from 'react'
import balloons from '../assets/Cropped_balloons.jpg'
import logo from '../assets/Logo.png'
import './Header.css'
import ContactUsIcon from './SVGs/ContactUsIcon'
import ProductsIcon from './SVGs/ProductsIcon'
import BlogIcon from './SVGs/BlogIcon'
import CommunityIcon from './SVGs/CommunityIcon'
import FFCIcon from './SVGs/FFCIcon'
import GiftCardIcon from './SVGs/GiftCardIcon'
import DropdownProducts from './DropdownProducts'



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
    <div className='products_icon'>
    <ProductsIcon />
    <DropdownProducts />
    </div>
    <span>Products</span>
  </div>
  <div className='nav_item'>
    <div className='gift_card_icon'>
    <GiftCardIcon />
   
    </div>
    <span>Gift Cards</span>
  </div>
  <div className='nav_item'>
    <div className='blog_icon'>
      <BlogIcon />
    </div>
    <span>Blog and Gallery</span>
  </div>
  <div className='nav_item'>
    <div className='community_icon'>
      <CommunityIcon />
    </div>
    <span>Community</span>
  </div>
  <div className='nav_item'>
    <div className='ffc_icon'>
      <FFCIcon />
    </div>
    <span>Frequent Flower Club</span>
  </div>
  <div className='nav_item'>
    <div className='contactus'>
    <ContactUsIcon />
    </div>
    <span>Contact Us</span>
  </div>
</div>





    </div>
  )
}

export default Header