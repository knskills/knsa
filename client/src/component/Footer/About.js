import React from "react";
import { Link } from "react-router-dom";
import Knsr from "../../component/Files/Course/KnSir2.jpg";

const About = () => {
  return (
    <>
      <div className="About-container">
        <div className="con-ab-nav">
          <Link to="/">HOME</Link> |<Link to="">ABOUT US</Link>
        </div>
        <div className="about-cont-flex d-flex">
          <div className="left-about-card">
            <h1>Our Vision: Democratization of the Training Fields</h1>
            <p>
              We believe that everyone has the right to quality trainings, so we
              strive to provide quality training at the lowest cost.’
            </p>

            <div className="about-quality">
              <p>
                The democratization of the education sector is closely related
                to four important pillars that include:
              </p>
              <ul>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-dot"></i> High-quality
                  Content
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-dot"></i> Training Pedagogy
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-dot"></i> 24/7 Support
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-dot"></i> Job Assistance
                </li>
              </ul>
            </div>
          </div>

          <div className="right-about-card">
            "KN_ACADEMY started from a passion we felt to give something back to
            society. We focus on value, not volume, so with us, you will get
            farther than talent.”
          </div>
        </div>

        <div className="company-own-details">
          <div className="left-own-side">
            <img src={Knsr} alt="" />
            <p>
              About Us 2 "At KN_ACADEMY, we focus on what, why, who and how.
              With an excellent line of trainings, a learner walks away with a
              smile and a deeper understanding of the concepts."
            </p>
          </div>

          <div className="right-own-side">
            <h1>Meet Kamal Narayan</h1>
            <h3>CEO & CMD, KN_ACADEMY</h3>

            <p>
              <b> Kamal Narayan</b> In a field such as network marketing,
              building and maintaining trust are some of the key components to
              being successful. Trust is an intangible asset that keeps everyone
              working towards a common goal and benefits each party. Without it,
              you won’t be able to move up the ladder. Not only do you have to
              build trust within your network but you also have to develop it
              with potential clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
