import "./home.scss";
import Header from "./Header";
import logo from "../assets/logo.svg";

function Home () {

  return (
    <div className="home">
      <Header />
      <main>
        <div className="intro">
          <h4 className="yellow">HELLO, WORLD!</h4>
          <h1 className="off-white">I am Luana</h1>
          <p className="off-white">A full stack developer <br />
              located in Vancouver.</p>
        </div>
        <div className="illustration">
          <div></div>
        </div>
      </main>
    </div>
  );

}

export default Home;