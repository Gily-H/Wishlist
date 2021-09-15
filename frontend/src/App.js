import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Wishlist from "./components/wishlist";
import WishlistDashboard from "./components/wishlistDashboard";

async;

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path={["/wishlist-add"]} component={Wishlist} />
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
