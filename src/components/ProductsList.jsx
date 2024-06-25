import React from "react";
import Product from "./Product";

function ProductsList({ products }) {
  return (
    <>
      {products.products.map((product) => {
        const { title, id, description } = product;
        return (
          <Product key={id} title={title} description={description} id={id} />
        );
      })}
    </>
  );
}

export default ProductsList;
