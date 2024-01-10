import React, { useContext } from "react";
// import { CartContext } from "../context/Cart";
import { useCart} from "../context/Cart";

const Item = (props) => {
//   const cart = useContext(CartContext);
  const cart =useCart();
  console.log(cart);

  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price : Rs.{props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
