/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(error.message);
        setIsLoading(false);
      });
  }, []);

  console.log(products);
  return (
    <div>
      Hello:
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
    </div>
  );
};

export default Products;
