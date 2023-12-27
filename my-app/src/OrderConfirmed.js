import React from 'react'
import Nav from './Nav'
import './OrderConfirmed.css'
function OrderConfirmed() {
  return (
    <>
        <Nav/>
        <img className='addbar' src='https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png' alt='' />
        <div className='oderConfirmed'>
              <h1>Your Order has Confirmed!</h1>
              
        </div>
    </>
  )
}

export default OrderConfirmed