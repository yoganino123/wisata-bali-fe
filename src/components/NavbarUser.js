import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategory } from "../axios/navbarAxios";
import { logoutUser } from "../axios/homeAxios";
import { getProfileUser } from "../axios/user/userAxios";
import Cookies from "js-cookie";

const NavbarUser = () => {
  let cookies = Cookies.get("user");
  let parsing;
  cookies !== undefined ? (parsing = JSON.parse(cookies)) : (parsing = "");
  const [getProfile, setGetProfile] = useState([]);

  useEffect(() => {
    getProfileUser((result) => setGetProfile(result));
  }, []);

  const logoutHandler = async () => {
    logoutUser();
  };

  //get Category
  const [getAllCategory, setGetAllCategory] = useState([]);
  // console.log(getAllCategory);

  useEffect(() => {
    getCategory((result) => setGetAllCategory(result.data));
  }, []);
  return (
    <>
      <Link className="navbar-brand" to="/">
        Wisata Bali Apps
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* category dropdown */}

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul className="dropdown-menu">
              {getAllCategory.map((result) => {
                const { id, nama } = result;
                return (
                  <li key={id}>
                    <Link className="dropdown-item" to={`user/category/${id}`}>
                      {nama}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
            >
              {getProfile.image === null ? (
                <img
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1596/1596810.png"
                  }
                  width="25"
                  height="25"
                  className="rounded-circle"
                />
              ) : (
                <img
                  src={"http://localhost:3000/" + getProfile.image}
                  width="25"
                  height="25"
                  className="rounded-circle"
                />
              )}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link
                className="dropdown-item"
                to={`/user/profile/${parsing.id}`}
              >
                Profile
              </Link>
              <Link
                to="/"
                onClick={() => logoutHandler()}
                className="dropdown-item"
              >
                Logout
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarUser;
