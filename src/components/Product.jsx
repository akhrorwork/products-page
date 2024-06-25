import React from "react";
import { Link } from "react-router-dom";

function Product({ id, title, description }) {
  return (
    <Link to={`/singleProduct/${id}`}>
      <h3> {title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default Product;
