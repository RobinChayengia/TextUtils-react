import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Navbar(props) {
  
    // document.body.style.backgroundColor="red";
  
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              < a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
             
          </ul>

          <div className="dropdown mx-4">
            <button className="btn-nav btn-primary dropdown-toggle" id="drop_button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Colored Background
            </button>
            <ul className="dropdown-menu">
              <li ><a className="dropdown-item"  href="/"  onClick={props.greenTheme} style={{ backgroundColor: "green" }}> <div className="form-check" style={{ backgroundColor: "green" }}>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  style={{backgroundColor:"green"}}/>
                {/* <label className="form-check-label" htmlFor="exampleRadios1"  > */}
                  {/* </label> */}Green
                  
              </div></a> </li>
              
              <li ><a className="dropdown-item" onClick={props.redMode} href="/" style={{ backgroundColor: "red" }}>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" style={{ backgroundColor: "red"}}   />
                  Red
                </div></a></li>
              <li ><a className="dropdown-item" onClick={props.yellowTheme} href="/" style={{ backgroundColor: "yellow" }}>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{backgroundColor:"yellow" }} />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                    </label>yellow
                </div></a></li>
            </ul>
          </div>

          <div className={`form-check form-switch mx-2 text-${props.btnToggleTheme} `}>
            <input  className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnToggleText} </label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn-nav btn-primary" type="submit">Search</button>
          </form>
         
        </div>
      </div>
    </nav>
   
    
);
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };
// Navbar.defaultProps = {
//   title: "Set Title Here",
//   aboutText: "About Utils3 Here",
// };
