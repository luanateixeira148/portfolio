import "./home.scss";
import Header from './Header';

function Home () {

  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main>
        <div className="intro">
          <h1 className="upper-title yellow">HELLO, WORLD!</h1>
          <h1 className="title-name off-white">I am Luana</h1>
          <p className="subtitle off-white">
            A <mark>full stack developer</mark> based in Vancouver, Canada.</p>
        </div>
      </main>
    </div>
  );

}

export default Home;