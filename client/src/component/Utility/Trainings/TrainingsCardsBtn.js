import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const TrainingsCardsBtn = ({ refresh, filterTrainings, items }) => {
  const categoryValue = [
    ...new Set(items.map((curElem) => curElem.trainFields)),
    "ALL",
  ];

  console.log("categoryValu", categoryValue);
  // here "new Set()" function are remove the duplicate value from array
  const [trainingItem, setTrainingItem] = useState(categoryValue);

  useEffect(() => {
    refresh;
  }, [trainingItem]);

  return (
    <>
      <div className="training-container">
        <div className="training-headbar">
          <p>TOP TRAININGS </p>
          <Link to="/trainings/trainings_category">
            View All <BsArrowRight className="right-arrow" />
          </Link>
          <ul>
            {trainingItem.map((curElem, index) => {
              return (
                <li key={index} onClick={() => filterTrainings(curElem)}>
                  {curElem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrainingsCardsBtn;

export const userCardsBtn = () => {
  const usersListValue = [
    ...new Set(items.map((curElem) => curElem.trainFields)),
    "ALL",
  ];

  console.log("categoryValu", categoryValue);
  // here "new Set()" function are remove the duplicate value from array
  const [usersItem, setUsersItem] = useState(usersListValue);

  useEffect(() => {
    refresh;
  });

  return (
    <>
      <div className="training-container">
        <div className="training-headbar">
          <p>TOP TRAININGS </p>
          <Link to="/trainings/trainings_category">
            View All <BsArrowRight className="right-arrow" />
          </Link>
          <ul>
            {usersItem.map((curElem, index) => {
              return (
                <li key={index} onClick={() => filterUsers(curElem)}>
                  {curElem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
