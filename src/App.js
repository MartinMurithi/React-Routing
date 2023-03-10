import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Home from "./Components/Home";
import "./App.css";
import { products } from "./Data";
import React, { createContext, useContext } from "react";
import Product from "./Components/Products/Product";

export const ProductsContext = createContext(products);

function App() {
  let product = useContext(ProductsContext);
  console.log(products);
  return (
    <ProductsContext.Provider value={product}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product/>} />
        </Routes>
      </>
    </ProductsContext.Provider>
  );
}

export default App;
