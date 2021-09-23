import { fetchWishlists } from "../api";

// Action Creators

// fetching data takes time - redux thunk for async dispatches
export const getWishlists = () => async (dispatch) => {
  try {

    // data destructured from fetch response
    // data contains list of wishlists
    const { data } = await fetchWishlists(); // axios get url

    // dispatch the action
    // type matches action type in wishlist reducer
    dispatch({ type: "FETCH_WISHLISTS", payload: data });
    
  } catch (error) {
    console.log(error.message);
  }
};
