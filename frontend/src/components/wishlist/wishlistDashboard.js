import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistDataService from "../../services/wishlistService.js";

/*
	Web page that displays a dashboard containing all wishlists created by the user
	- Wishlist dashboard
	- Create wishlist button that redirects to wishlist form
*/

// single wishlist component
const Wishlist = ({ id, title, description }) => {
	return (
		<a
			href="#" // redirect to specific wishlist id page
			className="list-group-item list-group-item-action"
			aria-current="true">
			<div className="d-flex w-100 justify-content-between">
				<h5 className="mb-1">{title}</h5>
			</div>
			<p className="mb-1">{description}</p>
			<small>And some small print.</small>
			<button>Delete</button>
		</a>
	);
};

// preview wishlist entry component - title, description
// contains single Wishlist
const WishlistPreviews = ({ wishlists }) => {
	// map each element in the collection to a separate wishlist
	return (
		<>
			{wishlists.map((wishlist) => (
				<Wishlist
					key={wishlist._id}
					id={wishlist._id}
					title={wishlist.title}
					description={wishlist.description}
				/>
			))}
		</>
	);
};

// main display component
// contains WishlistPreviews
const WishlistDashboard = () => {
	const [wishlists, setWishlists] = useState([]);

	// useEffect with no dependency prevents continuous rerendering when state changes
	// will only run on the first render of the page (empty dependency)
	useEffect(() => {
		// service class method to retrieve collection of wishlists from the database
		WishlistDataService.getWishlists()
			.then((res) => {
					// console.log(res.data);
				setWishlists(res.data); // response.data holds array of wishlists
			})
			.catch((err) => console.log(err.message));
	}, []);

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
					<WishlistPreviews wishlists={wishlists} />
				</div>
			</div>
		</div>
	);
}

export default WishlistDashboard;
