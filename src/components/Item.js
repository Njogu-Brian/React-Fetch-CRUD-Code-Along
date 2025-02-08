import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  //  Handle Add to Cart (PATCH)
  function handleAddToCartClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isInCart: !item.isInCart }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem)); // Update UI
  }

  //  Handle Delete (DELETE)
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => onDeleteItem(item)); // Update UI
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
