import React from "react";

const Home = () => {
  return (
    <div>
      <h2>Welcome to Wishlist!</h2>
      <h4>
        Create customized wishlists through a simple UI by dragging and dropping URLs to the desired
        items into your own personal lists. Create an account to save your lists or create a
        wishlist without an account for a quick temporary list.
      </h4>

      <div className="d-grid gap-2 col-2 mx-auto">
        <button className="btn btn-warning" type="button">
          Create a new Wishlist
        </button>
      </div>
    </div>
  );
};

export default Home;
