import React from "react";
import CountScroll from "./CountScroll";
import NavLogo from "../../CompLogo.jpg";
import { Link } from "react-router-dom";
import fb from "../Files/SocialMedia/fb.png";
import inst from "../Files/SocialMedia/inst.jpg";
import lin from "../Files/SocialMedia/lin.png";
import twt from "../Files/SocialMedia/twt.png";
import ytb from "../Files/SocialMedia/ytb.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-part">
          <CountScroll />
        </div>

        <div className="upper-footer d-flex">
          <div className="logo-section">
            <Link
              className="navbar-brand text-decoration"
              title="Yashika Grow Skills"
              to="/"
            >
              <img src={NavLogo} alt="Yashika Future " />
            </Link>

            <div className="add-section">
              <p>KN_ACADEMY, Near Shankar Nagar Raipur Chhattisgarh - 492001</p>
            </div>
            <div className="social-media d-flex">
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="Facebook" />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <img src={inst} alt="Facebook" />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <img src={lin} alt="Facebook" />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                <img src={twt} alt="Facebook" />
              </Link>
              <Link
                to="https://www.youtube.com/@kamalnarayansahuytm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ytb} alt="Facebook" />
              </Link>
            </div>
          </div>

          <div className="footer-section d-flex">
            <div className="footer-details margin-left-right">
              <h3>IMPORTANT LINKS</h3>
              <ul>
                <Link target="_top" to="/learner/entrepreneur-teach">
                  <li>
                    <i className="fa-solid fa-microphone-lines"></i>
                    Teach With Us
                  </li>
                </Link>

                <Link target="_top" to="/community/join_community">
                  <li>
                    <i className="fa-regular fa-handshake"></i> Join Our Community
                  </li>
                </Link>

                <Link target="_top" to="/trainings/users-mentorship">
                  <li>
                    <i className="fa-solid fa-business-time"></i> 1 : 1 Mentorship
                  </li>
                </Link>

                <Link target="_top" to="/users/register">
                  <li>
                    <i className="fa-solid fa-spa"></i> Subscribe Now
                  </li>
                </Link>

                <Link target="_top" to="/users/register">
                  <li>
                    <i className="fa-solid fa-piggy-bank"></i> Support Us
                  </li>
                </Link>

                <Link to="">
                  <li>
                    <i className="fa-solid fa-blog"></i>
                    Blogs
                  </li>
                </Link>
              </ul>
            </div>

            <div className="contact-privacy">
              <div className="footer-details margin-left-right">
                <h3>KNLA ABOUT</h3>
                <ul>
                  <Link target="_top" to="/kna_contact/contact_us">
                    <li>
                      <i className="fa-brands fa-teamspeak"></i> Contact Us
                    </li>
                  </Link>
                  <Link target="_top" to="/kna_about/about_us">
                    <li>
                      <i className="fa-regular fa-address-card"></i> About Us
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Policy */}
              <div className="footer-details margin-left-right">
                <h3>KNLA POLICY</h3>
                <ul>
                  <Link target="_top" to="/kna_privacy-policy/privacy_policy">
                    <li>
                      <i className="fa-solid fa-shield"></i>
                      Privacy & Policy
                    </li>
                  </Link>
                  <Link target="_top" to="/kna_terms-condition/terms_condition">
                    <li>
                      <i className="fa-solid fa-fan"></i>
                      Terms & Condition
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Master Training - Skills */}
            <div className="footer-details margin-left-right">
              <h3>Master Training</h3>
              <ul>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    Network Marketing
                  </li>
                </Link>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    Motivational Talks
                  </li>
                </Link>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    Leadership Skills
                  </li>
                </Link>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    People Skills
                  </li>
                </Link>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    Selling Skills
                  </li>
                </Link>
                <Link target="_top" to="/trainings/trainings_category">
                  <li>
                    <span
                      className="fa fa-star checked"
                      aria-hidden="true"
                    ></span>
                    Public Skills
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="lower-footer d-flex">
          <div className="left-footer footer-section">
            Call Our Trainer Advisors &#9742; IND : +91-75829-18000 TEL :
            088177-52441 (Toll Free)
          </div>
          <div className="right-footer footer-section">
            Copyrights 2023 &#169; KN_ACADEMY. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
