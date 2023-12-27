import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.js'
import './ViewAccount.css'
import yourorderlogo from "./urorder.png";
import profilelogo from "./prfile.png";
import msglogo from "./msg.png";
import cstmrlogo from "./cstmr.png";
function ViewAccount() {
  return (
    <>
      <Nav />
      <div className="viewAccount">
        <h2>Your Account</h2>
        <div className="boxes">
          <Link className="box__info" to="/orderSummary">
            <img className="box__info__image" src={yourorderlogo} alt="" />
            <div>
              <h3>Your Orders</h3>
              <p>Track, return, or buy things again</p>
            </div>
          </Link>
          <Link className="box__info" to = '/myProfile__page'>
            <img className="box__info__image" src={profilelogo} alt="" />
            <div>
              <h3>Your Profiles</h3>
              <p>
                Manage, add, or remove user profiles for personalized
                experiences
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ViewAccount