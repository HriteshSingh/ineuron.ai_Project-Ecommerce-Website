import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import ShopCom from './Components/ShopCom';
import Footer from './Components/Footer';
import MyCart from './Components/MyCart';

import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItems1, setCartItems1] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
    setCartCount(prevCount => prevCount + 1);
  };
  const addToCart1 = (item1) => {
    setCartItems1(prevItems1 => [...prevItems1, item1]);
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Router>
        <Navbar cartCount={cartCount}/>
        <Routes>
          <Route path="/cart" element={<MyCart cartItems={cartItems} cartItems1={cartItems1} cartCount={cartCount}/>} />
          <Route path="/" element={
            <>
              <Navbar1 />
              <ShopCom addToCart={addToCart} addToCart1={addToCart1}/>
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
