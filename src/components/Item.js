import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCart() {
    setInCart(inCart => !inCart);
  }

  const cartStyle = inCart ? "in-cart" : "";
  const cartBtnText = inCart ? "Remove From Cart" : "Add to Cart";
  const cartBtnStyle = inCart ? "remove" : "add";

  return (
    <li className={cartStyle}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartBtnStyle} onClick={handleCart}>{cartBtnText}</button>
    </li>
  );
}

export default Item;
