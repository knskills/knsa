import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper/helper";
import { Link, useParams } from "react-router-dom";
import usersAvatar from "../Files/Home/avatar.png";

const SingleTrainers = () => {
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  const [siUsersData, setSiUsersData] = useState("");
  console.log("siUsersData", siUsersData);

  useEffect(() => {
    const id = params.id;
    axios
      .get(`${BASE_URL}/users/getsingle-users/${id}`)
      .then((res) => {
        console.log("single-res-data", res.data.data);
        setSiUsersData(res.data.data);
      })
      .catch((err) => {
        console.log("geterr", err);
      });

    setRefresh(!refresh);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="single-trainers-containers">
        <div className="single-tr-flex">
          <div className="trainers-nav-list">
            <Link className="single-home" to="/">
              Home
            </Link>
            <i className="fa-solid fa-grip-lines-vertical"></i>
            <p className="single-name">{siUsersData.usersName}</p>
          </div>

          <div className="single-trainers-card">
            <div className="single-trns-top">
              <div className="single-avatar">
                <img
                  className="card-banner border-radius-5px"
                  src={
                    `${BASE_URL}/${siUsersData?.avatar}`
                      ? `${BASE_URL}/${siUsersData?.avatar}`
                      : { usersAvatar }
                  }
                  alt={`${siUsersData.usersName}`.slice(0, 25)}
                />
                <p>{`${siUsersData.usersMembers}`.slice(0, 30)}</p>
                <b>{`${siUsersData.usersHeading}`.slice(0, 30)}</b>
              </div>

              <div className="single-details-card">
                <h1>{`${siUsersData.usersName}`.slice(0, 25)}</h1>
                <b>{`${siUsersData.trainingType}`.slice(0, 30)}</b>

                <p>
                  <i className="fa-solid fa-graduation-cap"></i>
                  {`${siUsersData.usersEdu}`.slice(0, 100)}
                </p>

                <p>
                  <i className="fa-solid fa-trophy"></i>
                  {`${siUsersData.usersAward}`.slice(0, 100)}
                </p>
                <p>
                  <i className="fa-solid fa-award"></i>
                  {`${siUsersData.usersExpe}`.slice(0, 100)} Experiece
                </p>
                <p>
                  <i className="fa-solid fa-handshake-angle "></i> Total
                  Trainings :{`${siUsersData.usersTotalTrain}`.slice(0, 100)}
                </p>
                <p className="si-more-details">
                  {`${siUsersData.usersAbout}`.slice(0, 500)}
                </p>
                <p>We are join from {`${siUsersData.date}`.slice(0, 30)}</p>
              </div>
            </div>

            <div className="single-trns-bottom">
              <div className="single-media-nav">
                <div className="single-trns-media">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-square-instagram"></i>
                </div>

                <div className="single-paid-trainings-data">
                  <p>
                    <i className="fa-solid fa-chalkboard-user"></i> 6 Students
                  </p>
                  <p className="p-l-r-10 ">
                    <i className="fa-solid fa-book-open-reader"></i>4 Courses
                  </p>
                  <p>
                    <i className="fa-regular fa-star"></i> 4.5 Ratings
                  </p>
                </div>

                <div className="single-trns-followers">
                  <p>
                    2 Followers <Link to="">Follow Us</Link>
                  </p>
                </div>
              </div>

              <div className="single-trns-trng-card">
                <div className="single-trns-popular-courses">
                  <div className="single-trns-trng-heading">
                    <h2>Popular Trainings</h2>
                    <div className="Explore-all-trainings">
                      <Link to="/">Explore All Trainings</Link>
                    </div>
                  </div>
                  No Populars Trainins yet
                </div>

                <div className="single-trns-trng-right-pan">
                  <div className="single-trns-trng-updated">
                    <h2>Updates</h2>
                    <div className="upcomings-updates">No Updates Found</div>
                  </div>
                  <div className="single-trns-trng-event">
                    <h2>Upcoming Webinar</h2>
                    <div className="Explore-all-trainings">
                      <Link to="/">Explore All Webinar</Link>
                    </div>
                    <div className="upcomings-updates">No Upcoming Webinar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTrainers;
