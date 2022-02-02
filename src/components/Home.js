import "./home.scss";
import logo from "../assets/logo.svg";

function Home () {

  return (
    <div className="home">
      <main>
        <div className="intro">
          <h4 className="yellow">HELLO, WORLD!</h4>
          <h1 className="off-white">I am Luana</h1>
          <p className="off-white">A full stack developer located in Vancouver.</p>
        </div>
        <div className="illustration">
          <img src={logo} className="logo"/>
        </div>
      </main>
    </div>
  );

}

export default Home;