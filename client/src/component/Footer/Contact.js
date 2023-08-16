import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="con-ab-nav">
          <Link to="/">HOME</Link> |<Link to="">CONTACT</Link>
        </div>

        <div className="contact-cont-flex">
          <form>
            <div className="contact-f-name">
              <label>
                Full Name*
                <input placeholder=" Full Name*" type="text" />
              </label>
            </div>

            <div className="contact-f-name">
              <label>
                Email*
                <input placeholder="Email*" type="email" />
              </label>

              <label>
                Mobile Number*
                <input placeholder="Mobile Number" type="tel" />
              </label>
            </div>

            <div className="contact-f-name">
              <label>
                Describe Your Training Needs
                <textarea
                  placeholder="Describe Your Training Needs"
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
            </div>

            <button>Send Message</button>

            <div className="contact-terms-con">
              <p>
                By providing your contact details, you agree to our{" "}
                <Link to="/kna_terms-condition/terms_condition">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link to="/kna_privacy-policy/privacy_policy">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>

          <div className="contact-details-form">
            <h2>For any query contact us</h2>

            <div className="contact-details-card">
              <b>contact@knla.in</b>
              <div style={{ marginTop: "5px" }}>
                Call Our Trainer Advisors
                <p>☎ IND : +91-75829-18000 TEL : 088177-52441 (Toll Free)</p>
              </div>
            </div>

            <div className="contact-address-form">
              <h2>Chhattisgarh India</h2>
              <h4>HEADQUARTER</h4>
              <p>KN_ACADEMY, Near Shankar Nagar Raipur Chhattisgarh - 492001</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
