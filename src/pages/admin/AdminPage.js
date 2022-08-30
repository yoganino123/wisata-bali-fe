import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminKomenPage = () => {
  let cookies = Cookies.get("user");
  let navigate = useNavigate();

  useEffect(() => {
    if (cookies !== undefined) {
      let parsing = JSON.parse(cookies);
      if (parsing.level === "user") {
        navigate("/user");
      } else if (parsing.level === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [cookies]);

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-2 mx-auto">
          <div className="card" style={{ width: "12rem" }}>
            <div className="card-body">
              <Link to="wisata">
                <i className="fa-solid fa-mountain-sun card-font" />
              </Link>
              <h5 className="card-title my-4">Wisata</h5>
            </div>
          </div>
        </div>
        <div className="col-2 mx-auto">
          <div className="card" style={{ width: "12rem" }}>
            <div className="card-body">
              <Link to="pengguna">
                <i className="fa-solid fa-users card-font" />
              </Link>
              <h5 className="card-title my-4">Pengguna</h5>
            </div>
          </div>
        </div>
        <div className="col-2 mx-auto">
          <div className="card" style={{ width: "12rem" }}>
            <div className="card-body">
              <Link to="kategori">
                <i class="fa-solid fa-list card-font"></i>
              </Link>
              <h5 className="card-title my-4">Kategori</h5>
            </div>
          </div>
        </div>
        <div className="col-2 mx-auto">
          <div className="card" style={{ width: "12rem" }}>
            <div className="card-body">
              <Link to="komentar">
                <i class="fa-solid fa-comments card-font"></i>
              </Link>
              <h5 className="card-title my-4">Komentar</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKomenPage;
