import "./about.scss";
import PrimaryButton from "../PrimaryButton";
import SectionTags from "../SectionTags";

function About () {
  
  return (
    <div className="about" id="about">
      <SectionTags 
        text={"< about >"}
      />
      <main>
        <div className="bio">
          <p>
            Born and raised in Brazil, I moved to Vancouver in 2017. Since then, life has been an adventure! I had to reinvent myself professionally, and that's how I discovered my interest for the <span>digital world</span>.
          </p>
          <p>
            With a passion for learning, I am fascinated with Human-Computer Interactions. I thrive when I can use my coding skills to create beautiful and intuitive user experiences. I have a background in UI/UX Design, though my expertise lies in simple yet effective <span>web and mobile development</span>.
          </p>
          <div className="about-button">
            <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" type="application/pdf">
              <PrimaryButton text={"RESUME (PDF)"} />
            </a>
          </div>
        </div>
        <img 
          src={process.env.PUBLIC_URL + "/images/luana.png"} className="profile-photo"
        />
      </main>
      <SectionTags 
        text={"</ about >"}
      />
    </div>
  );

}

export default About;