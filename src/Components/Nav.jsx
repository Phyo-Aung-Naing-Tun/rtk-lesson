import { Badge, Button, FileButton, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { BsBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const nav = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
  };
  const submitting = (e) => {
    e.preventDefault();
    const filterProducts = products.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    if (search === null) {
      nav("/");
    } else nav("/search", { state: filterProducts });
  };
  return (
    <div className="flex shadow  justify-evenly py-5">
      <Link to={"/"}>
        <h1 className=" text-2xl font-bold text-purple-600">My shop</h1>
      </Link>
      <div className=" flex gap-3">
        <form onSubmit={submitting}>
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className=" w-60"
            placeholder="Search"
          />
        </form>
        <Link to={"/cartProducts"}>
          <div className="relative">
            <button className="bg-purple-600 p-2 flex items-center rounded-md justify-center text-white">
              <BsBasketFill />
            </button>
            <Badge className=" absolute left-6  bottom-8" color="violet">
              {cartItems.length}
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
