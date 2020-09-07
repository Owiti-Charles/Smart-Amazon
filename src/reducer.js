export const initialState = {
  cart: [],
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      //logic for adding to basket
      return { ...state, cart: [...state.cart, action.item] };

    case "REMOVE_FROM_CART":
      // logic to remove from cart
      return { state };
    default:
      return state;
  }
};

export default reducer;
