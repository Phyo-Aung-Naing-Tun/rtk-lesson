import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Nav from "./Components/Nav";
import CartProducts from "./app/CartProducts";
import SearchPage from "./Components/SearchPage";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cartProducts" element={<CartProducts />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
