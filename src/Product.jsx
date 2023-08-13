import React, { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import Loadering from "./Components/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
    setLoad(false);
  };
  if (load) {
    return <Loadering />;
  } else {
    return (
      <div className=" flex flex-wrap my-8 justify-center items-center gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  }
};

export default Product;
