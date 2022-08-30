import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../axios/navbarAxios";
import NavbarUser from "./NavbarUser";
import NavbarAdmin from "./NavbarAdmin";
import NavbarDefault from "./NavbarDefault";

const Navbar = (props) => {
  //get Cookies
  let checkCookie = Cookies.get("user");
  // let parsing = checkCookie !== undefined ? JSON.parse(checkCookie) : "";
  // console.log(parsing.level)

  const [menu, setMenu] = useState(<NavbarDefault></NavbarDefault>);

  useEffect(() => {
    if (checkCookie !== undefined) {
      let parsing = JSON.parse(checkCookie);
      if (parsing.level === "user") {
        setMenu(<NavbarUser></NavbarUser>);
      } else if (parsing.level === "admin") {
        setMenu(<NavbarAdmin></NavbarAdmin>);
      } else {
        setMenu(<NavbarDefault></NavbarDefault>);
      }
    }
  }, [checkCookie]);

  //get Category

  const [getAllCategory, setGetAllCategory] = useState([]);
  // console.log(getAllCategory);

  useEffect(() => {
    getCategory((result) => setGetAllCategory(result.data));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">{menu}</div>
      </nav>
    </div>
  );
};

export default Navbar;
