import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseList.scss";

async function getWarehouses() {
  try {
    const response = await axios.get("http://localhost:8080/warehouses");
    const warehouses = response.data;
    return warehouses;
  } catch (error) {
    console.error(error);
  }
}
function useWarehouses() {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    getWarehouses().then((warehouses) => {
      setWarehouses(warehouses);
    });
  }, []);

  return warehouses;
}
const WarehouseList = () => {
  const warehouses = useWarehouses();

  if (warehouses == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__header">
          <h1 className="warehouse__title">Warehouses</h1>
        </div>
        <div className="warehouse__search">
          <img
            className="warehouse__search-icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="warehouse__search-input"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="warehouse__add-button-container">
          <Link to="/warehouse/add" className="warehouse__add-link">
            <button className="warehouse__add-button">
              + Add New Warehouse
            </button>
          </Link>
        </div>
        <div className="warehouse__list-container">
          {/* {warehouses.map((warehouse) => <WarehouseListItem warehouse={warehouse}/> )} */}
          {warehouses.map((warehouse) => {
            const {
              id,
              warehouse_name,
              address,
              city,
              country,
              contact_name,
              contact_phone,
              contact_email,
            } = warehouse;
            return (
              <article key={warehouse.id} className="warehouse__article">
                <div className="warehouse__name-address">
                  <h3 className="warehouse__name-header">WAREHOUSE</h3>
                  <Link
                    to={`/warehouse/${id}`}
                    className="warehouse__name-link"
                  >
                    <h2 className="warehouse__name">
                      {warehouse_name}{" "}
                      <img
                        className="warehouse__arrow-icon"
                        src={arrowIcon}
                        alt="arrow icon"
                      />
                    </h2>
                  </Link>
                  <h3 className="warehouse__name-header">ADDRESS</h3>
                  <p className="warehouse__info">
                    {address}, {city}, {country}
                  </p>
                </div>
                <div className="warehouse__contact">
                  <h3 className="warehouse__name-header">CONTACT NAME</h3>
                  <p className="warehouse__info">{contact_name}</p>
                  <h3 className="warehouse__name-header">
                    CONTACT INFORMATION
                  </h3>
                  <p className="warehouse__info">{contact_phone}</p>
                  <p className="warehouse__info">{contact_email}</p>
                </div>
                <div className="warehouse__actions">
                  <Link to={`/warehouse/delete/${warehouse.id}`}>
                    <img
                      className="warehouse__delete-icon"
                      src={deleteIcon}
                      alt="delete icon"
                    />
                  </Link>
                  <Link to={`/warehouse/edit/${warehouse.id}`}>
                    <img
                      className="warehouse__edit-icon"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WarehouseList;
