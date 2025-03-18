import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Shopping List </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <span> </span>-<span> </span>
        <label htmlFor="pquantity">Product Quantity : </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name: 
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
