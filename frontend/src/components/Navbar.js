import React, { useState } from "react";
import "./style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {ChevronDownIcon} from '@heroicons/react/outline'

import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

const Navbar = () => {
const userSignin  = useSelector((state) => (state.userSignin));
const {userInfo} = userSignin
const [showMediaIcons, setShowMediaIcons] = useState(false);
const dispatch = useDispatch();

const signoutHandler =()=>{
dispatch(signout())
}

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo ">
          <NavLink to="/">
          <h2>
            <span>T</span>he <span>W</span>orld
            <span>C</span>ar
          </h2>
          </NavLink>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li>
              <NavLink to="/"  >Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/showroom">Showroom</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>

          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            {/* <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li> */}

            <li className="text-light ">
              {
                userInfo ? (
                  <div className="dropdown">
                  <Link className={'text-white mx-3'} to="#">{userInfo.name}
                   <ChevronDownIcon  className="arrow-drop"/></Link>
                   <ul className="dropdown-content">
                     <Link to="#signout" onClick={signoutHandler}>
                       Sign Out
                     </Link>
                   </ul>
                   </div>
                ):(
                  <Link className={'text-white '} to="/login"></Link>
                )
              }

            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu className="menu-icon"/>
            </a>
          </div>

        </div>
      </nav>


    </>
  );
};

export default Navbar;
