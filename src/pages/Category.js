import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getCategoryId } from "../axios/homeAxios";

const HomePage = () => {
  const [getIdCategory, setGetIdCategory] = useState([]);
  const params = useParams();

  //   console.log(params.id);
  useEffect(() => {
    getCategoryId(params.id, (result) => setGetIdCategory(result));
  }, [params.id]);

  return (
    <div className="my-3">
      <h1>
        Category {getIdCategory.length > 0 && getIdCategory[0].category.nama}
      </h1>
      <div className="container-fluid px-3 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
          {getIdCategory.map((result) => {
            const { id, nama, alamat, images, rating } = result;
            console.log(result);
            return (
              <div className="col mb-5" key={id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    height="150"
                    src={"http://localhost:3000/" + images[0].image}
                    alt="gambar"
                  />
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
                      <a
                        className="btn btn-outline-dark mt-auto"
                        href={`http://localhost:3001/wisata/` + id}
                      >
                        See Detail
                      </a>
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
