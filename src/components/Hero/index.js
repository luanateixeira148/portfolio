import "./hero.scss";
import PrimaryButton from '../PrimaryButton';
import SocialIcons from "../SocialIcons";

function Hero () {

  return (
    <div className="hero-container">
      <div className="hero">
        <main>
          <h3>HELLO, WORLD!</h3>
          <h1>I'm Luana</h1>
          <p>A full-stack developer based in Vancouver</p>
          <a
            href="https://calendly.com/luanateixeira148/30min"
            target="_blank" 
          >
            <PrimaryButton text={"LET'S TALK"} />
          </a>
        </main>
        <aside>
          <div className="img-container">  
            <img src={process.env.PUBLIC_URL + "/images/lines-1.png"} />
          </div>
          <div className="social-icons-container">
            <SocialIcons />
          </div>
        </aside>
      </div>
      
    </div>
  );

}

export default Hero;