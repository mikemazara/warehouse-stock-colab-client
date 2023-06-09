import React from "react";
import "../AddWarehouse/AddWarehouse.scss";

const AddWarehouse = () => {
  return (
    <>
      <section className="warehouse">
        <div className="warehouse__header">
          <h2 className="warehouse__title">Add New Warehouse</h2>
        </div>
        <form className="warehouse__form">
          <div className="warehouse__form-container">
            <div className="warehouse__form-details">
              <h3 className="warehouse__details-title">Warehouse Details</h3>
            </div>
            <div className="warehouse__details-container">
              <div className="warehouse__details-element">
                <p className="warehouse__element-title">Warehouse Name</p>
                <input className="warehouse__details-input" placeholder="Warehouse Name"></input>
              </div>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">Street Address</p>
              <input className="warehouse__details-input" placeholder="Street Address"></input>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">City</p>
              <input className="warehouse__details-input" placeholder="city"></input>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">Country</p>
              <input className="warehouse__details-input" placeholder="Country"></input>
            </div>
          </div>
          <div className="warehouse__form-tablet">
            <h3 className="warehouse__details-title">Contact Details</h3>
            <div className="warehouse__details-container">
              <p className="warehouse__element-title">Contact Name</p>
              <input className="warehouse__details-input" placeholder="Contact Name"></input>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">Position</p>
              <input className="warehouse__details-input" placeholder="Position"></input>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">Phone Number</p>
              <input className="warehouse__details-input" placeholder="Phone Number"></input>
            </div>
            <div className="warehouse__details-element">
              <p className="warehouse__element-title">Email</p>
              <input className="warehouse__details-input" placeholder="Email"></input>
            </div>
          </div>
        </form>
        <div className="warehouse__buttons">
          <div className="warehouse__buttons-container">
            <button className="warehouse__buttons-cancel" type="submit">
              Cancel
            </button>
            <button className="warehouse__buttons-add" type="submit">
              + Add Warehouse
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddWarehouse;
