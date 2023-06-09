import React from "react";
import useWarehouses from "../API functions/WarehouseApi";
import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import arrowIcon from "../../assets/icons/chevron_right-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = () => {
  const warehouses = useWarehouses();

  if (warehouses == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="warehouse__list-container">
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
              <Link to={`/warehouses/${id}`} className="warehouse__name-link">
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
              <p className="warehouse__info warehouse__info-address">
                {address}, {city}, {country}
              </p>
            </div>
            <div className="warehouse__contact">
              <h3 className="warehouse__name-header">CONTACT NAME</h3>
              <p className="warehouse__info warehouse__contact-name">
                {contact_name}
              </p>
              <h3 className="warehouse__name-header">CONTACT INFORMATION</h3>
              <div className="warehouse__contact-info">
                <p className="warehouse__info">{contact_phone}</p>
                <p className="warehouse__info">{contact_email}</p>
              </div>
            </div>
            <div className="warehouse__actions">
              <Link to={`/warehouse/delete/${warehouse.id}`}>
                <img
                  className="warehouse__delete-icon"
                  src={deleteIcon}
                  alt="delete icon"
                />
              </Link>
              <Link to={`/warehouses/edit/${warehouse.id}`}>
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
  );
};

export default WarehouseList;
