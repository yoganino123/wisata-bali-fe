import React, { useState, useEffect } from "react";
import { getUsers, getUserById, addUser, delUser, updUser } from "../../axios/admin/adminUserAxios";
import { useNavigate } from "react-router-dom";

const AdminUserPage = () => {
  const navigate = useNavigate();
  // ! bagian tampil user
  // tampilkan user
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers((res) => setUsers(res));
  }, []);

  //tambah user
  const [formAdd, setFormAdd] = useState({
    nama: "",
    email: "",
    pass: "",
  });

  const submitAdd = () => {
    addUser(formAdd);
  };

  // ! bagian edit user
  // edit user
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState();
  const [formEdit, setFormEdit] = useState();

  const btnEdit = (id) => {
    getUserById(id, (res) => {
      setUser(res);
      setUserId(id);
      setFormEdit({ level: res.level });
    });
  };

  const submitEdit = () => {
    updUser(userId, formEdit);
    navigate("/admin/pengguna");
  };

  // TODO bagian hapus user belum otomatis reload ulang pagenya

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Pengguna</h4>
          <a className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#add">
            Tambah Pengguna
          </a>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Email</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  const { id, nama, email, level } = user;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{nama}</td>
                      <td>{email}</td>
                      <td>{level}</td>
                      <td>
                        <a
                          className="btn btn-sm btn-dark mx-1 "
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                          onClick={() => btnEdit(id)}
                        >
                          Edit
                        </a>
                        <a className="btn btn-sm btn-dark" onClick={() => delUser(id)}>
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
      {/* add modal */}
      <div className="modal fade" id="add" tabIndex={-1} aria-labelledby="addLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="addLabel">
                Tambah Data Pengguna
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFormAdd({ ...formAdd, nama: e.target.value })}
                    required
                    className="form-control"
                    id="name"
                    placeholder="Masukkan nama..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFormAdd({ ...formAdd, email: e.target.value })}
                    required
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setFormAdd({ ...formAdd, pass: e.target.value })}
                    required
                    className="form-control"
                    id="pass"
                    placeholder="Masukkan kata sandi"
                  />
                </div>
                <div className="mb-3 py-2">
                  <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" onClick={() => submitAdd()} className="btn btn-sm btn-dark">
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
      <div className="modal fade" id="edit" tabIndex={-1} aria-labelledby="editLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="editLabel">
                Ubah Data Pengguna
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              {/* <form> */}
              <div className="mb-3">
                <label htmlFor="ename" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  value={user.nama}
                  required
                  readOnly
                  className="form-control"
                  id="ename"
                  placeholder="Masukkan nama..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="eemail" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  value={user.email}
                  required
                  readOnly
                  className="form-control"
                  id="eemail"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Level
                </label>
                <select
                  className="form-select"
                  required
                  aria-label="Default select example"
                  onChange={(e) => setFormEdit({ level: e.target.value })}
                >
                  {user.level === "user" ? (
                    <>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </>
                  ) : (
                    <>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </>
                  )}
                </select>
              </div>
              <div className="mb-3 py-2">
                <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-sm btn-dark" onClick={() => submitEdit()}>
                  Ubah
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserPage;
