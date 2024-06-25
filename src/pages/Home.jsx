import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {products && <ProductsList products={products} />}
    </>
  );
}

export default Home;
