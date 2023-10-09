import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Slices/CartSlice";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(addToCart(product));
  }
  return (
    <Link
      to={`/productDetails/${product.id}`}
      state={{ product: product }}
      className="p-2 flex gap-y-2 rounded-sm items-center justify-center flex-col shadow-lg hover:bg-slate-100 hover:cursor-pointer"
    >
      <img
        src={product.image}
        alt=""
        className="w-[200px] h-[200px] rounded-sm"
      />
      <p className="font-semibold">{product.title.substring(1, 6)}</p>
      <p className="font-bold">Rs.{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="p-2 rounded-sm bg-purple-500 hover:bg-purple-800 text-white font-semibold text-md"
      >
        Add To Cart
      </button>
    </Link>
  );
};

export default ProductList;
