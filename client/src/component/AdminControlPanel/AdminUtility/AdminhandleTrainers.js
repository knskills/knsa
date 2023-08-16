import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getedUsers } from "../../Store_Reducer/userReducer";
import { BASE_URL } from "../../helper/helper";
import axios from "axios";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminhandleTrainers = () => {
  const navigate = useNavigate();
  // Trainings Cards data filter section code
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const usersReduceList = state.usersReducerData;

  // delete function
  const [deleteData, setDeleteData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const deleteTrainers = () => {
    const data = deleteData;
    axios
      .post(`${BASE_URL}/users/delete-users`, data)
      .then((res) => {
        console.log("delete-res", res);

        if (res.data.code === 200) {
          setRefresh(!refresh);
        }
        // props.showAlert("Product deleted successfully", "success");
      })
      .catch((error) => {
        alert("delete data getting error");
      });
  };

  const [filter, setFilter] = useState("");

  const filterChange = (e) => {
    setFilter(e.target.value);
    console.log("item are filter here..");
  };

  const [sortFilter, setSortFilter] = useState(usersReduceList);
  const sortHandle = (e) => {
    if (e.target.value === "A-Z") {
      setSortFilter(
        ...usersReduceList.sort((a, b) =>
          a.trainingType > b.trainingType ? 1 : -1
        )
      );
    }

    if (e.target.value === "Z-A") {
      setSortFilter(
        ...usersReduceList.sort((a, b) =>
          a.trainingType > b.trainingType ? -1 : 1
        )
      );
    }
  };

  useEffect(() => {
    dispatch(getedUsers());
    // eslint-disable-next-line
  }, [refresh, filter]);

  return (
    <>
      <div className="handle-products-container">
        <div className="trainings-filter-area">
          <select multiple={false} value={sortFilter} onChange={sortHandle} >
            <option value="SORT">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <input
            className="trainings-filter-admin"
            value={filter}
            onChange={filterChange}
            placeholder="Search here any key or Trainings.."
          />
        </div>
        <div className="handle-products-flex">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sn.</th>
                <th scope="col">Name</th>
                <th scope="col">Trainer Id</th>
                <th scope="col">Emails </th>
                <th scope="col">Mobile</th>
                <th scope="col">Ytm Member</th>
                <th scope="col">Category </th>
                <th scope="col">Commission </th>
                <th scope="col">Uploaded Video </th>
                <th scope="col">Register Date </th>
                <th scope="col">Status </th>
                <th scope="col">Action </th>
              </tr>
            </thead>

            <tbody>
              {usersReduceList && usersReduceList.length > 0
                ? usersReduceList
                  .sort((a, b) =>
                    a.usersName.toLowerCase() > b.usersName.toLowerCase()
                      ? 1
                      : -1
                  )
                  .filter((item) => {
                    return (
                      item.usersName
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.trainersId
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.usersMail
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.usersMembers
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.trainingType
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    );
                  })
                  .slice(0, 10)
                  .map((item, index) => {
                    return [
                      item.usersValue === "trainer" && (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.usersName}</td>
                          <td>{item.trainersId}</td>
                          <td>{item.usersMail}</td>
                          <td>{item.usersMobi}</td>
                          <td>{item.usersMembers}</td>
                          <td>{item.trainingType}</td>
                          <td>Not Earn</td>
                          <td>No Videos</td>
                          <td>{item.date}</td>
                          <td>Approved</td>
                          <td>
                            <div className="action-btn">
                              <i className="fa-brands fa-searchengin"></i>
                              {/* <i
                                className="fa-solid fa-pen-to-square mx-2"
                                onClick={() => {
                                  if (
                                    localStorage.getItem("token") &&
                                    (localStorage.getItem("type") === "ADMIN" ||
                                      localStorage.getItem("type") ===
                                        "SUBADMIN")
                                  ) {
                                    // console.log("Edit button", servicesItem._id);

                                    navigate(
                                      `/update/edit-products/${item?._id}`
                                    );
                                  } else {
                                    alert(
                                      "Sorry! Your are not authenticated, Please contact to Administration"
                                    );
                                  }
                                }}
                              ></i> */}

                              {/* CheckBox */}
                              {
                                <input
                                  disabled={!localStorage.getItem("token")}
                                  onChange={(e) => {
                                    // console.log(e.target.checked);
                                    if (
                                      e.target.checked === true &&
                                      localStorage.getItem("token") &&
                                      localStorage.getItem("type") === "ADMIN"
                                    ) {
                                      setDeleteData([
                                        ...deleteData,
                                        item?._id,
                                      ]);
                                    } else {
                                      setDeleteData(
                                        deleteData.filter(
                                          (s) => s !== item?._id
                                        )
                                      );
                                    }

                                    if (
                                      !localStorage.getItem("token") &&
                                      localStorage.getItem("type") !== "ADMIN"
                                    ) {
                                      alert(
                                        "Sorry! Authentication Error Please check again"
                                      );
                                    }
                                  }}
                                  className="checkbox"
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                />
                              }

                              {/* Delete */}
                              {deleteData.length > 0 && (
                                <i
                                  onClick={() => deleteTrainers(item._id)}
                                  className="fa-solid fa-trash"
                                ></i>
                              )}
                            </div>
                          </td>
                        </tr>
                      ),
                    ];
                  })
                : "Data not found Please search another.."}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminhandleTrainers;

export const AdminhandleUsers = () => {
  const navigate = useNavigate();
  // Trainings Cards data filter section code
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const usersReduceList = state.usersReducerData;

  // delete function
  const [deleteData, setDeleteData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const deleteTrainers = () => {
    const data = deleteData;
    axios
      .post(`${BASE_URL}/users/delete-users`, data)
      .then((res) => {
        console.log("delete-res", res);

        if (res.data.code === 200) {
          setRefresh(!refresh);
        }
        // props.showAlert("Product deleted successfully", "success");
      })
      .catch((error) => {
        alert("delete data getting error");
      });
  };

  const [filter, setFilter] = useState("");

  const filterChange = (e) => {
    setFilter(e.target.value);
    console.log("item are filter here..");
  };

  const [sortFilter, setSortFilter] = useState(usersReduceList);
  const sortHandle = (e) => {
    if (e.target.value === "A-Z") {
      setSortFilter(
        ...usersReduceList.sort((a, b) =>
          a.trainingType > b.trainingType ? 1 : -1
        )
      );
    }

    if (e.target.value === "Z-A") {
      setSortFilter(
        ...usersReduceList.sort((a, b) =>
          a.trainingType > b.trainingType ? -1 : 1
        )
      );
    }
  };

  useEffect(() => {
    dispatch(getedUsers());
    // eslint-disable-next-line
  }, [refresh, filter]);

  return (
    <>
      <div className="handle-products-container">
        <div className="trainings-filter-area">
          <select value={sortFilter} onChange={sortHandle} >
            <option value="SORT">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <input
            className="trainings-filter-admin"
            value={filter}
            onChange={filterChange}
            placeholder="Search here any key or Trainings.."
          />
        </div>
        <div className="handle-products-flex">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sn.</th>
                <th scope="col">Name</th>
                <th scope="col">Trainer Id</th>
                <th scope="col">Emails </th>
                <th scope="col">Mobile</th>
                <th scope="col">Ytm Member</th>
                <th scope="col">Category </th>
                <th scope="col">Commission </th>
                <th scope="col">Uploaded Video </th>
                <th scope="col">Register Date </th>
                <th scope="col">Status </th>
                <th scope="col">Action </th>
              </tr>
            </thead>

            <tbody>
              {usersReduceList && usersReduceList.length > 0
                ? usersReduceList
                  .sort((a, b) =>
                    a.usersName.toLowerCase() > b.usersName.toLowerCase()
                      ? 1
                      : -1
                  )
                  .filter((item) => {
                    return (
                      item.usersName
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.trainersId
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.usersMail
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.usersMembers
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      item.trainingType
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    );
                  })
                  .slice(0, 10)
                  .map((item, index) => {
                    return [
                      item.usersValue === "users" && (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.usersName}</td>
                          <td>{item.trainersId}</td>
                          <td>{item.usersMail}</td>
                          <td>{item.usersMobi}</td>
                          <td>{item.usersMembers}</td>
                          <td>{item.trainingType}</td>
                          <td>Not Earn</td>
                          <td>No Videos</td>
                          <td>{item.date}</td>
                          <td>Approved</td>
                          <td>
                            <div className="action-btn">
                              <i className="fa-brands fa-searchengin"></i>

                              {/* CheckBox */}
                              {
                                <input
                                  disabled={!localStorage.getItem("token")}
                                  onChange={(e) => {
                                    // console.log(e.target.checked);
                                    if (
                                      e.target.checked === true &&
                                      localStorage.getItem("token") &&
                                      localStorage.getItem("type") === "ADMIN"
                                    ) {
                                      setDeleteData([
                                        ...deleteData,
                                        item?._id,
                                      ]);
                                    } else {
                                      setDeleteData(
                                        deleteData.filter(
                                          (s) => s !== item?._id
                                        )
                                      );
                                    }

                                    if (
                                      !localStorage.getItem("token") &&
                                      localStorage.getItem("type") !== "ADMIN"
                                    ) {
                                      alert(
                                        "Sorry! Authentication Error Please check again"
                                      );
                                    }
                                  }}
                                  className="checkbox"
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                />
                              }

                              {/* Delete */}
                              {deleteData.length > 0 && (
                                <i
                                  onClick={() => deleteTrainers(item._id)}
                                  className="fa-solid fa-trash"
                                ></i>
                              )}
                            </div>
                          </td>
                        </tr>
                      ),
                    ];
                  })
                : "Data not found Please search another.."}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
