import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './images/logo1.png';
import locate from './images/locate.png';
import trolley from './images/trolley.png';
import search from './images/search.png';
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <div>
        <header>
          <nav>
            <div className="first">
              <Link to="/"><img src={logo1} alt="" /></Link>
            </div>
            <div className="second">
              <h5>Hello</h5>
              <div className="sec-con">
                <img src={locate} alt="" width={12} />
                <h4>Select your address</h4>
              </div>
            </div>
            <div className="third">
              <input className="ip1" type="Search" placeholder="Search Amazon.in" />
              <div><img src={search} alt="" width={30} /></div>
            </div>
            <div className="fourth">
              <div className="dropdown">
                <button className="dropbtn">
                  <div className="dropbtn-con">
                    <img alt=""
                      src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg"
                      width="25"
                      height="20"
                    />
                    &nbsp;<p>EN &#129171;</p>
                  </div>
                </button>

                <div className="dropdown-content">
                  <Link to="/">Hindi</Link>
                  <Link to="/">Sanskrit</Link>
                  <Link to="/">Telugu</Link>
                  <Link to="/">Marathi</Link>
                </div>
              </div>
            </div>
            <div className="fifth">
              <h5>Hello, sign in</h5>
              <select name="cars" id="cars">
                <option value="volvo">Accounts & Lists</option>
                <option id="black" value="saab">Your Account</option>
                <option id="black" value="opel">Your Orders</option>
                <option id="black" value="audi">Your Wish List</option>
              </select>
            </div>
            <div className="sixth">
              <p>Returns</p>
              <p>&amp; Orders</p>
            </div>
            <div className="seventh">
              <Link to="/cart"><img src={trolley} alt="" width={36} /><p>{props.cartCount}</p><br />Cart</Link>
            </div>
          </nav>
        </header>
      </div>
      <br /><br /><br />
    </>
  );
}
