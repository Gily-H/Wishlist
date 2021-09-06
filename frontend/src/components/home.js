import React from "react";

function Home() {
  return (
    <div>
      <h2>This is the home page</h2>
      <h4>
        Welcome to Wishlist! Create customized wishlists through a simple UI by dragging and dropping URLs to the
        desired items into your own personal lists. Create and account to save your lists or create a wish list without
        an account for a quick temporary list.
      </h4>

      <div class="d-grid gap-2 col-2 mx-auto">
        <button class="btn btn-warning" type="button">
          Create a new Wishlist
        </button>
      </div>
    </div>
  );
}

export default Home;
