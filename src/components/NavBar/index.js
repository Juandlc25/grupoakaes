import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);

  return (
    <div className="navbar">
      <img
        onClick={() => setClick(false)}
        className="navbar__logo"
        alt="logo"
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQGRA0LbzGZV2A/company-logo_200_200/0/1575909643396?e=2159024400&v=beta&t=jqAzaBDcTTct-p_6HGdHBIoEhBY88Fh0TVlMr4iClXo"
      />

      <div className="navbar__menuIcon" onClick={() => setClick(!click)}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "navbar__menu active" : "navbar__menu"}>
        <li className="navbar__item">
          <Link
            to="/"
            className="navbar__links"
            onClick={() => setClick(false)}
          >
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/avianca"
            className="navbar__links"
            onClick={() => setClick(false)}
          >
            Avianca
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/vivair"
            className="navbar__links"
            onClick={() => setClick(false)}
          >
            Vivair
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
