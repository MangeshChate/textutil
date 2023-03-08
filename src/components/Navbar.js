import React from 'react'
// import PropTypes from 'prop-types'
// import{ Link }from "react-router-dom"
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
       
        <div className="navbar " id="navbarSupportedContent">
         
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
          <div className="row mx-2" >
            <span className="" style={{ backgroundColor:"#252",borderRadius:"25rem" ,color:"#252",width:"2.5rem" ,height:"2.5rem ,"}} onClick={props.theme} > .</span>
          </div>
       
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === 'light' ? 'dark' : 'light'
              }`}
              tmlfor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.PropTypes = {title: PropTypes.string}
