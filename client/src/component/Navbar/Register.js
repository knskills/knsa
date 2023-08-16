import React, { useState } from "react";
import { Link } from "react-router-dom";
import fb from "../Files/SocialMedia/fb.png";
import ggl from "../Files/SocialMedia/google.png";
import lin from "../Files/SocialMedia/lin.png";
import axios from "axios";
import { BASE_URL } from "../helper/helper";
import usersAvatar from "../Files/Home/avatar.png";

const Register = () => {
  // const navigate = useNavigate();

  const [showTrainer, setShowTrainer] = useState(true);
  const [usersValue, setUsersValue] = React.useState("trainer");
  const handleChange = (event) => {
    setUsersValue(event.target.value);
    if (event.target.value === "trainer") {
      setShowTrainer(true);
    } else {
      setShowTrainer(false);
    }
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  // State for user Register
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
  const [trainersTerm, setTrainersTerm] = useState(true);

  const handleChangeTerm = () => {
    setTrainersTerm((current) => !current);
  };

  const submitUsers = (e) => {
    console.log(
      trainingType,
      usersMembers,
      usersName,
      usersMail,
      usersHeading,
      usersTotalTrain,
      usersEdu,
      usersExpe,
      usersAward,
      usersAbout,
      usersMobi,
      trainersId,
      trainersPass,
      trainersConPass,
      trainersTerm,
      usersValue,
      avatar
    );
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
    formData.append("trainersTerm", trainersTerm);
    formData.append("usersValue", usersValue);
    formData.append("date", new Date().toLocaleString());

    axios
      .post(`${BASE_URL}/users/add-users`, formData)
      .then((res) => {
        // navigate("/users/login");
        console.log("res", res);
        alert("User Register SuccessFully!");
        console.log("handleSubmit trigger");
      })
      .catch((err) => {
        alert("User data getting error");
      });
  };

  const handleMedia = () => {
    alert("Please Register first, Our admin are working here. Thanks!");
  };

  return (
    <>
      <section className="vh-100">
        <div className="user-type">Sign Up</div>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="register-section d-flex">
              <div className="register-social-media">
                {avatar ? (
                  <img
                    className="user-avatar"
                    src={URL.createObjectURL(avatar)}
                    alt="User Files"
                  />
                ) : (
                  <img
                    className="user-avatar"
                    src={usersAvatar}
                    alt="User Files"
                  />
                )}

                {!showTrainer && (
                  <Link
                    onClick={handleMedia}
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/learner/entrepreneur-teach"
                    role="button"
                  >
                    {/* <i className="fab fa-facebook-f me-2"></i> */}
                    <img src={fb} alt="Facebook" />
                    Continue with Facebook
                  </Link>
                )}
                {!showTrainer && (
                  <Link
                    onClick={handleMedia}
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/learner/entrepreneur-teach"
                    role="button"
                  >
                    <img src={ggl} alt="Google" />
                    Continue with Google
                  </Link>
                )}
                {!showTrainer && (
                  <Link
                    onClick={handleMedia}
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/learner/entrepreneur-teach"
                    role="button"
                  >
                    <img src={lin} alt="LinkedIn" />
                    Continue with LinkedIn
                  </Link>
                )}
              </div>

              <div className="divider-reg d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <form>
                <p>Let's go to Start your Carrier with - KN_ACADEMY</p>
                <div className="users-category-section">
                  {/* Trainer radio option */}
                  <div className="input-area category-form d-flex">
                    <div className="category-ques">Are you ?</div>
                    <div className="category-selection trainer-category">
                      <input
                        value="trainer"
                        onChange={handleChange}
                        checked={usersValue === "trainer"}
                        type="radio"
                        name="trainer"
                        id="trainer"
                      />
                      <label className="users-label">Trainer</label>
                    </div>

                    {/* users */}
                    <div className="category-selection users-category">
                      <input
                        value="users"
                        onChange={handleChange}
                        checked={usersValue === "users"}
                        type="radio"
                        name="users"
                        id="users"
                      />
                      <label className="users-label">Users</label>
                    </div>
                  </div>
                </div>

                <div className="d-flex training-subject">
                  {showTrainer && (
                    <div className="input-area select-div d-flex">
                      <select
                        value={trainingType}
                        onChange={(e) => setTrainingType(e.target.value)}
                        className="trainings-reg-category"
                      >
                        <option defaultValue="Select">Select</option>
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
                  )}
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
                    <label className="form-label"> Member of </label>
                  </div>

                  <div className="input-area select-div d-flex">
                    <input
                      onChange={handleAvatarChange}
                      className="users-avatar"
                      type="file"
                      accept="image/*"
                    />
                    <label>Passport Photo</label>
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

                {/* Trainer Theme */}
                {showTrainer && (
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
                )}

                {showTrainer && (
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
                )}

                {showTrainer && (
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
                )}

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

                <div style={{ marginLeft: "8px" }} className="privacy-policy">
                  <label htmlFor="checkTerm">
                    <input
                      value={trainersTerm}
                      onChange={handleChangeTerm}
                      type="checkbox"
                      defaultChecked={true}
                      required={true}
                    />
                    I Agree to the
                  </label>
                  <Link target="_top" to="/kna_terms-condition/terms_condition">
                    {" "}
                    Terms Condition{" "}
                  </Link>{" "}
                  and
                  <Link target="_top" to="/kna_privacy-policy/privacy_policy">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  .
                </div>

                {/* <!-- Submit button --> */}
                <button
                  onClick={submitUsers}
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled={trainersTerm.length === null}
                >
                  Register
                </button>

                {/* Alreaqd Login */}
                <div className="register-area"></div>
                <div className="register-section-login d-flex">
                  Alread have an account?
                  <Link to="/users/login">&#160; Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
