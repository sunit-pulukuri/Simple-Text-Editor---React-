import React from "react";
// import { useState } from "react";
import PropTypes from "prop-types";
// import Textarea from "./Textarea";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.bgClr}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {props.home}
              </Link>
            </li>
          </ul>
        </div> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="form-check form-switch" onClick={props.toggleMode}>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
          onClick={props.toggleMode}
          style={{ display: "flex" }}
        >
          Dark Mode
        </label>
      </div>
      {/* <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="greenRadio"
          value="green"
          checked={props.bgClr === "green"}
          onChange={props.handleThemeChange}
        />
        <label className="form-check-label" htmlFor="greenRadio">
          Green Theme
        </label>
      </div> */}
      {/* <div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="blue" defaultChecked />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Blue Theme
  </label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="red" defaultChecked />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Red Theme
  </label>
</div> */}
    </nav>
  );
}

// Navbar.defaultProps={
//     title: "Set title",
//     aboutText: "Set About text",
//     more:"Set more text"
// }
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  more: PropTypes.string,
  bgClr: PropTypes.string,
};
