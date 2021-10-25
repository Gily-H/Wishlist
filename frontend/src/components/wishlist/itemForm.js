import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import WishlistDataService from "../../services/wishlistService.js";
import "../../styles/itemForm.css";

/*
  Web page with form to allow user to add new Item to Wishlist
  - Name:
  - Description:
  - Price:
*/

// name input field component
// Item name is required
const ItemName = ({ name, nameHandler }) => {
  return (
    <label className="new-item-detail">
      Item Name:
      <br />
      <input type="text" value={name} onChange={nameHandler} />
    </label>
  );
};

// Item description input field component
// if no value entered, will default to ""
const ItemDescription = ({ description, descriptionHandler }) => {
  return (
    <label className="new-item-detail">
      Item Description:
      <br />
      <textarea rows="4" cols="40" value={description} onChange={descriptionHandler} />
    </label>
  );
};

// Item price input field component
// if not value entered, will default to 0
const ItemPrice = ({ price, priceHandler }) => {
  return (
    <label className="new-item-detail">
      Item Price:
      <br />
      <input type="number" min="0" value={price} onChange={priceHandler} />
    </label>
  );
};

// Item form submit button component
const SubmitButton = () => {
  return <button type="submit">Save Item</button>;
};

// Item form component contains ItemName, ItemDescription, ItemPrice, SubmitButton
const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  // Item name input field handler
  const itemNameHandler = (event) => {
    // console.log(event.target.value);
    setItemName(event.target.value);
  };

  // Item description input field handler
  const itemDescriptionHandler = (event) => {
    // console.log(event.target.value);
    setItemDescription(event.target.value);
  };

  // Item price input field handler
  const itemPriceHandler = (event) => {
    // console.log(event.target.value);
    setItemPrice(event.target.value);
  };

  // retrieve the Wishlist id from the URL param
  let { wishlistId } = useParams();

  // form submit handler
  const itemFormSubmitHandler = (event) => {
    // create new Item Object with user-entered values
    const newItem = { name: itemName, description: itemDescription, price: itemPrice };

    // service class method, newItem converted to JSON string, POST newItem to server,
    WishlistDataService.postItem(wishlistId, JSON.stringify(newItem))
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });

    // clear input fields after submit
    setItemName("");
    setItemDescription("");
    setItemPrice(0);
  };

  return (
    <>
      <h2>Create a new Item</h2>
      <div className="item-form-container">
        <form onSubmit={itemFormSubmitHandler}>
          <ItemName name={itemName} nameHandler={itemNameHandler} />
          <ItemDescription
            description={itemDescription}
            descriptionHandler={itemDescriptionHandler}
          />
          <ItemPrice price={itemPrice < 0 ? 0 : itemPrice} priceHandler={itemPriceHandler} />
          <SubmitButton />
        </form>
      </div>
      <div className="redirect-to-wishlist">
        <Link to={`/wishlist/${wishlistId}/items`} className="btn btn-primary">
          Back to Wishlist
        </Link>
      </div>
    </>
  );
};

export default ItemForm;
