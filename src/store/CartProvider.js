import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
  item: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
return defaultCartState
}
const CartProvider = (props) => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemHandler = (items) => {};

  const removeItemHandler = (id) => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
