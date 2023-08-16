import React, { useState } from "react";
import { Link } from "react-router-dom";
import adminICon from "../AdminControlPanel/dashFile/adminAvatar.png";
import AdminHandleProducts from "./AdminUtility/AdminHandleProducts";
import AdminhandleTrainings from "./AdminUtility/AdminhandleTrainings";
import AdminhandleTrainers, {
  AdminhandleUsers,
} from "./AdminUtility/AdminhandleTrainers";

const AdminControlPanel = () => {
  const [useNav, setuseNave] = useState(false);
  const openNav = () => {
    setuseNave(true);
  };

  const closeNav = () => {
    setuseNave(false);
  };

  // handle admin tag
  const [handleAdminTag, setHandleAdminTag] = useState(1);
  const handleAdmin = (e) => {
    setHandleAdminTag(e);
  };

  return (
    <>
      <div className="control-panel-container">
        <div className={useNav ? "control-panel-flex" : "close-control-panel"}>
          <div className="adminControl-Dash">
            {/* Side navbar */}
            <div className="dash-side-navbar">
              <i
                onClick={openNav}
                className="fa-solid fa-house-laptop openPanel"
              ></i>
              <div
                id="mySidenav"
                className={useNav ? "openSidenav" : "sidenav"}
              >
                <i
                  onClick={closeNav}
                  className="fa-solid fa-xmark closebtn"
                ></i>

                <Link onClick={() => handleAdmin(1)} className="d-flex">
                  <i className="fa-solid fa-house-user "></i>
                  <p>Dashboard</p>
                </Link>
                <Link to="/admin/admin-panel/dashboard" className="d-flex">
                  <i className="fa-solid fa-address-card "></i> <p>Admin</p>
                </Link>
                <Link onClick={() => handleAdmin(2)} className="d-flex">
                  <i className="fa-solid fa-handshake-angle "></i>
                  <p>Trainers</p>
                </Link>
                <Link onClick={() => handleAdmin(3)} className="d-flex">
                  <i className="fa-solid fa-users"></i>
                  <p>Users</p>
                </Link>
                <Link onClick={() => handleAdmin(4)} className="d-flex">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <p>Trainings</p>
                </Link>
                <Link to="/admin/admin-panel/dashboard" className="d-flex">
                  <i className="fa-brands fa-usps "></i> <p>Orders</p>
                </Link>
                <Link onClick={() => handleAdmin(6)} className="d-flex">
                  <i className="fa-solid fa-person-walking-luggage"></i>
                  <p>Products</p>
                </Link>
                <Link to="/admin/admin-panel/dashboard" className="d-flex">
                  <i className="fa-solid fa-flag"></i>
                  <p>Banner</p>
                </Link>
                <Link to="/admin/admin-panel/dashboard" className="d-flex">
                  <i className="fa-solid fa-chart-line"></i>
                  <p>Analytics</p>
                </Link>
              </div>
            </div>

            <div className="admin-dashboard-card">
              <div className="admin-dashboard-container">
                {/* Middle Container */}
                <div className="admin-middle-container">
                  <div className="dashboard-component">
                    {handleAdminTag === 1 && <AdminhandleTrainers />}
                    {handleAdminTag === 2 && <AdminhandleTrainers />}
                    {handleAdminTag === 3 && <AdminhandleUsers />}
                    {handleAdminTag === 4 && <AdminhandleTrainings />}
                    {handleAdminTag === 6 && <AdminHandleProducts />}

                    {/* {
                      "Data are fetching Please wait..... Your patience is highly appreciated!"
                    } */}
                  </div>
                </div>

                {/* Update Right panel */}
                <div className="revenue-update-dash">
                  <div className="updates-new">Updates</div>
                  {/* 1 */}
                  <div className="status-update-card d-flex align-item-center justify-content-space-between">
                    <img src={adminICon} alt="" />
                    <div className="order-info-flex">
                      <p>
                        <b>Sushan Kumar</b> has take new subcription of 6 months
                      </p>
                      <div className="ordered-time">12 seconds ago</div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="status-update-card d-flex align-item-center justify-content-space-between">
                    <img src={adminICon} alt="" />
                    <div className="order-info-flex">
                      <p>
                        <b>Sushan Kumar</b> has take new subcription of 6 months
                      </p>
                      <div className="ordered-time">12 seconds ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminControlPanel;
