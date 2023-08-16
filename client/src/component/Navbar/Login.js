import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fb from "../Files/SocialMedia/fb.png";
import ggl from "../Files/SocialMedia/google.png";
import lin from "../Files/SocialMedia/lin.png";
import axios from "axios";
import { BASE_URL } from "../helper/helper";

const Login = () => {
  const navigate = useNavigate();

  const [trainersId, setTrainersId] = useState("");
  const [trainersPass, setTrainerPass] = useState("");

  const handleUserLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/users/login-users`, {
        trainersId,
        trainersPass,
        date: new Date(),
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("usersName", res.data.usersName);
          localStorage.setItem("usersValue", res.data.usersValue);
          console.log("res", res);
          alert("User Login SuccessFully!");
          console.log("handleUserLogin trigger");
        } else {
          navigate("/users/register");
          alert(
            "Login Admin data getting error!, Please Contact to Administrator"
          );
        }

        if (
          localStorage.getItem("token") &&
          localStorage.getItem("usersValue") === "trainer"
        ) {
          navigate("/trainers/panels/trainers-panels");
        } else if (
          localStorage.getItem("token") &&
          localStorage.getItem("usersValue") === "users"
        ) {
          navigate("/users/panels/users-panels");
        }
      })
      .catch((err) => {
        alert("User login getting error");
      });
  };

  return (
    <>
      <section className="vh-100">
        <div className="user-type">Sign In</div>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="img-section">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="login-section">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    value={trainersId}
                    onChange={(e) => setTrainersId(e.target.value)}
                    type="text"
                    id="userid"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="userid">
                    User Id
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    value={trainersPass}
                    onChange={(e) => setTrainerPass(e.target.value)}
                    type="password"
                    id="userpassword"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="userpassword">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      defaultChecked
                    />
                    &#160;
                    <label className="form-check-label" htmlFor="form1Example3">
                      Remember me
                    </label>
                    &#160;
                  </div>
                  <Link to="/">Forgot password?</Link>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  onClick={handleUserLogin}
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Login
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <div className="login-social-media">
                  <Link
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/"
                    role="button"
                  >
                    {/* <i className="fab fa-facebook-f me-2"></i> */}
                    <img src={fb} alt="Facebook" />
                    Continue with Facebook
                  </Link>
                  <Link
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/"
                    role="button"
                  >
                    <img src={ggl} alt="Google" />
                    Continue with Google
                  </Link>
                  <Link
                    className="btn btn-primary btn-lg btn-block d-flex"
                    to="/"
                    role="button"
                  >
                    <img src={lin} alt="LinkedIn" />
                    Continue with LinkedIn
                  </Link>
                </div>
              </form>

              <div className="login-section d-flex">
                Don’t have an account?{" "}
                <Link to="/users/register">&#160; Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
