import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({
    item: {
      images: {},
    },
  });

  const imageSize = {
    width: 350,
  };

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await data.json();
    console.log(item.data);
    setItem(item.data);
  };

  return (
    <div>
      <h1>{item.item.name}</h1>
      <img src={item.item.images.icon} style={imageSize} alt="" />
    </div>
  );
};

export default ItemDetails;
