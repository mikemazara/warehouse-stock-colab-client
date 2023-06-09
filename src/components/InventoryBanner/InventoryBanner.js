import { Link } from "react-router-dom";
import "./InventoryBanner.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";


const InventoryBanner = () => {
   return (
    <div className="inventory__banner">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
      </div>
      <div className="inventory__banner-actions">
        <div className="inventory__search">
          <img
            className="inventory__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="inventory__search-input"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="inventory__add-button-container">
          <Link to="/inventory/add" className="inventory__add-link">
            <button className="inventory__add-button">
              + Add New Warehouse
            </button>
          </Link>
        </div>
      </div>
    </div>
    )   
}
export default InventoryBanner;