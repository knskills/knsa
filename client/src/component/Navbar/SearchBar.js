import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ openNavMenu, closeNavMenu, setCatNavList }) => {
  const [showCatContain, setShowCatContain] = useState(false);

  const [cateGoryDown, setCateGoryDown] = useState(false);
  const [categoryShow, setCateGoryShow] = useState(false);

  const handleCategory = () => {
    setCateGoryDown(true);
  };

  const handleOut = () => {
    setCateGoryDown(false);
  };

  // const openNavMenu = () => {
  //   setCateGoryShow(true);
  // };

  // const closeNavMenu = () => {
  //   setCateGoryShow(false);
  // };

  return (
    <>
      <i
        onClick={() => openNavMenu(setCateGoryShow(true), setCatNavList(true))}
        className="fa-solid fa-bars fa-solid-bars"
      ></i>

      <div
        className={
          categoryShow
            ? "search-container show-contain"
            : "search-container hid-contain"
        }
      >
        <i
          onClick={() =>
            closeNavMenu(setCateGoryShow(false), setCatNavList(false))
          }
          className="fa-solid fa-xmark fa-solid-x"
        ></i>
        <div
          onMouseOver={handleCategory}
          onMouseOut={handleOut}
          className="search-flexbar search-category"
        >
          <div className="search-form d-flex align-item-center">
            <div className="training-btn">
              Trainings<i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>

          <div className="trainings-category">
            <div className="category-sidemenu">
              {cateGoryDown && (
                <div className="megaMenuWrap">
                  <ul className="megaMenu">
                    {/* Netma */}
                    <li className="showMenu active">
                      <Link
                        onClick={() => setShowCatContain(!showCatContain)}
                        to=""
                      >
                        Network Marketing
                      </Link>
                      <ul
                        className={
                          showCatContain
                            ? "second show second-show-cat"
                            : "second show second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link
                                onClick={() =>
                                  setShowCatContain(!showCatContain)
                                }
                                to="/trainings/trainings_category"
                              >
                                Network Marketing
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Motivate */}
                    <li
                      onClick={() => setShowCatContain(!showCatContain)}
                      className=""
                    >
                      <Link to="">Motivational Talks</Link>
                      <ul
                        className={
                          showCatContain
                            ? "second second-show-cat"
                            : "second second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link to="/trainings/trainings_category">
                                Motivational Talks
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Leadership */}

                    <li className="">
                      <Link to="/">Leadership Skills</Link>
                      <ul
                        className={
                          showCatContain
                            ? "second second-show-cat"
                            : "second second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link to="/">Leadership Skills</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Sales Coatch */}
                    <li className="">
                      <Link to="">People Skills</Link>
                      <ul
                        className={
                          showCatContain
                            ? "second second-show-cat"
                            : "second second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link to="/">People Skills</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Digital Marketing */}
                    <li className="">
                      <Link to="">Selling Skills</Link>
                      <ul
                        className={
                          showCatContain
                            ? "second second-show-cat"
                            : "second second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link to="/">Selling Skills</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    {/* Health & Wellness */}
                    <li className="">
                      <Link to="">Public Skills</Link>
                      <ul
                        className={
                          showCatContain
                            ? "second second-show-cat"
                            : "second second-hide-cat"
                        }
                      >
                        <li>
                          <Link to="">Trainings</Link>
                          <ul>
                            <li>
                              <Link to="/">Public Skills</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="search-flexbar">
          <div className="search-form d-flex align-item-center">
            <form className="form-inline d-flex align-item-center  search-form my-2 my-lg-0">
              <i className="fa fa-search"></i>
              <input
                className="form-control mr-sm-2"
                type="search"
                aria-label="Search"
                placeholder="Search Your Future here"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
