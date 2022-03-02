import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import "./desktop.scss";

function DesktopNavBar() {
  
  // let listener = null
  // const [scrollState, setScrollState] = useState("top")

  // useEffect(() => {
  //   listener = document.addEventListener("scroll", e => {
  //     var scrolled = document.scrollingElement.scrollTop
  //     if (scrolled >= 120) {
  //       if (scrollState !== "amir") {
  //         setScrollState("amir")
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top")
  //       }
  //     }
  //   })
  //   return () => {
  //     document.removeEventListener("scroll", listener)
  //   }
  // }, [scrollState])

  return (
    <div className="desktop-navbar">
      <Link 
        to="/portfolio/projects" 
        className="nav-link"
      >
        <h6>Projects</h6>
      </Link>
      <HashLink 
        to="/portfolio#about" 
        className="nav-link" 
      >
        <h6>About</h6>
      </HashLink>
      <HashLink 
        to="/portfolio#contact" 
        className="nav-link"
      >
        <h6>Contact</h6>
      </HashLink>
      <a 
        href={process.env.PUBLIC_URL + "/resume.pdf"} 
        target="_blank" 
        type="application/pdf"
        className="nav-link"
      >
        <h6>Resume</h6>
      </a>
    </div>
  );
}

export default DesktopNavBar;