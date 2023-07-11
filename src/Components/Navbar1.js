import React from 'react';
import menu from './images/menu.png';
import long from './images/long.jpg';

export default function Navbar1() {
  return (
    <>
      <div className='Navbar-Second'>
        <div className="nav2">
          <ul>
            <li className='li-1'><img src={menu} alt="" width={20} /><p>&nbsp;ALL</p></li>
            <li>Amazon miniTV</li>
            <li>Sell</li>
            <li>Best sellers</li>
            <li>Today's Deals</li>
            <li>Mobiles</li>
            <li>Customer Service</li>
            <li>New Releases</li>
            <li>Prime</li>
            <li>Electronics</li>
            <li>Home & Kitchen</li>
            <li>Amazon Pay</li>
            <a href="#"><img src={long} alt="" /></a>
          </ul>
        </div>
      </div>
      <div className="back"></div>
    </>
  )
}
