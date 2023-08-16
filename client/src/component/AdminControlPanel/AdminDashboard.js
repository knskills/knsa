// adminpanel navbar
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dashLogo from "../AdminControlPanel/dashFile/dashLogo.png";
import adminAvatar from "../AdminControlPanel/dashFile/adminAvatar.png";
import adminICon from "../AdminControlPanel/dashFile/admin.png";
import AdminControlPanel from "../AdminControlPanel/AdminControlPanel";
const AdminDashboard = () => {
  const navigate = useNavigate();

  const adminLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("adminName");
    alert("Are you sure want to Logout!");
    navigate("/admin/admin-panel/dashboard");
  };

  return (
    <>
      <div className="admin-dashboard">
        <div className="dashboard-nav d-flex align-i-center justify-content-space-between">
          <div className="dashboard-icon d-flex align-i-center justify-content-space-between">
            <div className="navlogo-icon d-flex align-i-center flex-direction-col justify-content-space-between">
              <img width="60px" height="60px" src={dashLogo} alt="" />
              <p>KN ACADEMY</p>
            </div>
            <p>ADMIN PANEL</p>
          </div>

          <div className="login-panel-icon d-flex flex-direction-col justify-content-space-between">
            <div className="admin-dashboard-icon align-i-center d-flex flex-direction-col justify-content-center">
              {!localStorage.getItem("token") &&
              (!localStorage.getItem("type") === "ADMIN" ||
                !localStorage.getItem("type") === "SUBADMIN") ? (
                <img src={adminAvatar} alt="" />
              ) : (
                <img src={adminICon} alt="" />
              )}
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>

            <div className="admin-login-panel">
              {!localStorage.getItem("token") ||
              localStorage.getItem("token") === "undefined" ||
              localStorage.getItem("token") === "" ? (
                <Link to="/admin/admin-login">Login</Link>
              ) : (
                <Link onClick={adminLogout} to="">
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* {(localStorage.getItem("type") === "ADMIN" ||
          localStorage.getItem("type") === "SUBADMIN") && <AdminControlPanel />} */}
        <AdminControlPanel />
      </div>
    </>
  );
};

export default AdminDashboard;
