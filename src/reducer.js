export const initialState = {
  cart: [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men clothing",
      rating: 5,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      }
  ],
  user: null,
};
const reducer = (state, action) => {
  console.log('reducer',action);
  switch (action.type) {
    case "ADD_TO_CART":
      //logic for adding to basket
      return { ...state, cart: [...state.cart, action.item] };

    case "REMOVE_FROM_CART":
      // logic to remove from cart
      let newCart = [...state.cart]; // clone the cart
      // console.log('removed oooh',newCart);
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id); // check if item exists
      if (index >= 0){
      newCart.splice(index,1);
      }
      else{
        console.warn('haikoooo', index);
      }

      return { ...state, cart:newCart };
    default:
      return state;
  }
};

export default reducer;
