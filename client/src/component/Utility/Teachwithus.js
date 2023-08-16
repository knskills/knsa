//
import React from "react";
import Register from "../Navbar/Register";
import teachWithus from "./Trainings/TrainingsFiles/teachWith.jpg";

const Teachwithus = () => {
  return (
    <>
      <div className="tought-container">
        <div className="tought-flex">
          <div className="prenuer-banner">
            <img className="mentor-images" src={teachWithus} alt="" />
          </div>
          <div className="teach-crousel">
            <Register />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachwithus;
