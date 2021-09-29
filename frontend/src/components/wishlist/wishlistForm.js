import React, { useState } from "react";
import "../..styles/wishlistForm.css";

// title component takes the title field and a handler
const WishlistTitle = ({ wishlistField, updateField }) => {
	return (
		<label className="wishlist-add">
			Wishlist Name:
			<br />
			<input
				className="wishlist-add-input"
				type="text"
				name="title"
				wishlistField={wishlistField}
				onChange={updateField}></input>
		</label>
	);
};

// description component takes the description field and handler
const WishlistDescription = ({ wishlistField, updateField }) => {
	return (
		<label className="wishlist-add">
			Wishlist Description:
			<textarea
				className="wishlist-add-input"
				rows="4"
				cols="40"
				name="description"
				value={wishlistField}
				onChange={updateField}></textarea>
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

const Wishlist = () => {
	// object state - does not require items array
	const [wishlistData, setWishlistData] = useState({
		title: "",
		description: "",
	});

	const updateWishlistField = (event) => {
		console.log(event.target.name); // should match component name attribute
		console.log(event.target.value); // should match component value attribute

		// set the wishlistData state with new object
		// copy of old object plus new user value (does not mutate state)
		setWishlistData({
			...wishlistData,
			[event.target.name]: event.target.value,
		});
	};

	const addWishlist = (event) => {
		event.preventDefault(); // prevent the default re-rendering on form submits
	};

	return (
		<>
			<h3>Create A Wishlist</h3>
			<div className="wishlist-add-container">
				<form onSubmit={addWishlist} className="wishlist-form">
					<WishlistTitle wishlistField={wishlistData.title} updateField={updateWishlistField} />
					<WishlistDescription
						wishlistField={wishlistData.description}
						updateField={updateWishlistField}
					/>
					<SubmitButton />
				</form>
			</div>
		</>
	);
};

export default Wishlist;
