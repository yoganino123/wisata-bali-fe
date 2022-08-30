import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/home/category";

const getCategory = async (cb) => {
  try {
    let getCategory = await axios({
      method: "GET",
      url: URL,
    });
    cb(getCategory);
    // console.log(getCategory);
  } catch (error) {
    console.log(error);
  }
};

export { getCategory };
