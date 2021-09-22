import React from "react";

function ItemPage() {
  return (
    <form action="POST">
      <label className="item-details">
        Item name:
        <input type="text" placeholder="item name"></input>
      </label>
      <label className="item-details">
        Item description:
        <input type="text" placeholder="description"></input>
      </label>
      <label className="item-details">
        Item price:
        <input type="number" placeholder="price"></input>
      </label>
    </form>
  );
}

export default ItemPage;
