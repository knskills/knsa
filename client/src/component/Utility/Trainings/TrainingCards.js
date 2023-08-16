// Show the all cards on howm page in all courses for different category output with onclick view and selector
import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../helper/helper";
import NavLogo from "../../../CompLogo.jpg";
import axios from "axios";
// var InfiniteScroll = require('react-infinite-scroll-component');

const TrainingCards = ({ items }) => {
  const navigate = useNavigate();

  const [deleteData, setDeleteData] = useState([]);
  const [refresh, setRefresh] = useState();

  // Delte Function
  const handleDelete = () => {
    const data = deleteData;
    axios
      .post(`${BASE_URL}/delete/delete-products`, data)
      .then((res) => {
        alert("Sure!, do you want to delete?");

        if (res.data.code === 200) {
          setRefresh(!refresh);
        }
        // props.showAlert("Product deleted successfully", "success");
      })
      .catch((error) => {
        alert("delete data getting error");
      });
  };

  return (
    <>
      <div className="training-container">
        <div className="training-flex d-flex">
          {items && items.length > 0
            ? items.slice(0, 9).map((dataItem, dataIndex) => {
                {
                  console.log("datavalue", dataItem);
                }
                return (
                  <div
                    key={dataIndex}
                    className="training-card border-radius-5px"
                  >
                    <div className="img-tag">
                      <Link to={`/trainings/single_trainings/${dataItem?._id}`}>
                        <img
                          className="card-banner border-radius-5px"
                          src={`${BASE_URL}/${dataItem?.trainThumb}`}
                          alt=""
                        />
                      </Link>
                      <img className="mnc-logo" src={NavLogo} alt="" />
                    </div>
                    <div className="card-details">
                      <div className="tng-title">
                        {dataItem?.trainHead.slice(0, 36)}
                      </div>
                      <div className="trainer-title trainer-details d-flex justify-content-space-between">
                        <Link to="/">
                          <p>By {dataItem?.trainer.slice(0, 20)} Ji</p>
                        </Link>
                        <div className="course-price sr-price">
                          <FaRupeeSign /> {dataItem?.trainSrp} /-
                        </div>
                      </div>

                      <div className="ratings trainer-details d-flex justify-content-space-between">
                        <p>
                          <span
                            className="fa fa-star checked"
                            aria-hidden="true"
                          ></span>
                          {dataItem?.trainRating}
                        </p>

                        <div className="course-price mrp text-decoration-line-through">
                          <FaRupeeSign />
                          {dataItem?.trainMrp} /-
                        </div>
                      </div>

                      <div className="duration-box d-flex justify-content-space-between">
                        <div className="course-type d-flex">
                          <MdFlightTakeoff />
                          <p>{dataItem?.trainStage}</p>
                        </div>

                        <div className="training-duration  d-flex">
                          <i className="fa-solid fa-clock"></i>
                          <p>09:05:13</p>
                        </div>
                      </div>
                    </div>
                    {/* , Edit and Delete Card Data function */}
                    <div className="update-delete-btn">
                      {/* Check button */}
                      {
                        <input
                          onChange={(e) => {
                            // console.log(e.target.checked);

                            if (
                              e.target.checked === true &&
                              localStorage.getItem("token") &&
                              localStorage.getItem("type") === "ADMIN"
                            ) {
                              setDeleteData([...deleteData, dataItem?._id]);
                            } else {
                              setDeleteData(
                                deleteData.filter((s) => s !== dataItem?._id)
                              );
                            }

                            if (
                              !localStorage.getItem("token") &&
                              localStorage.getItem("type") !== "ADMIN"
                            ) {
                              alert(
                                "Sorry! Your are not authenticated, Please contact to Administration"
                              );
                            }
                          }}
                          className="checkbox"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        />
                      }

                      {/* delete button */}
                      {deleteData.length > 0 && (
                        <i
                          className="fa-solid fa-trash-can mx-2"
                          onClick={handleDelete}
                        ></i>
                      )}

                      {/* 10. Update Button */}
                      {
                        <i
                          className="fa-solid fa-pen-to-square mx-2"
                          //   console.log("Edit button", servicesItem._id);

                          onClick={() => {
                            if (
                              localStorage.getItem("token") &&
                              (localStorage.getItem("type") === "ADMIN" ||
                                localStorage.getItem("type") === "SUBADMIN")
                            ) {
                              // console.log("Edit button", servicesItem._id);

                              navigate(
                                `/update/edit-products/${dataItem?._id}`
                              );
                            } else {
                              alert(
                                "Sorry! Your are not authenticated, Please contact to Administration"
                              );
                            }
                          }}
                        ></i>
                      }
                    </div>
                  </div>
                );
              })
            : "Data are reloading Please wait..... Your patience is highly appreciated!"}
        </div>
      </div>
    </>
  );
};

export default TrainingCards;
