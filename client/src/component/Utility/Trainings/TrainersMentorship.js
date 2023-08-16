// Trainers and mentorship Registetraiton Form
import React from "react";
import mentorThink from "../Trainings/TrainingsFiles/mentoCard.jpg";
import mentorBanner from "./TrainingsFiles/mentoBanner.jpg";
const TrainersMentorship = () => {
  return (
    <>
      <div className="mentorship-banner">
        <div className="mentorship-flex">
          <div className="mentor-banner">
            <img className="mentor-images" src={mentorBanner} alt="" />
          </div>
          <div className="tutor-mentor">
            <div className="mentor-think">
              <img src={mentorThink} alt="" />
            </div>

            <form className="mentor-form" action="">
              <p>We are just a Partner</p>
              <div className="mentor-input mento-ship-category">
                <label>Get Mentorship</label>
                <select
                  className="trainings-reg-category"
                  // value={trainFields}
                  // onChange={(e) => setTrainFields(e.target.value)}
                  name="trainingstage"
                  id="trainingstage"
                >
                  <option defaultValue="Select">Select</option>
                  <option value="NETMA"> Network Marketing </option>
                  <option value="MOTIVATE"> Motivation </option>
                  <option value="LEADER"> Leadership </option>
                  <option value="SALES_COATCH"> Sales Coaching </option>
                  <option value="DIGIMA"> Digital Marketing </option>
                  <option value="HEALTH"> Health & Welness </option>
                </select>
              </div>

              <div className="mentor-input mentor-nam">
                <label>Your Full Name</label>
                <input type="text" />
              </div>

              <div className="mentor-input mentor-contact">
                <label>Contact No</label>
                <input type="text" />
              </div>

              <div className="mentor-input mentor-more-about">
                <label>More About</label>
                <textarea name="mentor-bind" id="mento" cols="40" rows="1" />
              </div>

              <div className="mentor-btn btn-flex">
                <button>Connect With us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainersMentorship;
