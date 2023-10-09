import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchProducts } from "../Redux/Slices/ProductsSlice";
import Loader from "../components/Loader";

const Products = () => {
  const { productsData: products, status } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUS.LOADING) return <Loader />;

  return (
    <div className="flex w-[70%] mx-auto flex-wrap gap-4">
      {products.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
