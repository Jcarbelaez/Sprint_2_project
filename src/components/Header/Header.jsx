import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="top-header">
        <h1 className="title">
          The Travel/Agency <span id="title-span">®</span>
        </h1>
        <input className="login-btn" type="button" value="Sign in" />
        <nav>
          <ul className="navbar">
            <li>
              <a href="#" target="_blank">
                Hotels
              </a>
            </li>
            <li>
              <a href="https://www.vivaair.com/co/es" target="_blank">
                Experiences
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jcarbelaez_/" target="_blank">
                Flights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <input
        className="button"
        type="text"
        placeholder="Where are you going?"
      />
      <div className="header-container">
        <span>Travel with us.</span>
      </div>
      <h2 className="subtitle">Our recommendations</h2>
    </div>
  );
}

export default Header;
