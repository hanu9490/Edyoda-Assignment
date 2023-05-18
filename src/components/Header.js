import { useState } from "react";
import { Button } from "@mui/material";
import "./Header.css";
const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo1">
            <img alt="" src="/edyoda-icon.svg" />
          </div>
          <div>
            <Button>Courses</Button>
          </div>
          <div>
            <Button>Programs</Button>
          </div>
        </div>
        <div className="left-content">
          <img className="search-icon" alt="" src="/search-icon.svg" />
          <div className="log-in">
            <div className="text7">Log in</div>
          </div>
          <div className="primary-button1">
            <b className="text8">join now</b>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
