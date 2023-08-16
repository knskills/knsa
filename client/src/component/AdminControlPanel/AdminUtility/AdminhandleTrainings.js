import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../Store_Reducer/productReducer";
import { BASE_URL } from "../../helper/helper";
import axios from "axios";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TrainingsCardsBtn from "../../Utility/Trainings/TrainingsCardsBtn";

const AdminhandleTrainings = () => {
  const navigate = useNavigate();
  // Trainings Cards data filter section code
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productReducer);
  const TrainingsList = state.productsData;

  // const [items, setItems] = useState(TrainingsList);
  // const filterTrainings = (category) => {
  //  const updatedTrainings = TrainingsList.filter((curElem) => {
  //   return curElem.trainFields === category;
  //  });
  //  setItems(updatedTrainings);
  // };

  // delete function
  const [deleteData, setDeleteData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const deleteTrainings = () => {
    const data = deleteData;
    axios
      .post(`${BASE_URL}/delete/delete-products`, data)
      .then((res) => {
        // alert("Sure!, do you want to delete?");
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

  const [sortFilter, setSortFilter] = useState(TrainingsList);
  const sortHandle = (e) => {
    if (e.target.value === "A-Z") {
      setSortFilter(
        ...TrainingsList.sort((a, b) =>
          a.trainFields > b.trainFields ? 1 : -1
        )
      );
    }

    if (e.target.value === "Z-A") {
      setSortFilter(
        ...TrainingsList.sort((a, b) =>
          a.trainFields > b.trainFields ? -1 : 1
        )
      );
    }
  };

  useEffect(() => {
    dispatch(getServices());
    // eslint-disable-next-line
  }, [refresh, filter]);

  return (
    <>
      <div className="handle-products-container">
        <div className="trainings-filter-area">
          <select value={sortFilter} onChange={sortHandle} name="" id="">
            <option defaultValue="sort" value="A-Z">
              Sort
            </option>
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
                <th scope="col">Title/Heading</th>
                <th scope="col">Trainer Name</th>
                <th scope="col">Training Category</th>
                <th scope="col">Language</th>
                <th scope="col">Training ThumbNail</th>
                <th scope="col">Mrp </th>
                <th scope="col">Srp </th>
                <th scope="col">Upload Date </th>
                <th scope="col">Status </th>
                <th scope="col">Action </th>
              </tr>
            </thead>

            <tbody>
              {TrainingsList && TrainingsList.length > 0
                ? TrainingsList.sort((a, b) =>
                    a.trainHead.toLowerCase() > b.trainHead.toLowerCase()
                      ? 1
                      : -1
                  )
                    .filter((item) => {
                      return (
                        item.trainHead
                          .toLowerCase()
                          .includes(filter.toLowerCase()) ||
                        item.trainer
                          .toLowerCase()
                          .includes(filter.toLowerCase()) ||
                        item.trainFields
                          .toLowerCase()
                          .includes(filter.toLowerCase()) ||
                        item.trainLang
                          .toLowerCase()
                          .includes(filter.toLowerCase())
                      );
                    })
                    .slice(0, 10)
                    .map((item, index) => {
                      return (
                        <tr key={item._id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.trainHead}</td>
                          <td>{item.trainer}</td>
                          <td>{item.trainFields}</td>
                          <td>{item.trainLang}</td>
                          <td>
                            <img
                              height="50px"
                              width="100px"
                              src={`${BASE_URL}/${item.trainThumb}`}
                              alt=""
                            />
                          </td>
                          <td>{item.trainMrp}</td>
                          <td>{item.trainSrp}</td>
                          <td>{item.date}</td>
                          <td>Approved</td>
                          <td>
                            <div className="action-btn">
                              <i className="fa-brands fa-searchengin"></i>

                              <i
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
                              ></i>

                              {/* CheckBox */}
                              {
                                <input  disabled={!localStorage.getItem("token")}
                                  onChange={(e) => {
                                    // console.log(e.target.checked);
                                    if (
                                      e.target.checked === true &&
                                      localStorage.getItem("token") &&
                                      localStorage.getItem("type") === "ADMIN"
                                    ) {
                                      setDeleteData([...deleteData, item?._id]);
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
                                  onClick={() => deleteTrainings(item._id)}
                                  className="fa-solid fa-trash"
                                ></i>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                : "Data not found Please search other.."}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminhandleTrainings;
