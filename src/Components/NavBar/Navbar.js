import React from "react";
import Logo from "../../images/logo.png";
import navStyle from "./Navbar.module.css";
import searchPng from "../../images/search-icon.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={navStyle.Containers}>
      <div className={navStyle.Wrapper}>
        <div className={navStyle.logoWrapper}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={navStyle.searchWrapper}>
          <div>
            <img src={searchPng} alt="search" />
            <input
              type="search"
              name="search"
              placeholder={"Search for products"}
            />
          </div>
        </div>
        <div className={navStyle.navWrapper}>
          <div>
            <Link to="/how_it_work">{"How it work"} </Link>
            <Link to="/pricing">{"Pricing"} </Link>
          </div>
        </div>
        <div className={navStyle.btnWrapper}>
          <div>
            <Link className={navStyle.loginBtn} to={"#"}>
              {"Log in"}
            </Link>
            <Link className={navStyle.logoutBtn} to={"#"}>
              {"Log Out "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
