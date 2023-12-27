import './Product.css'
import React from 'react'
import { Link } from 'react-router-dom';
function Product({item}) {
  return (
    <Link className='product' to='/productdetails' state = {{item: item}}>
    <div>
      <div className="product__info">
          <p>{item.name}</p>
        <p className="product_price">
          <small>₹</small>
            <strong>{Math.floor(item.price.current.value * 82.74)}</strong>
        </p>
        <div className="product__rating">
          {Array(5)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
        <img src={`https://${item.imageUrl}`} alt="" />
    </div>
    </Link>
  );
}

export default Product