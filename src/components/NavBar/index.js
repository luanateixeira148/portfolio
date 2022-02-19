import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../SideNav";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/portfolio/">
          <img 
            src={logo}
            className="logo" 
            onClick={() => setMenuOpen(false)}  
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/portfolio/projects" className="nav-link">
          <h6>Projects</h6>
        </Link>
        <HashLink to="/portfolio#about" className="nav-link">
          <h6>About</h6>
        </HashLink>
        <HashLink to="/portfolio#contact" className="nav-link">
          <h6>Contact</h6>
        </HashLink>
      </div>
      <div className="burger-menu" id="burger-menu">
        <FontAwesomeIcon 
          icon={faBars} 
          className="burger-menu-icon"
          onClick={() => setMenuOpen(true)}  
        />
      </div>
      {menuOpen && (
        <SideNav 
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  );
}

export default NavBar;