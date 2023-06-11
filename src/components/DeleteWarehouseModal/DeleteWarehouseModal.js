import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../DeleteWarehouseModal/DeleteWarehouseModal.scss";

const DeleteWarehouseModal = () => {
    const requestApi = "http://localhost:8080";
    let { id, name} = useParams();
    const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${requestApi}/warehouses/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="delete">
      <article className="alert__card">
        <div className="alert__card-info">
          <h1 className="alert__card-title">Delete {name} Warehouse?</h1>
          <p className="alert__card-text">Please confirm that you'd like to delete from the list of warehouses. You won't be able to undo this action.</p>
        </div>
        <div className="alert__card-buttons">
            <Link className="button__link-cancel" to="/">
            <button className="alert__card-cancel" type="button" > Cancel </button>
            </Link>
            <Link className="button__link-delete" to="/">
            <button className="alert__card-delete" type="button" onClick={() => handleDelete(id)}> Delete </button>
            </Link>
        </div>
      </article>
    </div>
  );
};

export default DeleteWarehouseModal;
