// Explore webinar and events
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExploreWebinar = () => {
  const [usersValue, setUsersValue] = React.useState("upcoming");
  const handleChange = (event) => {
    setUsersValue(event.target.value);
  };

  return (
    <>
      <div className="webinar-container">
        <div className="webinar-flex">
          <div className="webinar-nav">
            <Link to="/">HOME</Link> |<Link href="">WEBINAR</Link>
          </div>

          <div className="webinar-selection-radio d-flex">
            <div className="upcoming-webinare d-flex">
              <input
                value="upcoming"
                onChange={handleChange}
                checked={usersValue === "upcoming"}
                type="radio"
                name="upcoming"
                id="upcoming"
              />
              <label>Upcoming</label>
            </div>
            <div className="upcoming-webinare d-flex">
              <input
                value="events"
                onChange={handleChange}
                checked={usersValue === "events"}
                type="radio"
                name="events"
                id="events"
              />
              <label>Events</label>
            </div>
          </div>
        </div>

        <div className="webinar-flex-card">
          <div className="upcomings-card-data">No Upcoming Webinar...</div>
        </div>
      </div>
    </>
  );
};

export default ExploreWebinar;
