import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import CartPage from "../pages/CartPage";
import ProductDetails from "../components/ProductDetails";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
