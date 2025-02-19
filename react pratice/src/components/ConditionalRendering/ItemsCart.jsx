import React from "react";

const ItemsCart = () => {
  const items = ["Wireless EarBuds", "Iphone", "Headphones", "Keyboard"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart </h2>}

      <ul>
        <h4>Product List</h4>
        {items.map((items) => (
          <li key={Math.random()}> {items} </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsCart;
