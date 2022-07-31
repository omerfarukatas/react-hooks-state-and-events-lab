import React, {useState} from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  function addToCart () {
    setIsAddedToCart(isAddedToCart => !isAddedToCart)
  }

  const cartSituation = isAddedToCart ? "in-cart" : ""

  return (
    <li className={cartSituation}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{isAddedToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
