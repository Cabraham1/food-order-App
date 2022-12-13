import React, { useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && (
        <Cart onClose={hideCartHandler} />
      )}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
