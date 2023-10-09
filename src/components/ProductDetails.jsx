import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/Slices/CartSlice";

const ProductDetails = () => {
  const { state } = useLocation();

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-3 p-6">
      <div className="object-cover">
        <img className="w-64" src={state.product.image} alt="" />
      </div>
      <h1 className="text-2xl font-semibold">
        <span className="text-blue-800">Name:</span> {state.product.title}
      </h1>
      <h1 className="text-blue-800 text-lg font-semibold">
        <span className="text-gray-900 text-2xl font-bold ">Category :</span>{" "}
        {state.product.category}
      </h1>
      <p className="w-96 leading-4 font-semibold text-gray-700">
        <span className="font-bold text-lg ">Description :</span>{" "}
        {state.product.description}
      </p>
      <span className="text-2xl font-bold text-black">
        Price :{state.product.price}Rs
      </span>

      <button
        onClick={() => dispatch(addToCart(state.product))}
        className="p-2 px-4 font-semibold bg-green-600 hover:bg-green-900 text-white rounded-md"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
