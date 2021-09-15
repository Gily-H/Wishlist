import React from "react";

function Wishlist() {
  return (
    <form action="POST">
      <label className="wishlist-add">
        Wishlist Name:
        <input type="text" placeholder="name"></input>
      </label>
      <br />
      <label className="wishlist-add">
        Wishlist Description:
        <textarea className="wishlist-add" rows="4" cols="40"></textarea>
      </label>
      <br />
      <button type="submit">Save Wishlist</button>
    </form>
  );
}

export default Wishlist;
