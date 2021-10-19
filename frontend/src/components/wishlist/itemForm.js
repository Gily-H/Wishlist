import React from "react";
import "../../styles/itemForm.css";

/*
  Web page with form to allow user to add new item to wishlist
  - Name:
  - Description:
  - Price:
*/

// name input field component
// item name is required
const ItemName = ({ name, nameHandler }) => {
  return (
    <label className="new-item-detail">
      Item Name:
      <br />
      <input type="text" value={name} onChange={nameHandler} />
    </label>
  );
};

// item description input field component
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

// item price input field component
// if not value entered, will default to 0
const ItemPrice = ({ price, priceHandler }) => {
  return (
    <label className="new-item-detail">
      Item Price:
      <br />
      <input type="number" value={price} onChange={priceHandler} />
    </label>
  );
};

// item form submit button component
const SubmitButton = () => {
  return <button type="submit">Save Item</button>;
};

const ItemForm = () => {
  return (
    <>
      <h2>Create a new Item</h2>
      <div className="item-form-container">
        <form action="POST">
          <ItemName />
          <ItemDescription />
          <ItemPrice />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};

export default ItemForm;
