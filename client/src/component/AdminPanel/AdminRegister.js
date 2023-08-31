import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/helper";

import axios from "axios";
const AdminRegister = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const closeForm = () => {
    setShow(true);
    navigate("/admin/admin-panel/dashboard");
  };

  const [type, setType] = useState("");
  const [adminName, setAdminName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/api/add-admin`, {
        type,
        adminName,
        mobile,
        email,
        userid,
        password,
        conpassword,
        date: new Date(),
      })
      .then((res) => {
        navigate("/admin/admin-login");
        console.log("res");
        alert("Admin Register SuccessFully!");
      })
      .catch((err) => {
        alert("adAdmin data getting error");
      });

    console.log("handleSubmit trigger");
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

              {/* Your name */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="user">User Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  name="user"
                  id="user"
                >
                  <option defaultValue="Select">Select</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="SUB_ADMIN">SUBADMIN</option>
                </select>
              </div>

              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="username">Your Name</label>
                <input
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Full Name"
                  autoComplete="username"
                />
              </div>

              {/* Mobile */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="mobile">Mobile</label>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Contact No"
                  autoComplete="mobile"
                />
              </div>

              {/* Email  */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="email">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  autoComplete="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              {/* userId */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="userid">User Id</label>
                <input
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                  type="text"
                  className="form-control"
                  id="userid"
                  name="userid"
                  placeholder="User Id"
                  autoComplete="userid"
                />
              </div>

              {/* Password */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </div>

              {/* Con Password */}
              <div className="form-group d-flex flex-direciton-column">
                <label htmlFor="con-password">Confirm Password</label>
                <input
                  value={conpassword}
                  onChange={(e) => setConpassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="con-password"
                  name="con-password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                />
              </div>

              <div className="d-flex flex-direciton-column form-check">
                Alread have an Account
                <Link to="/admin/admin-login">&nbsp; Login</Link>
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                disabled={
                  type.length < 4 ||
                  adminName.length < 4 ||
                  mobile.length < 4 ||
                  email.length < 4 ||
                  userid.length < 4 ||
                  password.length < 4 ||
                  conpassword.length < 4
                }
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminRegister;
