import React, { useState, useEffect } from "react";
import { getKomenRating, delKomentar } from "../../axios/admin/adminKomenAxios";

const AdminKomenPage = () => {
  const [getKomentar, setKomentar] = useState([]);
  useEffect(() => {
    getKomenRating((res) => setKomentar(res));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Komentar</h4>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Wisata</th>
                  <th scope="col">Pengguna</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Komentar</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getKomentar.map((kom, index) => {
                  const { id, wisatum, user, rating, kometar } = kom;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{wisatum.nama}</td>
                      <td>{user.nama}</td>
                      <td>{rating}</td>
                      <td>{kometar}</td>
                      <td>
                        <a className="btn btn-sm btn-dark" onClick={() => delKomentar(id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKomenPage;
