import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";


// components
import Navbar from "./components/partials/navbar";
import Footer from "./components//partials/footer";
import Home from "./components/home";
import Login from "./components/user/login";
import Signup from "./components/user/signup";
import WishlistForm from "./components/wishlist/wishlistForm";
import WishlistDashboard from "./components/wishlist/wishlistDashboard";

function App() {

  // component to be displayed based on current url route
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path={["/wishlist-add"]} component={WishlistForm} />
          <Route exact path={["/wishlist-dashboard"]} component={WishlistDashboard} />
          <Route exact path={["/login"]} component={Login} />
          <Route exact path={["/signup"]} component={Signup} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
