import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Login,
  Register,
  Category,
  WisataId,
  UserHomePage,
  AdminUserPage,
  AdminCategoryPage,
  AdminWisataPage,
  UserWisataId,
  AdminKomenPage,
  EditUser,
  AdminPage,
  UserCategory,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        {/* HOME PAGE */}
        <Route path="" element={<HomePage></HomePage>}></Route>

        <Route path="wisata">
          <Route path=":id" element={<WisataId></WisataId>}></Route>
        </Route>

        <Route path="login" element={<Login></Login>}></Route>

        <Route path="register" element={<Register></Register>}></Route>

        <Route path="category">
          <Route path=":id" element={<Category></Category>}></Route>
        </Route>

        {/* USER PAGE */}
        <Route path="user" element={<UserHomePage></UserHomePage>}></Route>
        <Route
          path="user/wisata/:id"
          element={<UserWisataId></UserWisataId>}
        ></Route>
        <Route
          path="user/category/:id"
          element={<UserCategory></UserCategory>}
        ></Route>
        <Route path="user/profile/:id" element={<EditUser></EditUser>}></Route>

        {/* ADMIN PAGE */}
        <Route path="admin" element={<AdminPage></AdminPage>}></Route>
        <Route
          path="admin/komentar"
          element={<AdminKomenPage></AdminKomenPage>}
        ></Route>
        <Route
          path="admin/pengguna"
          element={<AdminUserPage></AdminUserPage>}
        ></Route>
        <Route
          path="admin/kategori"
          element={<AdminCategoryPage></AdminCategoryPage>}
        ></Route>
        <Route
          path="admin/wisata"
          element={<AdminWisataPage></AdminWisataPage>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
