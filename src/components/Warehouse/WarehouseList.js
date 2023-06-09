import React from "react";
import useWarehouses from "../API functions/WarehouseApi";
import { Link, NavLink } from "react-router-dom";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import searchIcon from "../../assets/Icons/search-24px.svg";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = () => {
  const warehouses = useWarehouses();

  if (warehouses == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__banner">
          <div className="warehouse__header">
            <h1 className="warehouse__title">Warehouses</h1>
          </div>
          <div className="warehouse__banner-actions">
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
          </div>
          <div className="warehouse__table-header">
            <div className="warehouse__table-header-option">
              <h3 className="warehouse__table-header-name">WAREHOUSE </h3>
              <img
                className="warehouse__table-header-sort"
                src={sortIcon}
                alt="sort arrow"
              />
            </div>
            <div className="warehouse__table-header-option">
              <h3 className="warehouse__table-header-name warehouse__table-header-name--address">
                ADDRESS{" "}
              </h3>
              <img
                className="warehouse__table-header-sort"
                src={sortIcon}
                alt="sort arrow"
              />
            </div>
            <div className="warehouse__table-header-option">
              <h3 className="warehouse__table-header-name warehouse__table-header-name--contact">
                CONTACT NAME{" "}
              </h3>
              <img
                className="warehouse__table-header-sort"
                src={sortIcon}
                alt="sort arrow"
              />
            </div>
            <div className="warehouse__table-header-option">
              <h3 className="warehouse__table-header-name">
                CONTACT INFORMATION{" "}
              </h3>
              <img
                className="warehouse__table-header-sort"
                src={sortIcon}
                alt="sort arrow"
              />
            </div>
            <h3 className="warehouse__table-header-name">ACTIONS</h3>
          </div>
        </div>
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
                  <NavLink
                    to={`/warehouses/${id}`}
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
                  </NavLink>
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
                  <h3 className="warehouse__name-header">
                    CONTACT INFORMATION
                  </h3>
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
