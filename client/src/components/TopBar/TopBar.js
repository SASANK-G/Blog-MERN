import React from "react";
import "./TopBar.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebook className="topIcon" />
        <FaInstagram className="topIcon" />
        <FaPinterest className="topIcon" />
        <FaTwitter className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FaSearch className="topSearchIcon" />
      </div>
    </div>
  );
}

export default TopBar;
