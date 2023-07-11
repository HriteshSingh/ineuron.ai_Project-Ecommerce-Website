import React from 'react';

export default function ShopCom({ addToCart, addToCart1 }) {
    const handleOnClick1 = (item) => {
        addToCart(item);
      };
  const handleOnClick = (item1) => {
    addToCart1(item1);
  };

  const items1 = [
    {
      name: 'Airpods',
      price: 'Rs. 5000',
      quantity: 1,
      image: 'watch.jpg',
      CostO: 'Rs. 9,000.00'
    },
    {
      name: 'Andriod Watch',
      price: 'Rs. 1200',
      quantity: 1,
      image: 'andriod-watch.jpg',
      CostO: 'Rs. 2,000.00'
    },
    {
      name: 'Smart Watch',
      price: 'Rs. 2000',
      quantity: 1,
      image: 'smart-watch.jpg',
      CostO: 'Rs. 2,500.00'
    },
    {
      name: 'Sandals',
      price: 'Rs. 500',
      quantity: 1,
      image: 'sandals.jpg',
      CostO: 'Rs. 800.00'
    },
    {
      name: 'Oppo Pods',
      price: 'Rs. 900',
      quantity: 1,
      image: 'new pods.jpg',
      CostO: 'Rs. 1,000.00'
    },
  ];

  const items = [
    {
      name: 'ELYYORK MEN Shirt',
      price: 'Rs. 279',
      quantity: 1,
      image: '1.jpg',
      CostO: 'Rs. 300.00'
    },
    {
      name: "ELYYORK MEN's Cotton Full Sleeve..",
      price: 'Rs. 300',
      quantity: 1,
      image: '3.jpg',
      CostO: 'Rs. 500.00'
    },
    {
      name: 'ELYYORK MEN Shirt',
      price: 'Rs. 279',
      quantity: 1,
      image: '2.jpg',
      CostO: 'Rs. 300.00'
    },
    {
      name: "ELYYORK MEN's Cotton Full Sleeve..",
      price: 'Rs. 450',
      quantity: 1,
      image: '4.jpg',
      CostO: 'Rs. 800.00'
    },
    {
      name: 'ELYYORK MEN Shirt',
      price: 'Rs. 350',
      quantity: 1,
      image: '5.jpg',
      CostO: 'Rs. 500.00'
    },
  ];

  return (
    <>
        <h2 className='head1'>Today's Deals</h2>
        <br />
        <div className="shopContainer">
          {items1.map((item, index) => (
            <div className="shopItems" key={index}>
              <img src={require(`./images/watch wear/${item.image}`)} alt=""/>
              <div className="content">
                <h4><span className='highlyt'>{item.price}/-</span></h4>
                <h5><span className='text-red'><strike>{item.CostO}</strike></span></h5>
                <p>{item.name}</p><br />
                <button className='btn'>Buy Now</button>
                <button className='btn1' onClick={() => handleOnClick1(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      <br /><br />


      <div className="mens"></div>
        <h2 className='head1'>Men's Wear</h2>
        <br />
        <div className="shopContainer">
          {items.map((item1, index) => (
            <div className="shopItems" key={index}>
              <img src={require(`./images/mens wear/${item1.image}`)} alt="" width={160} />
              <div className="content">
                <h4><span className='highlyt'>{item1.price}</span></h4>
                <h5><span className='text-red'><strike>{item1.CostO}</strike></span></h5>
                <p>{item1.name}</p><br />
                <button className='btn'>Buy Now</button>
                <button className='btn1' onClick={() => handleOnClick(item1)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      <br /><br />
    </>
  );
}
