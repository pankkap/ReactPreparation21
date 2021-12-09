import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = (props) => {
  const [item, setItem] = useState({});
  const { id } = props.match.params;
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch("");
    // const items = await data.json();
    // console.log(items.data);
    // setItems(items.data);
  };

  return (
    <div>
      <h1>
        <u>{id}</u>
      </h1>
    </div>
  );
};

export default ItemDetails;
