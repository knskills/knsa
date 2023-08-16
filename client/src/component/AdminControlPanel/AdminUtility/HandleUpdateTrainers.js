// getEdit card section or page
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { BASE_URL } from "../../helper/helper";
// import { useNavigate } from "react-router-dom";

const HandleUpdateTrainers = () => {
  // const navigate = useNavigate();
  const params = useParams();

  // State for user Register
  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const [trainingType, setTrainingType] = useState("");
  const [usersMembers, setUsersMembers] = useState("");
  const [usersName, setUsersName] = useState("");
  const [usersMail, setUsersMail] = useState("");
  const [usersHeading, setUsersHeading] = useState("");
  const [usersTotalTrain, setUsersTotalTrain] = useState("");
  const [usersEdu, setUsersEdu] = useState("");
  const [usersExpe, setUsersExpe] = useState("");
  const [usersAward, setUsersAward] = useState("");
  const [usersAbout, setUsersAbout] = useState("");
  const [usersMobi, setUsersMobi] = useState("");
  const [trainersId, setTrainersId] = useState("");
  const [trainersPass, setTrainerPass] = useState("");
  const [trainersConPass, setTrainersConPass] = useState("");

  const viewdata = () => {
    try {
      const id = params.id;
      axios.get(`${BASE_URL}/users/getedit-users/${id}`).then((res) => {
        const resPonse = res.data.data;
        console.log("get page success for edit", resPonse, 33);
        setTrainingType(resPonse.trainingType);
        setUsersMembers(resPonse.usersMembers);
        setUsersName(resPonse.usersName);
        setUsersMail(resPonse.usersMail);
        setUsersHeading(resPonse.usersHeading);
        setUsersTotalTrain(resPonse.usersTotalTrain);
        setUsersEdu(resPonse.usersEdu);
        setUsersExpe(resPonse.usersExpe);
        setUsersAward(resPonse.usersAward);
        setUsersAbout(resPonse.usersAbout);
        setUsersMobi(resPonse.usersMobi);
        setTrainersId(resPonse.trainersId);
        setTrainerPass(resPonse.trainersPass);
        setTrainersConPass(resPonse.trainersConPass);
      });
    } catch (err) {
      alert("get edit page error");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("trainingType", trainingType || null);
    formData.append("usersMembers", usersMembers);
    formData.append("avatar", avatar);
    formData.append("usersName", usersName);
    formData.append("usersMail", usersMail);
    formData.append("usersHeading", usersHeading || null);
    formData.append("usersTotalTrain", usersTotalTrain || null);
    formData.append("usersEdu", usersEdu || null);
    formData.append("usersExpe", usersExpe || null);
    formData.append("usersAward", usersAward || null);
    formData.append("usersAbout", usersAbout || null);
    formData.append("usersMobi", usersMobi);
    formData.append("trainersId", trainersId);
    formData.append("trainersPass", trainersPass);
    formData.append("trainersConPass", trainersConPass);
    formData.append("usersValue", usersValue);
    formData.append("date", new Date().toLocaleString());

    console.log("formData", formData);

    const inputData = {
      id: params.id,
    };

    console.log("handleUpdate");

    // THIS URL FOR OUTPUT AFTER ADD PRODUCT DATA, AXIOS FUNCTION RUN WHEN CLICK USER ON UPDATE BUTTON after change and set on output file, End Tutorials, Now i'll go "GetProduct.js" file with point 11
    const _id = params.id;
    axios
      .post(`${BASE_URL}/users/editUpdate-users/${_id}`, formData, inputData)
      .then((res) => {
        // console.log("product updated success", res);
        alert("Users updated success");
        // props.showAlert("Product Updated Successfully", "success");
      })
      .catch((error) => {
        alert("Users not updated getting error");
      });
  };

  useEffect(() => {
    viewdata();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="vh-100">
        <div className="user-type">Sign Up</div>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="register-section d-flex">
              <div className="register-social-media">
                {avatar ? (
                  <img src={`${BASE_URL}/${avatar}`} width="100" height="80" />
                ) : (
                  ""
                )}
              </div>

              <form>
                <div className="d-flex training-subject">
                  <div className="input-area select-div d-flex">
                    <select
                      value={trainingType}
                      onChange={(e) => setTrainingType(e.target.value)}
                      className="trainings-reg-category"
                    >
                      <option value="Select">Select</option>
                      <option value="Network Marketing">
                        Network Marketing
                      </option>
                      <option value="Motivational Talks">
                        Motivational Talks
                      </option>
                      <option value="Leadership Skills">
                        Leadership Skills
                      </option>
                      <option value="People Skills">People Skills</option>
                      <option value="Selling Skills">Selling Skills</option>
                      <option value="Public Skills">Public Skills</option>
                    </select>
                    <label className="form-label">Training Type</label>
                  </div>
                </div>

                <div className="d-flex training-subject">
                  <div className="input-area select-div d-flex">
                    <select
                      value={usersMembers}
                      onChange={(e) => setUsersMembers(e.target.value)}
                      className="trainings-reg-category"
                    >
                      <option defaultValue="Select">Select</option>
                      <option value="YTM MEMBER"> YTM MEMBER </option>
                      <option value="NON YTM MEMBER"> NON YTM MEMBER </option>
                    </select>
                    <label className="form-label">Member of </label>
                  </div>

                  <div className="input-area select-div d-flex">
                    <input
                      onChange={handleAvatarChange}
                      className="users-avatar"
                      type="file"
                      accept="image/*"
                    />
                    <label>Your Passport Size Photo</label>
                  </div>
                </div>

                <div className="reg-form-outline mb-4 d-flex">
                  {/* Name Field */}
                  <div className="input-area">
                    <input
                      value={usersName}
                      onChange={(e) => setUsersName(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Full Name</label>
                  </div>

                  {/* Email */}
                  <div className="input-area">
                    <input
                      value={usersMail}
                      onChange={(e) => setUsersMail(e.target.value)}
                      type="email"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email address</label>
                  </div>
                </div>

                <div className="reg-form-outline mb-4 d-flex">
                  <div className="input-area">
                    <input
                      value={usersHeading}
                      onChange={(e) => setUsersHeading(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">
                      Trainer Theme or Heading
                    </label>
                  </div>

                  <div className="input-area">
                    <input
                      value={usersTotalTrain}
                      onChange={(e) => setUsersTotalTrain(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Total Trained As yet</label>
                  </div>
                </div>

                <div className="reg-form-outline mb-4 d-flex">
                  <div className="input-area">
                    <input
                      value={usersEdu}
                      onChange={(e) => setUsersEdu(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Trainer Education</label>
                  </div>

                  <div className="input-area">
                    <input
                      value={usersExpe}
                      onChange={(e) => setUsersExpe(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Trainer Experience</label>
                  </div>
                </div>

                <div className="reg-form-outline mb-4 d-flex">
                  <div className="input-area">
                    <input
                      value={usersAward}
                      onChange={(e) => setUsersAward(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Trainer Awarded</label>
                  </div>

                  <div className="input-area">
                    <input
                      value={usersAbout}
                      onChange={(e) => setUsersAbout(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">More About Trainer</label>
                  </div>
                </div>

                {/* Contact Field */}
                <div className="reg-form-outline mb-4 d-flex">
                  {/* Mobile No */}
                  <div className="input-area">
                    <input
                      value={usersMobi}
                      onChange={(e) => setUsersMobi(e.target.value)}
                      type="tel"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Mobile No</label>
                  </div>

                  {/* UserId */}
                  <div className="input-area">
                    <input
                      value={trainersId}
                      onChange={(e) => setTrainersId(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">User id</label>
                  </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="reg-form-outline mb-4 d-flex">
                  <div className="password-area">
                    <input
                      value={trainersPass}
                      onChange={(e) => setTrainerPass(e.target.value)}
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  {/* Conf Password */}
                  <div className="password-area">
                    <input
                      value={trainersConPass}
                      onChange={(e) => setTrainersConPass(e.target.value)}
                      type="password"
                      id="con-password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="con-password">
                      Confirm Password
                    </label>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  onClick={handleUpdate}
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HandleUpdateTrainers;
