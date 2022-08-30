import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDebugValue } from "react";
import Cookies from "js-cookie";

const URL = "http://localhost:3000/user";

const getWisataUser = async (cb) => {
  try {
    let wisataUser = await axios({
      method: "GET",
      url: URL,
    });
    cb(wisataUser.data.dataWisata);
    // console.log(wisataUser);
  } catch (error) {
    console.log(error);
  }
};

const getUserWisataId = async (wisataId, cb) => {
  // console.log(id);
  let checkCookie = Cookies.get("user");
  checkCookie = JSON.parse(checkCookie);
  // console.log(checkCookie);
  const { id } = checkCookie;
  // console.log(id);

  try {
    // formId = { userId: 6 };
    let result = await axios({
      method: "POST",
      url: URL + "/wisata/" + wisataId,
      data: { userId: id },
    });

    // console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const editKomenRating = async (id, form) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/wisata/addKomentar/" + id,
      data: form,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getProfileUser = async (cb) => {
  // console.log(id);
  let checkCookie = Cookies.get("user");
  checkCookie = JSON.parse(checkCookie);
  // console.log(checkCookie);
  const { id } = checkCookie;
  // console.log(id);

  try {
    // formId = { userId: 6 };
    let result = await axios({
      method: "POST",
      url: URL + "/profile",
      data: { id: id },
    });

    // console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const editProfile = async (form) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "/profile/",
      data: form,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const getCategoryId = async (id, cb) => {
  // console.log(id);

  try {
    let result = await axios({
      method: "GET",
      url: URL + "/category/" + id,
    });
    console.log(result.data);
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

export {
  getWisataUser,
  getUserWisataId,
  editKomenRating,
  getProfileUser,
  editProfile,
  getCategoryId,
};
