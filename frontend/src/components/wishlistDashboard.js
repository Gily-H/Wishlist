import React from "react";
import { Link } from "react-router-dom";

const Wishlist = ({ name, description }) => {
  return (
    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{name}</h5>
        <button>Delete</button>
      </div>
      <p className="mb-1">{description}</p>
      <small>And some small print.</small>
    </a>
  );
};

function WishlistDashboard() {

  return (
    <div>
      <h2>Wishlists</h2>
      <h4>This is where you can create new wish lists or view/edit saved wishlists</h4>

      <div id="add-wishlist-container">
        <Link to={"/wishlist-add"}>
          <button>Create new Wishlist</button>
        </Link>
      </div>

      <div className="container">
        <div className="list-group">
          <Wishlist name="Wishlist 1" description="First wishlist" />
          <Wishlist name="Wishlist 2" description="Second wishlist" />
        </div>
      </div>
    </div>
  );
}

export default WishlistDashboard;
