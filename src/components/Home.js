import "./home.scss";
import logo from "../assets/logo.svg";
import femaleDeveloper from "../assets/femaleDev.jpg"

function Home () {

  return (
    <div className="home">
      <header>
        <img src={logo} className="logo"/>
      </header>
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