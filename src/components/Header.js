import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { LocationCityOutlined, LocationOn, ShoppingBasket, SportsBasketball } from "@material-ui/icons";
import {useStateValue} from "./StateProvider";
import { auth } from "../Firebase";
function Header() {

    const [{basket,user},dispatch] = useStateValue();

    const logOut = () => {
      if(user){
        auth.signOut();
      }
    }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/2560px-Amazon-logo-white.svg.png"
          alt=""
        />
       
      </Link>
      <Link className="header_link">
        <div className="header_option">
            <span style={{marginLeft:"25px"}} className="header_optionLineOne">Hello</span>
            <div style={{display:"flex", flexDirection:'row'}}>
            <LocationOn/>
            <span className="header_optionLineTwo">Select Your Address</span>
            </div>
           
          </div>
        </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"} className="header_link">
          <div onClick={logOut} className="header_option">
            <span className="header_optionLineOne">Hello, {!user ? 'Sign in': user?.email}</span>
            <h6 className="header_optionLineTwo">Account & List</h6>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
                <ShoppingBasket/>
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
