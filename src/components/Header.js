import "./header.scss";
import logo from "../assets/logo.svg";

function Header () {

  return (
    <div className="header">
        <img src={logo} className="logo"/>
    </div>
  );

}

export default Header;