import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom' 
import Nav from './Nav'
function Profile() {
  return (
    <>
    <Nav/>
    <div className='profile'>
          <h2>Manage your Profiles</h2>
          <br/>
          <p>Amazon programs may use these profiles to provide user details</p>
          <br/>
          <hr/>
          <br/>
          <p>Admin</p>
          <p>Active Profile</p>
          <br/>
          <hr/>
          <br/>
          <p>Adress1 : ****</p>
          <p>Adress2 : ****</p>
          <p>Adress3 : ****</p>
          <p>card1  : ****445</p>
          <p>card3  : ****271</p>
          <p>Contact No : +91-123456789</p>
          <p>Active Profile</p>
          <br/>
          <hr/>
          <br/>
          <Link  to = '/'>
          <button >Logout?</button>
          </Link>
    </div>
    </>
  )
}

export default Profile