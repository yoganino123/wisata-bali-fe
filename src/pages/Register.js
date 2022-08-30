import React, { useState } from "react";
import { regisUser } from "../axios/homeAxios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pass: "",
  });

  const submitHandler = () =>{
    regisUser(form)
    navigate('/login')
    // console.log(form)
  }

  return (
    <>
      <div className="tab-content row my-2 px-5">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <div className="col-6 mx-auto my-2 border border-dark-0 rounded shadow">
            <div>
              <h3 className="text-center my-3 font-fams">Register</h3>

              {/* <!-- Nama input --> */}
              <div className="form-outline mb-4 px-4 my-4">
                <input
                  type="text"
                  id="nama"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
                <label className="form-label" htmlFor="regisName">
                  Nama
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-4 px-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <label className="form-label" htmlFor="regisEmail">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4 px-4">
                <input
                  type="password"
                  id="pass"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, pass: e.target.value })}
                />
                <label className="form-label" htmlFor="regisPassword">
                  Password
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4 text-center"
                  onClick={()=> submitHandler()}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
