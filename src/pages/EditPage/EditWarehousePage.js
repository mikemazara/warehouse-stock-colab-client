import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import EditForm from "../../components/Edit/EditForm";

const EditWarehousePage = () => {
  return (
    <div className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__banner">
          <div className="warehouse__header">
            <Link to="/">
              <img
                className="warehouse__back"
                src={backArrow}
                alt="back arrow"
              />
            </Link>
            <h1 className="warehouse__title">Edit</h1>
          </div>
        </div>
        <EditForm />
      </div>
    </div>
  );
};

export default EditWarehousePage;
