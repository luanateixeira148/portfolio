import "./hero.scss";
import PrimaryButton from '../PrimaryButton';

function Hero () {

  return (
    <div className="hero-container">
      <div className="hero">
        <main>
          <h3>HELLO, WORLD</h3>
          <h1>I'm Luana</h1>
          <p>A full-stack developer based in Vancouver</p>
          <PrimaryButton text={"HIRE ME"} />
        </main>
        <aside>
          <img src={process.env.PUBLIC_URL + "/images/lines-1.png"} />
        </aside>
      </div>
      
    </div>
  );

}

export default Hero;