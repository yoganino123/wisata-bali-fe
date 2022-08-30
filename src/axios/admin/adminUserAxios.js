import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/admin/users";

const getUsers = async (callback) => {
  try {
    let dataUsers = await axios({
      method: "GET",
      url: URL,
    });
    callback(dataUsers.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const getUserById = async (id, cb) => {
  try {
    let dataUser = await axios({
      method: "GET",
      url: `${URL}/${id}`,
    });
    cb(dataUser.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const addUser = async (form) => {
  try {
    await axios({
      method: "POST",
      url: `${URL}`,
      data: form,
    });
    Swal.fire("Create", "Create Success", "success");
    window.location.reload(true);
  } catch (err) {
    console.log(err.response.data);
  }
};

const delUser = async (id) => {
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

const updUser = async (id, form) => {
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

export { getUsers, getUserById, addUser, delUser, updUser };
