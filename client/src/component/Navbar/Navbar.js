import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../../CompLogo.jpg";
import Cart from "../../Cart.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [resource, setResource] = useState(false);
  const overResorce = () => {
    setResource(true);
  };

  const outResource = () => {
    setResource(false);
  };

  const [loginData, setLoginData] = useState(false);
  const overLogin = () => {
    setLoginData(true);
  };

  const outLogin = () => {
    setLoginData(false);
  };

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("adminName");
    alert("Are you sure want to Logout!");
    navigate("/");
  };

  const [catNavList, setCatNavList] = useState(false);

  const openNavMenu = () => {
    setCatNavList(true);
  };

  const closeNavMenu = () => {
    setCatNavList(false);
  };

  return (
    <>
      <nav className="navbar f-wrap navbar-expand-lg navbar-light bg-light">
        <div className="nav-logo d-flex alignitem-center justify-content-space-between">
          <Link
            className="navbar-brand text-decoration"
            title="Yashika Future"
            to="/"
          >
            <img src={NavLogo} alt="Yashika Grow Skills" />
          </Link>

          <div className="search-area c-pointer">
            <SearchBar
              setCatNavList={setCatNavList}
              openNavMenu={openNavMenu}
              closeNavMenu={closeNavMenu}
            />
          </div>
        </div>

        <div
          className={
            catNavList
              ? "collapse f-wrap d-flex navbar-collapse navbar-menu showNavList"
              : "collapse f-wrap d-flex navbar-collapse navbar-menu hideNavList"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link cursor-pointer text-decoration"
                to="/learner/entrepreneur-teach"
              >
                Teach With us
              </Link>
            </li>

            <li className="nav-item active">
              <Link
                className="nav-link cursor-pointer text-decoration"
                to="/trainings/users-mentorship"
              >
                1 : 1 Mentorship
              </Link>
            </li>

            <li
              className="nav-item dropdown"
              onMouseOver={overResorce}
              onMouseOut={outResource}
            >
              <div
                className="nav-link cursor-pointer text-decoration dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources <i className="fa fa-caret-down"></i>
              </div>
              {resource && (
                <div
                  className="dropdown-menu item-list dropd-list "
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    className="dropdown-item cursor-pointer text-decoration "
                    to="/admin/add-training"
                  >
                    {/* Case Study */}
                    Add Data
                  </Link>
                  <Link
                    target="_blank"
                    className="dropdown-item cursor-pointer text-decoration "
                    to="/admin/admin-panel/dashboard"
                  >
                    Admin Panel
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link
                    className="dropdown-item cursor-pointer text-decoration"
                    to="/webinar/upcoming-trainings"
                  >
                    Webinar & Events
                  </Link>
                  <Link
                    className="dropdown-item cursor-pointer text-decoration"
                    to="/community/join_community"
                  >
                    Join our Community
                  </Link>
                  <Link
                    className="dropdown-item cursor-pointer text-decoration"
                    to="/add/add-banner-video"
                  >
                    Banner & Video
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="admin-panel">
          {!localStorage.getItem("token") ||
          localStorage.getItem("token") === "undefined" ||
          localStorage.getItem("token") === "" ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <li
                className="nav-item dropdown list-style"
                onMouseOver={overLogin}
                onMouseOut={outLogin}
              >
                <div className="login-panel align-center d-flex c-pointer">
                  Login
                  <i
                    style={{ marginLeft: "5px", color: " #19d395" }}
                    className="fa-solid fa-arrow-right-to-bracket"
                  ></i>
                </div>
                {loginData && (
                  <div
                    style={{ marginLeft: "18px", marginTop: "120px" }}
                    className="dropdown-menu item-list dropd-list "
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item cursor-pointer text-decoration "
                      to="/admin/admin-login"
                    >
                      Admin
                    </Link>

                    <Link
                      className="dropdown-item cursor-pointer text-decoration "
                      to="/users/register"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </li>
            </div>
          ) : (
            <div
              onClick={handleLogout}
              className="login-panel align-center d-flex c-pointer"
            >
              Logout
              <i
                style={{ marginLeft: "5px", color: " #19d395" }}
                className="fa-solid fa-arrow-right-to-bracket"
              ></i>
            </div>
          )}

          <div className="cart-icon" title="Your Achivement">
            <img src={Cart} alt="Your Achievement" />
            <div className="cart-length">0</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
