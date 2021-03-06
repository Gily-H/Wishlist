import React, { useState } from "react";
import WishlistDataService from "../../services/wishlistService.js";
import "../../styles/wishlistForm.css";

/*
	Web page with form to allow user to enter info for a new Wishlist
	- Title:
	- Description:
*/

// title input field component
// wishlist title is required
const WishlistTitle = ({ title, titleHandler }) => {
  return (
    <label className="wishlist-add">
      Wishlist Name:
      <br />
      <input
        className="wishlist-add-input"
        type="text"
        value={title}
        onChange={titleHandler}></input>
    </label>
  );
};

// description input area component
// wishlist description is required
const WishlistDescription = ({ description, descriptionHandler }) => {
  return (
    <label className="wishlist-add">
      Wishlist Description:
      <textarea
        className="wishlist-add-input"
        rows="4"
        cols="40"
        value={description}
        onChange={descriptionHandler}></textarea>
    </label>
  );
};

// form submit button component
const SubmitButton = () => {
  return (
    <button className="add-Button" type="submit">
      Save Wishlist
    </button>
  );
};

// The main form component
// contains title input, description input, and submit button
const WishlistForm = () => {
  // wishlist properties, array of items not required for wishlist creation
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // handler for wishlist title
  const wishlistTitleHandler = (event) => {
    // console.log(event.target.value); // title text inputted by user
    setTitle(event.target.value);
  };

  // handler for wishlist description
  const wishlistDescriptionHandler = (event) => {
    // console.log(event.target.value); // description text inputted by user
    setDescription(event.target.value);
  };

  // handler for form submit, POST request to backend server
  const wishlistFormSubmitHandler = (event) => {
    event.preventDefault(); // prevent the default re-rendering on form submits

    // wishlist object containing user-entered data
    const newWishlist = { title: title, description: description };

    // service class method (parameter object must be converted to JSON string)
    WishlistDataService.postWishlist(JSON.stringify(newWishlist))
      .then((res) => {
        console.log(res);
        alert("New Wishlist was created!");
      })
      .catch((err) => console.log(err.message));

    // clear form fields on submit
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <h3>Create A Wishlist</h3>
      <div className="wishlist-add-container">
        <form onSubmit={wishlistFormSubmitHandler} className="wishlist-form">
          <WishlistTitle title={title} titleHandler={wishlistTitleHandler} />
          <WishlistDescription
            description={description}
            descriptionHandler={wishlistDescriptionHandler}
          />
          <SubmitButton />
        </form>
      </div>
    </>
  );
};

export default WishlistForm;
