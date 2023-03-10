import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";
import NavBar from "../Nav/NavBar";
import "./Products.css";

function Products() {
  let products = useContext(ProductsContext);
  const navigate = useNavigate();
  console.log(products);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // create a side navbar with categories without having duplicates
    const categories = products.map((category) => category.category);
    console.log(categories);

    const set = new Set(categories);

    const categoriesArr = Array.from(set);

    setCategories(categoriesArr);
  }, [products]);

  const handleNavigate = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <NavBar />
      <div className="productsLayout">
        <div className="sideNav">
          {categories.map((category, index) => {
            return (
              <NavLink ><p key={index} className="category">
                {category}
              </p></NavLink>
            );
          })}
        </div>

        {products && products.length > 0 ? (
        <div className="productContainer">
          {products.map((datum) => {
            return (
              <div key={datum.index} className="product">
                <img
                  src={datum.thumbnail}
                  alt=""
                  srcset=""
                  onClick={() => {
                    handleNavigate(datum.id);
                  }}
                />
                <p className="title">{datum.title}</p>
                <p className="price">${datum.price}</p>
                <p className="more">
                  <Link to={`/products/${datum.id}`}>See More</Link>
                </p>
                <button className="cartBtn">Add to Cart</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No products available</h3>
      )}
      </div>
    </>
  );
}

export default Products;
