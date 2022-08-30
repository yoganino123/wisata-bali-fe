import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3000/admin/komenRating";

const getKomenRating = async (callback) => {
  try {
    let dataKomentar = await axios({
      method: "GET",
      url: URL,
    });
    callback(dataKomentar.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const delKomentar = async (id) => {
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

export { getKomenRating, delKomentar };
