import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const DeleteInventory = () => {
  const [inventoryData, setInventoryData] = useState();
  const requestApi = "http://localhost:8080";
  const { id } = useParams();

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(requestApi + "/inventories/" + id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestApi + "/inventories/" + id);
        setInventoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(inventoryData);

  if (!inventoryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Delete {inventoryData.item_name} inventory item?</h2>
      <div>
        <p>
          Please confirme that you would like to delete{" "}
          {inventoryData.item_name} from the inventory list. You will not be
          able to undo this action
        </p>
      </div>
      <div>
        <Link to="/inventory">
          <button>Cancel</button>
        </Link>
        <button onClick={() => handleDelete(inventoryData.id)}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteInventory;
