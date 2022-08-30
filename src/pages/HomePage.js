import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getWisata } from "../axios/homeAxios";

const HomePage = () => {
  let cookies = Cookies.get("user");
  let navigate = useNavigate();
  const [getAllWisata, setGetAllWisata] = useState([]);

  useEffect(() => {
    if (cookies !== undefined) {
      let parsing = JSON.parse(cookies);
      if (parsing.level === "user") {
        navigate("/user");
      } else if (parsing.level === "admin") {
        navigate("/admin");
      } else {
        navigate("/login");
      }
    }
  }, [cookies]);

  useEffect(() => {
    getWisata((result) => setGetAllWisata(result));
  }, []);

  return (
    <div className="my-3">
      <div className="container-fluid px-3 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
          {getAllWisata.map((result) => {
            const { id, nama, alamat, images, rating } = result;
            // console.log(images);
            return (
              <div className="col mb-5" key={id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" height="150" src={"http://localhost:3000/" + images[0].image} alt="gambar" />
                  {/* {console.log(images)} */}
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{nama}</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center">
                        <Rating initialValue={rating} readonly size="25px" />
                      </div>
                      {/* <!-- Product price--> */}
                      {alamat}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link className="btn btn-outline-dark mt-auto" to={`wisata/${id}`}>
                        See Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
