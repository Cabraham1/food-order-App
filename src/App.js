import React from 'react';
import Cart from './components/Carts/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {

  return (
    <React.Fragment>
      <Header />
      <Cart/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
