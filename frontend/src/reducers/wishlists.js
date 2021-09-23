
const wishlists = (wishlists = [], action) => {
  switch (action.type) {
    case "FETCH_WISHLISTS":
      return action.payload;

    default:
      return wishlists;
  }
};

export default wishlists;
