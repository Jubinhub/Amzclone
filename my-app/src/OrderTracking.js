import React from 'react'
import Nav from './Nav'
import './OrderTracking.css'
import { useStateValue } from './StateProvide'
function OrderTracking() {
    const [{ returns_Order }, dispatch] = useStateValue();
    // console.log(returns_Order)
    function cancellOrder(id){
        dispatch({
            type:"CANCEL_ORDER",
            id : id
        })
    }
    return (
        <>
            <Nav />
            <div className='orderTracking'>
                <img className='orderTracking__ad' src='https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png' alt='' />
            </div>
            {returns_Order.length === 0 ? (
                <div className='orderTracking__noInfo'>
                    <h1>Looks like you haven't placed an order!</h1>
                </div>
            ) : (
                <div className='orderTrackingLists'>
                    <h1 className='orderTracking__Info'>Your Order list</h1>
                    <br/>
                    {returns_Order.map(item => {
                        return (
                            <>
                                <div className="orderTrackingLists__checkoutProducts">
                                    <img
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
                                            <strong style={{ color: "red" }}>{Math.floor(item.price.current.value * 82.74)}</strong>
                                        </p>
                                        <br/>
                                        <br/>
                                        <h3>OrderConfirmed</h3>
                                        <h2>Preparing for dispatch...</h2>
                                        <br/>
                                        <br/>
                                        <button onClick={()=>cancellOrder(item.id)}>Cancel this order!</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>)
            }
        </>
    )
}

export default OrderTracking