import React from "react";
import { useSelector } from "react-redux";
import CartProductsItems from "../Components/CartProductsItems";

const CartProducts = () => {
  const { cartItems, total } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className=" flex justify-center items-center h-screen w-full">
        <h1 className=" text-pink-600 text-3xl font-bold  tracking-wider">
          Your Cart Is Empty?
        </h1>
      </div>
    );
  } else {
    return (
      <div className=" my-9  w-[75%] mx-auto">
        {cartItems?.map((item) => (
          <CartProductsItems key={item.id} {...item} />
        ))}
        <hr />
        <div className="flex justify-between items-center my-3">
          <h1 className=" text-purple-600 font-semibold tracking-wider">
            Total :
          </h1>
          <h1 className=" text-purple-600 font-semibold tracking-wider">
            $ {total.toFixed(2)}
          </h1>
        </div>
      </div>
    );
  }
};

export default CartProducts;
