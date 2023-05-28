import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleListChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredList = items.filter(item => {
    if(selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  const displayList = filteredList.map(item => <Item key={item.id} name={item.name} category={item.category} />)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleListChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayList}
      </ul>
    </div>
  );
}

export default ShoppingList;
