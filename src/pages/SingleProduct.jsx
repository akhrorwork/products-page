import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  console.log(product);
  return (
    <>
      {product && (
        <div>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt="" />
        </div>
      )}
    </>
  );
}

export default SingleProduct;
