import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="welcome-page-container">
      <h2 className="welcome-heading">Welcome to Wishlist!</h2>
      <h4>
        Create customized wishlists through a simple UI by dragging and dropping URLs to the desired
        items into your own personal lists. Create an account to save your lists or create a
        wishlist without an account for a quick temporary list.
      </h4>

      <div className="d-grid gap-2 col-2 mx-auto">
        <Link to="/wishlist-add">
          <button className="btn btn-warning" type="button">
            Create a new Wishlist
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
