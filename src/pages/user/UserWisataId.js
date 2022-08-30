import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getUserWisataId, editKomenRating } from "../../axios/user/userAxios";
import { getProfileUser, editProfile } from "../../axios/user/userAxios";

const UserWisataId = () => {
  const [getResKomentar, setgetResKomentar] = useState([]);
  const [getResWisata, setgetResWisata] = useState([]);
  const [getImage, setgetImage] = useState([]);
  const [getKomenId, setGetKomenId] = useState([]);
  const params = useParams();
  // console.log(getUserWisataId);
  const [getProfile, setGetProfile] = useState([]);
  //   console.log(getProfile);

  useEffect(() => {
    getProfileUser((result) => setGetProfile(result));
  }, []);

  useEffect(() => {
    getUserWisataId(params.id, (result) =>
      setgetResKomentar(result.resAllKomentar)
    );
  }, [params.id]);

  useEffect(() => {
    getUserWisataId(params.id, (result) => setgetResWisata(result.resWisata));
  }, [params.id]);

  useEffect(() => {
    getUserWisataId(params.id, (result) =>
      setgetImage(result.resWisata.images)
    );
  }, [params.id]);

  useEffect(() => {
    getUserWisataId(params.id, (result) =>
      setGetKomenId(result.resUserKomentar)
    );
  }, [params.id]);

  const navigate = useNavigate();
  const idUser = getKomenId.userId;

  // console.log(idUser);

  const [formAdd, setFormAdd] = useState({
    userId: "",
    rating: "",
    kometar: "",
  });

  // console.log(formAdd);
  const submitAdd = () => {
    console.log(getKomenId);
    if (getKomenId.kometar === "Belum Ada Ulasan") {
      editKomenRating(params.id, formAdd);
      navigate(`/user/wisata/${params.id}`);
    } else {
    }
  };

  return (
    <div>
      <h1>USER WISATA ID</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {getImage.map((result) => {
            const { id, image } = result;
            return (
              <div className="carousel-item active" key={id}>
                <img
                  height="500"
                  src={"http://localhost:3000/" + image}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="text-center">
        {/* <!-- Product name--> */}
        <h1 className="fw-bolder">{getResWisata.nama}</h1>
        <h3>{getResWisata.alamat}</h3>
        {/* <!-- Product reviews--> */}
        <div className="d-flex justify-content-center">
          <Rating initialValue={getResWisata.rating} readonly size="25px" />
        </div>
        {/* <!-- Product price--> */}
        <p>{getResWisata.deskripsi}</p>

        <div className="container-fluid px-3 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 row-center">
            <div className="col mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Ulasan Mu</h5>
                    <div className="d-flex justify-content-center">
                      <Rating
                        initialValue={getKomenId.rating}
                        readonly
                        size="25px"
                      />
                    </div>
                    <p>{getKomenId.kometar}</p>

                    <a
                      className="btn btn-sm btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#add"
                      onClick={() => {
                        setFormAdd({
                          ...formAdd,
                          userId: getProfile.id,
                        });
                      }}
                    >
                      + Ulasan
                    </a>

                    {/* +++ */}
                    <div
                      className="modal fade"
                      id="add"
                      tabIndex={-1}
                      aria-labelledby="addLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header text-center">
                            <h5 className="modal-title w-100" id="addLabel">
                              Ulasan Mu
                            </h5>
                          </div>
                          <div className="modal-body px-3 py-4">
                            {/* <form> */}
                            {/* input ulasan */}
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Ulasan
                              </label>
                              <input
                                type="text"
                                value={formAdd.kometar}
                                onChange={(e) =>
                                  setFormAdd({
                                    ...formAdd,
                                    kometar: e.target.value,
                                  })
                                }
                                required
                                className="form-control"
                                id="name"
                                placeholder={getKomenId.kometar}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="rating" className="form-label">
                                Rating (0-5)
                              </label>

                              <select
                                className="form-select"
                                required
                                aria-label="Default select example"
                                onChange={(e) =>
                                  setFormAdd({
                                    ...formAdd,
                                    rating: e.target.value,
                                  })
                                }
                              >
                                <option defaultValue="">Pilih rating...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>

                            <div className="mb-3 py-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-dark mx-1"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                onClick={() => submitAdd()}
                                className="btn btn-sm btn-dark"
                              >
                                Submit
                              </button>
                            </div>
                            {/* </form> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-lg-5 mt-5">
        <h3>Ringkasan Ulasan</h3>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
          {getResKomentar.length > 0 ? (
            getResKomentar.map((result) => {
              const { id, rating, kometar, createdAt, user } = result;
              return (
                <div className="col mb-5" key={id}>
                  <div className="card h-100">
                    <img
                      className="card-img-top "
                      height="150"
                      src={"http://localhost:3000/" + user.image}
                      alt="gambar"
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{user.nama}</h5>
                        <div className="d-flex justify-content-center">
                          <Rating initialValue={rating} readonly size="25px" />
                        </div>
                        <p>{createdAt}</p>
                        {kometar}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col mb-5">
              <p>Belum ada ulasan...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserWisataId;
