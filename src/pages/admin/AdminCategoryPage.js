import React, { useState, useEffect } from "react";
import { getCategories, getCategoryById, addCategory, delCategory, updCategory } from "../../axios/admin/adminCategoryAxios";

const AdminCategoryPage = () => {
  // ! bagian tampil user
  // tampilkan user
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories((res) => setCategories(res));
  }, []);

  //tambah user
  const [formAdd, setFormAdd] = useState({
    nama: "",
  });
  const submitAdd = () => {
    addCategory(formAdd);
  };

  // ! bagian edit user
  // edit user
  const [catId, setCatId] = useState();
  const [formEdit, setFormEdit] = useState({});

  const btnEdit = (id) => {
    getCategoryById(id, (res) => {
      setCatId(id);
      setFormEdit({ nama: res.nama });
    });
  };

  const submitEdit = () => {
    // console.log(formEdit);
    updCategory(catId, formEdit);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 mx-auto border my-1 py-3 rounded">
          <h4 className="text-center">Data Kategori</h4>
          <a className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#add">
            Tambah Kategori
          </a>
          <div className="table-responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nama Kategori</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, index) => {
                  const { id, nama } = cat;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>{nama}</td>
                      <td>
                        <a
                          className="btn btn-sm btn-dark mx-1 "
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                          onClick={() => btnEdit(id)}
                        >
                          Edit
                        </a>
                        <a className="btn btn-sm btn-dark" onClick={() => delCategory(id)}>
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
                Tambah Data Kategori
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Kategori
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setFormAdd({ ...formAdd, nama: e.target.value })}
                    required
                    className="form-control"
                    id="name"
                    placeholder="Masukkan nama kategori..."
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
                Ubah Data Kategori
              </h5>
            </div>
            <div className="modal-body px-3 py-4">
              {/* <form> */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nama Kategori
                </label>
                <input
                  type="text"
                  value={formEdit.nama}
                  className="form-control"
                  id="name"
                  onChange={(e) => setFormEdit({ nama: e.target.value })}
                />
              </div>
              <div className="mb-3 py-2">
                <button type="button" className="btn btn-sm btn-dark mx-1" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" onClick={() => submitEdit()} className="btn btn-sm btn-dark">
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

export default AdminCategoryPage;
