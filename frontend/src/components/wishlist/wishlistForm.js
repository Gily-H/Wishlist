import React from "react";
import "./wishlistForm.css";

const WishlistName = () => {
  return (
    <label className="wishlist-add">
      Wishlist Name:
      <br />
      <input className="wishlist-add-input" type="text" placeholder="name"></input>
    </label>
  );
};

const WishlistDescription = () => {
  return (
    <label className="wishlist-add">
      Wishlist Description:
      <textarea className="wishlist-add-input" rows="4" cols="40"></textarea>
    </label>
  );
};

const SubmitButton = () => {
  return (
    <button className="add-Button" type="submit">
      Save Wishlist
    </button>
  );
};

function Wishlist() {
  return (
    <>
      <h3>Create A Wishlist</h3>
      <div className="wishlist-add-container">
        <form action="POST" className="wishlist-form">
          <WishlistName />
          <WishlistDescription />
          <SubmitButton />
        </form>
      </div>
    </>
  );
}

export default Wishlist;
