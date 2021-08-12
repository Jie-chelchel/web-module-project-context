import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

const Item = (props) => {
  const { removeItem } = useContext(ProductContext);
  const removeItemHandler = () => {
    removeItem(props.id);
  };

  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={removeItemHandler}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
