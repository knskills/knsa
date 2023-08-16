// This is the traindrs card seciton
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KnSir from "../Utility/Trainings/TrainingsFiles/KnSir.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getedUsers } from "../Store_Reducer/userReducer";
import { BASE_URL } from "../helper/helper";
// import { userCardsBtn } from "../Utility/Trainings/TrainingsCardsBtn";
import NavLogo from "../../CompLogo.jpg";

const Trainers = () => {
  // Trainings Cards data filter section code
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const usersReduceList = state.usersReducerData;

  const [items, setItems] = useState(usersReduceList);
  const filterUsers = (category) => {
    if (category === "ALL") {
      setItems(usersReduceList);
      return;
    }

    const updatedUsers = usersReduceList.filter((curElem) => {
      return curElem.trainingType === category;
    });

    setItems(updatedUsers);
    setRefresh(refresh);
  };

  const [refresh, setRefresh] = useState(false);

  const usersListValue = [
    ...new Set(items.map((curElem) => curElem.trainingType)),
    "ALL",
  ];

  console.log("usersListValue", usersListValue);
  // here "new Set()" function are remove the duplicate value from array
  const [usersItem, setUsersItem] = useState(usersListValue);

  useEffect(() => {
    dispatch(getedUsers());
    setRefresh(!refresh);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="trainer-container-box">
        <div className="trainer-flexBox">
          <div className="trainer-headbar">
            <div className="trainer-header-bar">
              <p>OUR BEST TRAINERS</p>
              <div className="trainer-linebar"></div>
            </div>
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

          <div className="trainers-cards-flex">
            {items && items.length > 0
              ? items.slice(0, 9).map((dataItem, dataIndex) => {
                  return [
                    dataItem.usersValue === "trainer" && (
                      <div key={dataIndex} className="trainers-cards">
                        <Link
                          target="_top"
                          to={`/trainers/single_trainers/${dataItem?._id}`}
                        >
                          <img
                            className="card-banner border-radius-5px"
                            src={
                              `${BASE_URL}/${dataItem?.avatar}`
                                ? `${BASE_URL}/${dataItem?.avatar}`
                                : { NavLogo }
                            }
                            alt={dataItem.usersName.slice(0, 18)}
                          />

                          <div className="trainer-name">
                            {dataItem.usersName.slice(0, 18)}
                          </div>
                        </Link>
                        <div className="trainer-theme">
                          {dataItem.usersHeading.slice(0, 30)}
                        </div>
                        <div className="trainer-more">
                          {dataItem.usersAbout.slice(0, 100)}
                          ...
                        </div>
                      </div>
                    ),
                  ];
                })
              : "Data are reloading Please wait..... Your patience is highly appreciated!"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
