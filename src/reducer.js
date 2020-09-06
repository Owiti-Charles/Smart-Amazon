export const initialState = {
  cart: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD TO CART":
      //logic for adding to basket
      break;
    case 'REMOVE FROM CART':
        // logic to remove from cart
        break;
    default:
        return state;
  }
}

export default reducer;
