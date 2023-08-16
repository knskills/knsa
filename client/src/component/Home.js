import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";

// Home-clone
import HomeSlider from "./Slider/HomeSlider";
import { CourseSlider } from "./Slider/CloneSlider";
import { Link } from "react-router-dom";

// import UpcomingTrainings from "./Utility/UpcomingTrainings";
import Trainers from "./Utility/Trainers";
import { UsersSlider } from "./Slider/UsersSlider";
import TrainingCards from "./Utility/Trainings/TrainingCards";
import { getServices } from "./Store_Reducer/productReducer";
import TrainingsCardsBtn from "./Utility/Trainings/TrainingsCardsBtn";
import IntroVideo from "./IntroVideo";

const Learn = require("./Files/LearnPlat/Learn.jpg");
const Support = require("./Files/LearnPlat/support.jpg");
const Assist = require("./Files/LearnPlat/Assist.jpg");

// Right-side
const Rating = require("./Files/Skills/rating.jpg");
const Gaming = require("./Files/Skills/gaming.png");
const Support1 = require("./Files/Skills/support.jpg");
const Mentor = require("./Files/Skills/mentorship.png");
const Career = require("./Files/Skills/career.png");
const Hiring = require("./Files/Skills/hiring.png");

// MncList
const mnc1 = require("./Files/MncList/l1.jpg");
const mnc2 = require("./Files/MncList/l2.jpg");
const mnc3 = require("./Files/MncList/l3.jpg");
const mnc4 = require("./Files/MncList/l4.jpg");
const mnc5 = require("./Files/MncList/l5.jpg");
const mnc6 = require("./Files/MncList/l6.jpg");
const mnc7 = require("./Files/MncList/l7.jpg");
const mnc8 = require("./Files/MncList/l8.jpg");
const mnc9 = require("./Files/MncList/l9.jpg");

const Home = () => {
  // Trainings Cards data filter section code
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productReducer);
  const TrainingsList = state.productsData;
  const [items, setItems] = useState(TrainingsList);

  const filterTrainings = (category) => {
    if (category === "ALL") {
      setItems(TrainingsList);
      return;
    }

    const updatedTrainings = TrainingsList.filter((curElem) => {
      return curElem.trainFields === category;
    });
    setItems(updatedTrainings);
    setRefresh(refresh);
  };

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    dispatch(getServices());
    setRefresh(!refresh);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container">
        <HomeSlider />
        <div className="home-container">
          <div className="clone-slider">
            <div className="text-box">
              <p>INCREASE YOURSELF WITH ~ KN_ACADEMY</p>
              <div className="animated-text">
                <div>
                  <span>Exposure to and training in foreign languages.</span>
                  <span>Framework for diversity and inclusion.</span>
                  <span>Work in one of the happiest countries.</span>
                </div>
              </div>
            </div>

            <IntroVideo />
          </div>
        </div>

        {/* Top Trainings */}
        <div className="Trainings-card-contain">
          <TrainingsCardsBtn
            items={items}
            setItems={setItems}
            TrainingsList={TrainingsList}
            filterTrainings={filterTrainings}
          />
          <TrainingCards items={items} />
        </div>

        <div className="course-container">
          {/* Trainers Things */}
          <CourseSlider />
        </div>

        <div className="explore-webinar-home">
          <div className="webinar-header">
            <p>UPCOMING TRAININGS & WEBINAR</p>
            <Link to="/webinar/expolore-webinar">
              EXPLORE ALL <BsArrowRight className="right-arrow" />
            </Link>
          </div>
        </div>

        <div className="learning-container">
          <div className="learn-benificiary">
            <h2>Reasons to learn a new skill</h2>
            <div className="head-bar"></div>
            <div className="learn-status margin-both d-flex justify-c-spaceBet align-i-center">
              <div className="left-senario d-flex">
                <img src={Learn} alt="" />
                <div className="training-senario">
                  <h3>World Class Training</h3>
                  <ul>
                    <li>
                      <span className="fa fa-star checked"></span> It gives you
                      motivation.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> Learn with
                      fun Hands-on Exercises & Assignments.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> Participate
                      in Hackathons & Group Activities.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> It keeps you
                      healthy.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right-senario d-flex">
                <div className="rating-card img-card ">
                  <img src={Rating} alt="" />
                  <p>4.8/5 Rating</p>
                </div>
                <div className="rating-card img-card ">
                  <img src={Gaming} alt="" />
                  <p>Gamified Learning</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="learn-status margin-both d-flex justify-c-spaceBet align-i-center">
              <div className="left-senario d-flex">
                <img src={Support} alt="" />
                <div className="training-senario">
                  <h3>Personalized Guidance with 24*7 Support</h3>
                  <ul>
                    <li>
                      <span className="fa fa-star checked"></span> Dedicated
                      Learning Managers.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> 24*7 learning
                      Support.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> Network with
                      Peers & Interact with Industry Leaders
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span> A set of
                      compression sleeves that'll give your arches some
                      much-needed support.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right-senario d-flex">
                <div className="rating-card img-card ">
                  <img src={Support1} alt="" />
                  <p>24 x 7 Support</p>
                </div>
                <div className="rating-card img-card ">
                  <img src={Mentor} alt="" />
                  <p>1:1 Mentorship</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="learn-status margin-both d-flex justify-c-spaceBet align-i-center">
              <div className="left-senario d-flex">
                <img src={Assist} alt="" />
                <div className="training-senario">
                  <h3>Career Assistance</h3>
                  <ul>
                    <li>
                      <span className="fa fa-star checked"></span>400+ Hiring
                      Partners.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span>Resume
                      Building & Mock Interview Prep.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span>Effective
                      Communication.
                    </li>
                    <li>
                      <span className="fa fa-star checked"></span>Exclusive
                      access to Intellipaat Job Portal.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="right-senario d-flex">
                <div className="rating-card img-card ">
                  <img src={Career} alt="" />
                  <p>85,000+ Career Transition</p>
                </div>
                <div className="rating-card img-card ">
                  <img src={Hiring} alt="" />
                  <p>400+ Hiring Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* our top Trainers */}
        <div className="top-entrepreneurship-teacher">
          <Trainers />
        </div>

        {/* Mnc company list */}
        <div className="mnc-programs">
          <h2>Learning in Collaboration with world's top Universe</h2>
          <div className="programs-list" id="programs-list">
            <div className="img-list d-flex">
              <div className="d-flex">
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc1} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc2} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc3} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc4} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc5} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc6} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc7} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc8} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc9} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc1} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc2} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc3} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc4} alt="" />
                </Link>
                <Link
                  className="c-pointer"
                  title="Yashika Life!"
                  target="_top"
                  to="/"
                >
                  <img src={mnc5} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="usersRev-container">
          <div className="head-bar mb-2">
            <h2>Our Users Review</h2>
            <div className="bottom-bar"></div>
          </div>
          <UsersSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
