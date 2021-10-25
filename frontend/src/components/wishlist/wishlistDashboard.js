import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistDataService from "../../services/wishlistService.js";

/*
	Web page displays dashboard containing all Wishlists created by user
	- Wishlist dashboard
	- Create Wishlist button redirects to Wishlist form
*/

// Wishlist info component
// title, description, redirect, delete button
const Wishlist = ({ wishlistId, title, description, deleteButtonHandler }) => {
  return (
    <div>
      <Link
        to={`/wishlist/${wishlistId}/items`} // redirect to specific Wishlist items page
        className="list-group-item list-group-item-action"
        aria-current="true">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{title}</h5>
        </div>
        <p className="mb-1">{description}</p>
        <small>And some small print.</small>
      </Link>
      <button onClick={() => deleteButtonHandler(wishlistId)} style={{ display: "inline"}}>
        Delete
      </button>
    </div>
  );
};

// Wishlist info preview component
// maps Wishlist collection to individual components
const WishlistPreviews = ({ wishlists, deleteButtonHandler }) => {
  return (
    <>
      {wishlists.map((wishlist) => (
        <Wishlist
          key={wishlist._id}
          wishlistId={wishlist._id}
          title={wishlist.title}
          description={wishlist.description}
          deleteButtonHandler={deleteButtonHandler}
        />
      ))}
    </>
  );
};

// main dashboard display component
// contains WishlistPreviews
const WishlistDashboard = () => {
  const [wishlists, setWishlists] = useState([]);

  // useEffect with empty dependency prevents continuous rerendering
  // will only run on the first render of the page
  useEffect(() => {
    // service class method to retrieve collection of Wishlists
    WishlistDataService.getWishlists()
      .then((res) => {
        setWishlists(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Wishlist delete button handler
  // service class method to delete single Wishlist
  const deleteWishlistHandler = (wishlistId) => {
    WishlistDataService.deleteWishlist(wishlistId)
      .then(() => {
        setWishlists(wishlists.filter((wishlist) => wishlist._id !== wishlistId)); // update dashboard after delete
        console.log("wishlist being delete from the dashboard");
      })
      .catch((err) => console.log("failing to delete wishlist from dashboard", err));
  };

  return (
    <div>
      <h2>Wishlists</h2>
      <h4>This is where you can create new wish lists or view/edit saved wishlists</h4>

      <div id="add-wishlist-container">
        <Link to={"/wishlist-add"} className="btn btn-primary">
          Create new Wishlist
        </Link>
      </div>

      <div className="container">
        <div className="list-group">
          <WishlistPreviews wishlists={wishlists} deleteButtonHandler={deleteWishlistHandler} />
        </div>
      </div>
    </div>
  );
};

export default WishlistDashboard;
