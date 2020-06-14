import React, { Component } from "react";
import Logo from "../../images/logo.png";
import navStyle from "./Navbar.module.css";
import searchPng from "../../images/search-icon.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  handleNav = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div
        className={
          this.state.toggle
            ? [navStyle.Containers, navStyle.overflow].join(" ")
            : navStyle.Containers
        }
      >
        <div className={navStyle.Wrapper}>
          <div className={navStyle.logoWrapper}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div className={navStyle.sideBar} onClick={this.handleNav}>
              <i className="fas fa-bars" />
            </div>
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
          <div
            className={
              this.state.toggle
                ? navStyle.navWrapper
                : [navStyle.navWrapper, navStyle.slider].join(" ")
            }
          >
            <div className={navStyle.cross} onClick={this.handleNav}>
              <i className="fas fa-times"></i>
            </div>

            <div className={navStyle.linkWrapper} >
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
  }
}

export default Navbar;
