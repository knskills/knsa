import React from "react";

const video1 = require("./Files/Home/video1.mp4");
const video2 = require("./Files/Home/video2.mp4");
const video3 = require("./Files/Home/video3.mp4");

const rawHome = () => {
  const [fade, setFade] = useState(false);
  const triggerFade = () => {
    setFade((prevState) => {
      return !prevState;
    });
  };

  const triggerFade1 = () => {
    setFade((prevState) => {
      return !prevState;
    });
  };

  const triggerFade2 = () => {
    setFade((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <div className="visible-clone">
        <h6>Chess Your Future With - KN_ACADEMY!</h6>
        <div className="skill-visible d-flex">
          <div className="zoom-section d-flex">
            {/* 1 */}
            <div className="video-section">
              <video className={fade ? "faded-zoom" : ""} controls>
                <source src={video1} type="video/mp4" />
              </video>
            </div>

            {/* 2 */}
            <div className="video-section">
              <video className={fade ? "faded-zoom" : "visible-zoom"} controls>
                <source src={video2} type="video/mp4" />
              </video>
            </div>

            {/* 3 */}
            <div className="video-section">
              <video className={fade ? "faded-zoom" : "visible-zoom"} controls>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="zoom-controller">
            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={triggerFade}
            >
              <div className="zoom-data d-flex d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Achieve Your Luxury Life</p>
              </div>
              <div className="zoom-srink">00:12:05</div>
            </div>

            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={triggerFade1}
            >
              <div className="zoom-data d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Achieve Your Luxury Life</p>
              </div>
              <div className="zoom-srink">00:12:05</div>
            </div>

            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={triggerFade2}
            >
              <div className="zoom-data d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Achieve Your Luxury Life</p>
              </div>
              <div className="zoom-srink">00:12:05</div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default rawHome;
