import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartValue = useSelector((state) => state.cart.cart) || [];

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const total = cartValue.map((item) => item.price * item.quantity);

  const totalPrice = total.reduce((prev, curr) => prev + curr, 0);

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="min-h-screen flex flex-col p-4">
      {totalPrice > 0 && (
        <div className="flex justify-between items-center">
          <div className="border-2 border-gray-600 p-5 rounded-md">
            <span className="font-bold text-blue-600 text-lg">
              Total Price :
            </span>
            <span className="text-lg ml-2 text-black font-extrabold">
              {totalPrice.toFixed(2)} Rs.
            </span>
          </div>
          <button className="p-2 bg-green-500 hover:bg-green-900 text-white text-lg font-semibold rounded-md">
            Proceed To Payment
          </button>
        </div>
      )}
      {cartValue.length > 0 ? (
        cartValue.map((product) => (
          <div
            className="flex justify-between items-center border-gray-900 border-2 p-4 rounded-xl mt-4"
            key={product.id}
          >
            <img
              className="w-12 h-12 rounded-full"
              src={product.image}
              alt=""
            />
            <span className="text-lg font-semibold text-blue-700">
              {product.title.substring(0, 20)}
            </span>
            <span className="text-xl font-semibold">
              Quantity :<span className="font-normal"> {product.quantity}</span>
            </span>
            <p>
              <span className="font-bold text-xl">Price :</span>{" "}
              {product.quantity * product.price} Rs.
            </p>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="p-2 rounded-md bg-red-600 text-white hover:bg-red-800 font-semibold"
            >
              Remove From Cart
            </button>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center min-h-[400px] justify-center text-3xl font-bold text-red-950">
          Cart Is Empty !
          <div
            onClick={() => navigate("/")}
            className="p-2 mt-3 border-2 text-lg border-red-600 text-white bg-slate-500 cursor-pointer hover:bg-red-800 hover:rounded-md"
          >
            Go To Home
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
