import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loadering from "./Loader";

const SearchPage = () => {
  const location = useLocation();
  const items = location.state;

  if (items.length === 0) {
    return <Loadering />;
  } else {
    return (
      <div className=" flex flex-wrap justify-center items-center gap-10 my-10">
        {items?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    );
  }
};

export default SearchPage;
