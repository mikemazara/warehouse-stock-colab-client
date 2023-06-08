import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import "./InventoryPage.scss";

const InventoryPage = () => {
  const [inventoryData, setInventoryData] = useState();
  const requestApi = "http://localhost:8080";

  useEffect(() => {
    axios.get(requestApi + "/inventories").then((res) => {
      console.log(res.data);
      setInventoryData(res.data);
    });
  }, []);
  return (
    <div className="inventory-page__list">
        {inventoryData?.map((item) => (
            <InventoryItem item={item}/>
        ))}
    </div>
  );
};

export default InventoryPage;
