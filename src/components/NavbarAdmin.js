import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../axios/homeAxios";

const NavbarAdmin = () => {
  //get Category
  let navigate = useNavigate();

  const logoutHandler = async () => {
    logoutUser();
  };

  return (
    <>
      <Link className="navbar-brand" to="/">
        Wisata Bali
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
          <li className="nav-item">
            <Link to="/admin/wisata" className="nav-link">
              Wisata
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/pengguna" className="nav-link">
              Pengguna
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/kategori" className="nav-link">
              Kategori
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/komentar" className="nav-link">
              Komentar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" onClick={() => logoutHandler()} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarAdmin;
