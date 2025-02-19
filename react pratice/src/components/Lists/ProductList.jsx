import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "HeadPhones",
      price: "$199",
    },
  ];
  let counter = 1;
  return (
    <div>
      <h1>ProductList</h1>
      {products.map(({ id, name, price }) => (
        <div key={id}>
            <h1>{counter++}. <br />
            Name: {name} </h1>
            <h1>Price: {price} </h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
