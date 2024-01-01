import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
import dummyImg from "../../assets/naruto.jpeg";

function Category({ category }) {
  // console.log("Category", category);
  // console.log(category.attributes.key);
  const navigate = useNavigate();
  return (
    <div
      className="Category"
      style={{
        backgroundImage: `url(${category.attributes.image.data.attributes.url})`,
      }}
      onClick={() => navigate(`/category/${category.attributes.key}`)}
    >
      <div className="category-content center">
        <h3 className="heading">{category.attributes.title}</h3>
      </div>
    </div>
  );
}

export default Category;
