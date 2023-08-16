import React, { useState } from "react";

const video1 = require("./Files/Home/video1.mp4");
const video2 = require("./Files/Home/video2.mp4");
const video3 = require("./Files/Home/video3.mp4");

const IntroVideo = () => {
  const [handleAdminTag, setHandleAdminTag] = useState(1);
  const handleAdmin = (e) => {
    setHandleAdminTag(e);
  };

  return (
    <>
      <div className="visible-clone">
        <h6>Chess Your Future With - KN_ACADEMY!</h6>
        <div className="skill-visible d-flex">
          <div className="zoom-section d-flex">
            {/* 1 */}
            {handleAdminTag === 1 && (
              <div className="video-section">
                <video className="faded-zoom1" controls>
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
            )}

            {/* 2 */}
            {handleAdminTag === 2 && (
              <div className="video-section">
                <video className="faded-zoom1" controls>
                  <source src={video2} type="video/mp4" />
                </video>
              </div>
            )}

            {/* 3 */}
            {handleAdminTag === 3 && (
              <div className="video-section">
                <video className="faded-zoom1" controls>
                  <source src={video3} type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          <div className="zoom-controller">
            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={() => handleAdmin(1)}
            >
              <div className="zoom-data d-flex d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Two types of Character In Network Marketing</p>
              </div>
              <div className="zoom-srink">00:08:39</div>
            </div>

            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={() => handleAdmin(2)}
            >
              <div className="zoom-data d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Always be Gratitude</p>
              </div>
              <div className="zoom-srink">00:01:02</div>
            </div>

            {/* First Control */}
            <div
              className="zoom-duration cursor-pointer d-flex flex-no-wrap"
              onClick={() => handleAdmin(3)}
            >
              <div className="zoom-data d-flex">
                <i className="fa fa-caret-right play-i " aria-hidden="true"></i>
                <p>Who remains silent does not get success</p>
              </div>
              <div className="zoom-srink">00:01:48</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
