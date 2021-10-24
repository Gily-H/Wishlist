import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WishlistDataService from "../../services/wishlistService.js";
import "../../styles/itemsTable.css";

/*
  Web page displays Item list for specific wishlist clicked on Wishlist Dashboard
  - Table of items
*/

// single item row component
// name, description (optional), quantity, price (optional), delete button
// description default: "; price default: 0
const ItemRow = ({ itemId, name, description, price, wishlistId, deleteButtonHandler }) => {
  return (
    <tr className="item-row">
      <td className="name-column">{name}</td>
      <td>{description}</td>
      <td className="qty-input">
        <input type="number" min="1" max="99" placeholder="1"></input>
      </td>
      <td>{"$" + price}</td>
      <td className="delete-button-container">
        <button className="delete-item" onClick={() => deleteButtonHandler(wishlistId, itemId)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

// item table component
// map each item to individual table row component
const ItemsTable = ({ items, wishlistId, deleteButtonHandler }) => {
  return (
    <table className="item-table">
      <tbody>
        <tr id="header-row">
          <th className="name-column">Name</th>
          <th>Description</th>
          <th>Qty</th>
          <th>Price</th>
          <th className="delete-button-column"></th>
        </tr>
        {items.map((item) => (
          <ItemRow
            key={item._id}
            itemId={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            deleteButtonHandler={deleteButtonHandler}
            wishlistId={wishlistId}
          />
        ))}
      </tbody>
    </table>
  );
};

// main display component
// table of all items in the specified wishlist Id
const WishlistItems = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  let { wishlistId } = useParams(); // retrieve the wishlist ID from the URL param
  // console.log("This is the id", wishlistId);

  useEffect(() => {
    // service class method to retrieve collection of items from wishlist
    WishlistDataService.getWishlistItems(wishlistId)
      .then((res) => setWishlistItems(res.data)) // res.data contains array of Item objects
      .catch((err) => console.log(err));
  }, []);

  // handler for Item delete button
  const deleteButtonHandler = (wishlistId, itemId) => {
    WishlistDataService.deleteItem(wishlistId, itemId)
      .then(() => {
        console.log("item being deleted from the list using delete button");
        setWishlistItems(wishlistItems.filter((item) => item._id !== itemId)); // remove deleted item from list
      })
      .catch((err) => console.log("The item was not deleted", err));
  };

  // if Wishlist is empty, display appropriate empty Items message
  return (
    <>
      {wishlistItems.length === 0 ? (
        <p>No items found in wishlist</p>
      ) : (
        <ItemsTable
          items={wishlistItems}
          wishlistId={wishlistId}
          deleteButtonHandler={deleteButtonHandler}
        />
      )}
      <Link to={`/wishlist/${wishlistId}/add-item`} className="btn btn-primary">
        Add an Item
      </Link>
    </>
  );
};

export default WishlistItems;
