import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WishlistDataService from "../../services/wishlistService.js";
import "../../styles/itemsTable.css";

/*
  Web page that displays the item list for a specific wishlist chosen on the wishlist Dashboard
  or with a valid wishlist Id appended to the URL
  - Table of items
*/

// single item component
// name, description (optional), price (optional)
const Item = ({ name, description, price }) => {
	// description default: ""
	// price default: 0
	return (
		<tr className="item-row">
			<td>{name}</td>
			<td>{description}</td>
			<td>${price}</td>
		</tr>
	);
};

// item table component
// map each item to individual table row component
const ItemsTable = ({ items }) => {
		// console.log("These are the items", items);
	return (
		<table className="item-table">
			<tbody>
				<tr id="header-row">
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
				</tr>
				{items.map((item) => (
					<Item key={item._id} name={item.name} description={item.description} price={item.price} />
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
			.then((res) => {
					// console.log(res);
					// console.log(res.data);
				setWishlistItems(res.data); // res.data contains array of item objects
			})
			.catch((err) => console.log(err));
	}, []);

	// if wishlist is empty, display appropriate empty items message
	return (
		<>
			{wishlistItems.length === 0 ? (
				<p>No items found in wishlist</p>
			) : (
				<ItemsTable items={wishlistItems} />
			)}
		</>
	);
};

export default WishlistItems;
