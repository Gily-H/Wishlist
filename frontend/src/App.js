import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/partials/navbar";
import Footer from "./components//partials/footer";
import Home from "./components/homepage/home";
import Login from "./components/user/login";
import Signup from "./components/user/signup";
import WishlistItems from "./components/wishlist/wishlistItems";
import WishlistForm from "./components/wishlist/wishlistForm";
import ItemForm from "./components/wishlist/itemForm.js";
import WishlistDashboard from "./components/wishlist/wishlistDashboard";

const App = () => {
  // component to be displayed based on current url route
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path={["/wishlist-add"]} component={WishlistForm} />
          <Route exact path={["/wishlist-dashboard"]} component={WishlistDashboard} />
          <Route exact path={["/wishlist/:wishlistId/items"]} component={WishlistItems} />
          <Route exact path={["/wishlist/:wishlistId/add-item"]} component={ItemForm} />
          <Route exact path={["/login"]} component={Login} />
          <Route exact path={["/signup"]} component={Signup} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
