const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        const updatedCartItems = state.cartItems.map(item =>
          item.id === newItem.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {...newItem, quantity: 1}],
        };
      }

    case 'REMOVE_FROM_CART':
      const productIdToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(
        item => item.id !== productIdToRemove,
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
