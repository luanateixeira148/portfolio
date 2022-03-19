import "./about.scss";
import PrimaryButton from "../PrimaryButton";
import SectionTags from "../SectionTags";

function About () {
  
  return (
    <div className="about-container" id="about">

      <div className="about" >
        <main>
          <div className="bio">
            <h1 className="title">&lt; about &gt;</h1>
            <p>
              Born and raised in Brazil, I moved to Vancouver in 2017. Since then, life has been an adventure! I had to reinvent myself professionally, and that's how I discovered my interest for the digital world.
            </p>
            <p>
              With a passion for learning, I am fascinated with Human-Computer Interactions. I thrive when I can use my coding skills to create beautiful and intuitive user experiences. I have a background in UI/UX Design, though my expertise lies in simple yet effective web and mobile development.
            </p>
            <a 
              href={process.env.PUBLIC_URL + "/resume.pdf"} 
              target="_blank" 
              type="application/pdf"
              className="resume-link"
              >
              <PrimaryButton text={"RESUME (PDF)"} />
            </a>
          </div>
          <img 
            src={process.env.PUBLIC_URL + "/images/about-photo.png"} className="profile-photo"
            />
        </main>
      </div>

    </div>
  );

}

export default About;