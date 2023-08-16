import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/helper";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const closeForm = () => {
    setShow(true);
    navigate("/admin/admin-panel/dashboard");
  };
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/api/login-admin`, {
        userid,
        password,
        date: new Date(),
      })
      .then((res) => {
        navigate("/admin/add-training");
        console.log("res", res);
        if (res.data.token) {
          localStorage.setItem("type", res.data.type);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("adminName", res.data.adminName);
          alert("Admin Loged In SuccessFully!");
          navigate("/admin/admin-panel/dashboard");
        } else {
          navigate("/admin/admin-register");
          alert(
            "Login Admin data getting error!, Please Contact to Administrator"
          );
        }
      })
      .catch((err) => {
        alert("Login Admin data getting error");
      });

    console.log("handleLogin trigger");
  };

  return (
    <>
      {!show && (
        <div className="adminLogin-container">
          <div className="login-card">
            <form>
              <div onClick={closeForm} className="close-ref">
                &#10540;
              </div>
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="userid">User Id</label>
                <input
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                  type="text"
                  className="form-control"
                  id="userid"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Id"
                  autoComplete="userid"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
              <div className="d-flex flex-direciton-column form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <div className="form-check-label">Remember Me</div>
                <Link to="/admin/admin-register">&nbsp; Register</Link>
              </div>
              <button
                onClick={handleLogin}
                className="btn btn-primary"
                disabled={userid.length < 4 || password.length < 4}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
