import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Header (props) {

  return (
    <div className="header">
      <Link to="/portfolio">
        {(props.showBackIcon && 
          <FontAwesomeIcon icon={faAngleLeft} className="icon"/>
        )}
        </Link>
        <Link to="/portfolio">
          <img src={logo} className="logo"/>
        </Link>
    </div>
  );

}

export default Header;