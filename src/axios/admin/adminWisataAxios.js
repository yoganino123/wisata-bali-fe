import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/admin/wisata";

const getWisatas = async (callback) => {
  try {
    let dataWisata = await axios({
      method: "GET",
      url: URL,
    });
    callback(dataWisata.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const getWisataById = async (id, cb) => {
  try {
    let dataWisata = await axios({
      method: "GET",
      url: `${URL}/${id}`,
    });
    cb(dataWisata.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const addWisata = async (form, dataAdd) => {
  try {
    let addWisata = await axios({
      method: "POST",
      url: `${URL}`,
      data: form,
    });
    dataAdd(addWisata.data);
    Swal.fire("Create", "Create Success", "success");
    window.location.reload(true);
  } catch (err) {
    console.log(err.response.data);
  }
};

const delWisata = async (id) => {
  try {
    await axios({
      method: "DELETE",
      url: `${URL}/${id}`,
    });
    Swal.fire("Delete", "Delete Success", "success");
    window.location.reload(true);
  } catch (err) {
    console.log(err.response.data);
  }
};

const updWisata = async (id, form) => {
  try {
    await axios({
      method: "PUT",
      url: `${URL}/${id}`,
      data: form,
    });
    Swal.fire("Update", "Update Success", "success");
    window.location.reload(true);
  } catch (err) {
    console.log(err.response.data);
  }
};

export { getWisatas, getWisataById, addWisata, delWisata, updWisata };
