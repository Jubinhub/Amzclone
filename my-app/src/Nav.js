import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvide.js';
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

function Nav() {
  const[inputTxt, setinputTxt] = useState("");
  const [{ basket }] = useStateValue();
  let _cartSize = 0;
  for(let i = 0; i< basket.length; i++){
    _cartSize += basket[i].qnty; 
  }

  function searchItems(){
    console.log(inputTxt);
  }

  return (
    <nav className="navBar">
      {/* logo   */}
      <Link to="/homePage">
        <img
          className="navBar__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonLogo"
        />
      </Link>

      {/* searchField */}
      <div className="navBar__searchFiled">
        <input  className="navBar__searchFiled__InputFiled" type="text" onChange={(e)=>setinputTxt(e.target.value)}/>
        <button className="navBar__searchFiled__searchbtn"  onClick={searchItems}><SearchIcon/></button>      
      </div>

      <div className="navBar__optionsField">
        {/* signin */}
        <Link to="/youraccount" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option">
            <span className="lightTxt">Hello, Admin</span>
            <span className="boldTxt">Account & List</span>
          </div>
        </Link>

        {/* Returns & Order */}
        <Link to="/orderSummary" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option">
            <span className="lightTxt">Returns</span>
            <span className="boldTxt">& Order</span>
          </div>
        </Link>

        {/* yourCart */}
        <Link to="/cart" className="navBar__optionsField__link">
          <div className="navBar__optionsField__option_cart">
            <span>
              <ShoppingCartSharpIcon/>
            </span>
            <span className="boldTxt">{_cartSize}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav