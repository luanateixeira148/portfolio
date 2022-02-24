import "./hero.scss";

function Hero () {

  return (
    <div className="hero">
      <main>
        <div className="intro">
          <h1 className="upper-title">HELLO, WORLD!</h1>
          <h1 className="title-name">I'm Luana</h1>
          <p className="subtitle">
            I'm a junior <span>full-stack developer</span> based in Vancouver.
          </p>
        </div>
      </main>
      <sidebar className="illustration">
        {/* tbd */}
      </sidebar> 
    </div>
  );

}

export default Hero;