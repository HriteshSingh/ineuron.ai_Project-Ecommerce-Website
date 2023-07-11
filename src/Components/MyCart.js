import React from 'react';

export default function MyCart({ cartItems, cartItems1, cartCount }) {
  return (
    <>
      <h2 className='Cart-head'>My Cart : {cartCount}</h2>
      <div className="mycart-con">
        {cartItems.map((item, index) => (
          <div className='cartItems' key={index}>
            <img className='img-cartitems' src={require(`./images/watch wear/${item.image}`)} alt={item.name} width={260}/>
            <div className='content-s'>
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p><strike>{item.CostO}</strike></p><br />
            <button className='btn'>Buy Now</button>
            {/* ...additional item details... */}
            </div>
          </div>
        ))}


        {cartItems1.map((item1, index) => (
          <div className='cartItems1' key={index}>
            <img className='img-cartitems' src={require(`./images/mens wear/${item1.image}`)} alt={item1.name} width={260}/>
            <div className='content-one'>
            <h4>{item1.name}</h4>
            <p>Price: {item1.price}</p>
            <p><strike>{item1.CostO}</strike></p><br />
            <button className='btn'>Buy Now</button>
            {/* ...additional item details... */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
