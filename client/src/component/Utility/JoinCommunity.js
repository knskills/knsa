import React from "react";

const JoinCommunity = () => {
  return (
    <>
      <div className="community-container">
        <div className="community-flex">
          <form className="community-form">
            <p>The Best of Billioner with KNA!</p>
            <div className="community-name community-input">
              <label>Full Name</label>
              <input placeholder="Full Name" type="text" />
            </div>
            <div className="community-email community-input">
              <label>Email</label>
              <input placeholder="Enter Email" type="email" />
            </div>
            <div className="community-contact community-input">
              <label>Contact</label>
              <input placeholder="Contact Details" type="tel" />
            </div>
            <div className="community-subject community-input">
              <label>Related Subject</label>
              <input placeholder="Related Subject upto 20 words" type="text" />
            </div>
            <div className="community-purpose community-input">
              <label>Community Purpose</label>
              <input
                placeholder="Community Purpose upto 100 words"
                type="text"
              />
            </div>
            <button>JOIN NOW</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
