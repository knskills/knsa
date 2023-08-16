// Explore webinar and events
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpcomingTrainings = () => {
  const [usersValue, setUsersValue] = React.useState("upcoming");
  const handleChange = (event) => {
    setUsersValue(event.target.value);
  };

  return (
    <>
      <div className="webinar-container">
        <div className="webinar-flex">
          <div className="webinar-nav">
            <Link href="/">HOME</Link> |<Link href="">ALL WEBINARS </Link>
          </div>
        </div>

        <div className="webinar-flex-card">
          <div className="upcomings-card-data">No Upcoming Webinar...</div>
        </div>
      </div>
    </>
  );
};

export default UpcomingTrainings;
