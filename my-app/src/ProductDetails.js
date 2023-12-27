import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ProductDetails.css';
import Nav from './Nav';
import { useStateValue } from './StateProvide';

function ProductDetails() {
    const[,disatch] = useStateValue();
    const location = useLocation();
    const item = location.state?.item;
    const [qnty, setQnty] = useState(1);
    function addtoBasket(){
        disatch({
            type : "ADD_TO_BASKET",
            item : {item, qnty}
        })
    }

    function paceorder(){
        disatch({
          type: "ORDER_PLACED",
          item : {item, qnty}
        });
    }

    function updateQnty(e){
      e.preventDefault();
      setQnty(parseInt(e.target.value));
    }

    return (
      <>
        <Nav />
        <img
          className="addbar"
          src="https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png"
          alt=""
        />
        
        <div className="productDetails">
          <img
            className="productDetails__image"
            src={`https://${item.imageUrl}`}
            alt=""
          />
          <div className="productDetails__info">
            <p>{item.name}</p>
            <div className="product__rating">
              {Array(5)
                .fill()
                .map((i) => (
                  <p>⭐</p>
                ))}
            </div>
            <p>
              {`M.R.P.:   `}
              <small>₹</small>
              <strong className="fake_product_price">
                {Math.floor(item.price.current.value * 82.74 + 1500)}
              </strong>
            </p>
            <p>
              {`Deal of the Day: `}
              <small>₹</small>
              <strong style={{ color: "red" }}>
                {Math.floor(item.price.current.value * 82.74)}
              </strong>
            </p>
            <small>Ends in 4 days</small>
            <br />
            <small>You Save: ₹1500 Inclusive of all taxes</small>
            <br />
            <br />
            <br />
            <p/>
            <label>Qty: </label>
            <select id="quantity" name="quantity" onChange={updateQnty}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <p/>
            <br />
            <br />
            <button onClick={() => addtoBasket()}>Add to Cart</button>
            <Link to="buynow" onClick={() => paceorder()}>
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default ProductDetails