import React, { useContext, useState } from 'react'
import {LOGO_URL} from '../const/url';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../const/useOnlineStatus';
import UserContext from '../const/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header">
          <div className="logo-container">
            <img
              className="logo"
              src={LOGO_URL}
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Online Status:{onlineStatus ? "🟢" : "🔴"} </li>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About Us</Link></li>
              {/* <li><Link to='/contact' className='link'>Contact Us</Link></li> */}
              <li className='font-bold text-2xl'><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
              <li>{loggedInUser}</li>
            </ul>
          </div>
        </div>
      );
}

export default Header