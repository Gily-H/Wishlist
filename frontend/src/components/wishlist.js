import React from "react";

function Wishlist() {
  return (
    <div>
      <h2>Wishlists</h2>
      <h4>This is where you can create new wish lists or view/edit previously saved wish lists</h4>
      <div className="container">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Wishlist 1</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Wishlist 2</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Wishlist 3</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
