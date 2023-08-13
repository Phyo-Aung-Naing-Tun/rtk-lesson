import { Badge, Button } from "@mantine/core";
import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrease,
  increase,
  removeCart,
} from "../features/cartSlide";

const CartProductsItems = (props) => {
  const { title, image, price, quentity } = props;

  const oneItemPrice = price * quentity;

  const dispatch = useDispatch();
  return (
    <div className="flex justify-between   mb-5 items-center">
      <div className=" flex gap-3">
        <img src={image} className=" w-[100px] h-[100px] object-contain" />
        <div className=" flex flex-col gap-3">
          <h1 className=" text-purple-600 font-semibold tracking-wider">
            {title?.substring(0, 15)}...
          </h1>
          <div>
            <Badge color="grape" className="  text-[14px]" variant="light">
              $ {oneItemPrice.toFixed(2)}
            </Badge>
          </div>
          <div
            onClick={() => {
              dispatch(removeCart(props));
            }}
          >
            <Badge
              color="red"
              className=" cursor-pointer  pointer-events-none text-[14px]"
              variant="light"
            >
              remove
            </Badge>
          </div>
        </div>
      </div>
      <div className=" gap-1 flex flex-col justify-center items-center ">
        <div
          onClick={() => {
            dispatch(increase(props));
          }}
          className=" text-xl border cursor-pointer font-bold bg-purple-500 text-white rounded"
        >
          <MdOutlineKeyboardArrowUp />
        </div>
        <div className=" text-lg pointer-events-none cursor-pointer font-semibold  text-purple-500">
          {quentity}
        </div>
        <div
          onClick={() => {
            dispatch(decrease(props));
          }}
          className=" text-xl border cursor-pointer font-bold bg-purple-500 text-white rounded"
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default CartProductsItems;
