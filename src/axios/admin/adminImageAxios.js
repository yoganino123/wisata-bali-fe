import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/admin/images";

const getImages = async (callback) => {
  try {
    let dataImages = await axios({
      method: "GET",
      url: URL,
    });
    callback(dataImages.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const getImageById = async (id, cb) => {
  try {
    let dataImage = await axios({
      method: "GET",
      url: `${URL}/${id}`,
    });
    cb(dataImage.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const addImage = async (form) => {
  try {
    await axios({
      method: "POST",
      url: `${URL}`,
      data: form,
    });
    Swal.fire("Create", "Create Success", "success");
  } catch (err) {
    console.log(err.response.data);
  }
};

const delImage = async (id) => {
  try {
    await axios({
      method: "DELETE",
      url: `${URL}/${id}`,
    });
    Swal.fire("Delete", "Delete Success", "success");
  } catch (err) {
    console.log(err.response.data);
  }
};

export { getImages, getImageById, addImage, delImage };
