import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import useLocalStorage from "./hook/useLocalStorage";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = (item) => {
    const newItem = { ...item, idInCart: Date.now() };

    setCart([...cart, newItem]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.idInCart !== id));
    // setCart(JSON.parse(window.localStorage.getItem("cart")));
  };

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      <CartContext.Provider value={cart}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
