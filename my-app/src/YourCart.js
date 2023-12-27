import React from "react";
import { useStateValue } from "./StateProvide";
import "./YourCart.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";
function YourCart() {
  const [{ basket }, dispatch] = useStateValue();

  var totalPrice = 0;
  var cartSize = 0;

  for(let i = 0; i<basket.length; i++){
    totalPrice += Math.floor(parseInt(basket[i].item.price.current.value) * 82.74 * basket[i].qnty);
    cartSize += basket[i].qnty;
  }

  function proccedCheckout(){
      dispatch({
        type : "CHECKOUT__PRODUCT",
        items: ""
      })
  }

  return (
    <>
      <Nav />
      <div className="yourcart">
        <img
          className="yourcart__add"
          src="https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png"
          alt=""
        />
      </div>
      <div className="yourcart__info">
        {basket?.length === 0 ? (
          <div className="yourcart__info__no__items">
            <h1>Your Shoping Cart is Empty</h1>
            <p>
            <strong>
              You have no items in your cart. To buy one or more, click "Add to
              Cart" or "Buy Now" next to the item.
            </strong>
            </p>
          </div>
        ) : (
          <div className="yourcart__info__items">
            {/* list out all of the check out products */}
            {basket.length > 0 && (
              <div className="subtotal">
                <p>
                  Subtotal ({cartSize} items):
                  <strong>₹{totalPrice}</strong>{" "}
                </p>
                <small>
                  <input type="checkbox" /> This order contains a gift
                </small>
                <br></br>
                <br></br>
                <Link to="/buynow" onClick={() => proccedCheckout()}>
                  <button>Proceed to Checkout</button>
                </Link>
              </div>
            )}
            {basket.map((_item) => {
              return (
                <CheckoutProducts
                  id={_item.item.id}
                  title={_item.item.name}
                  price={
                    _item.item.price.current.value ? _item.item.price.current.value : 0
                  }
                  rating={5}
                  image={_item.item.imageUrl}
                  qnty = {_item.qnty}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default YourCart;
