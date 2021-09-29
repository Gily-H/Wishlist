import React from "react";
import { Link } from "react-router-dom";

const WishlistPreviews = () => {
	const wishlists = []; // fetch wishlists from database
	return (
		<>
			{wishlists.map((wishlist) => (
				<a
					key={wishlist._id.toString()}
					href="#" // redirect to specific wishlist
					className="list-group-item list-group-item-action"
					aria-current="true">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{wishlist.title}</h5>
					</div>
					<p className="mb-1">{wishlist.description}</p>
					<small>And some small print.</small>
					<button>Delete</button>
				</a>
			))}
		</>
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
					<WishlistPreviews />
				</div>
			</div>
		</div>
	);
}

export default WishlistDashboard;
