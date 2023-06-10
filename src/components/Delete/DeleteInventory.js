import axios from "axios";

const DeleteInventory = ({ id, onClose, name }) => {
  const requestApi = "http://localhost:8080";

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(requestApi + "/inventories/" + id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete {name} inventory item?</h2>
      <div>
        <p>
          Please confirme that you would like to delete {name} from the
          inventory list. You will not be able to undo this action
        </p>
      </div>
      <div>
        <button onClick={onClose}>Cancel</button>

        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteInventory;
