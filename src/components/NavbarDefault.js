import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../axios/navbarAxios";

const NavbarDefault = () => {
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
                    <Link className="dropdown-item" to={`category/${id}`}>
                      {nama}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDefault;
