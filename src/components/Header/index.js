import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Header () {

  return (
    <div className="header">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className="icon"/>
        </Link>
        <Link to="/">
          <img src={logo} className="logo"/>
        </Link>
    </div>
  );

}

export default Header;