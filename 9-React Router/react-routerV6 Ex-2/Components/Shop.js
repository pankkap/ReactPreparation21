import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      <h1>
        <u>Shop Page</u>
      </h1>
      {items.slice(0, 5).map((items) => {
        return (
          <h2 key={items.itemId}>
            <Link to={`/shop/${items.itemId}`}> {items.item.name}</Link>
          </h2>
        );
      })}
    </div>
  );
};

export default Shop;
