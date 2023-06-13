import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import "../AddWarehouse/AddWarehouse.scss";


const AddWarehouse = () => {
  const [warehouseName, setWarehouseName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const newWarehouse = {
      warehouse_name: warehouseName,
      address: street,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: contactPosition,
      contact_phone: phoneNumber,
      contact_email: email,
      }
      if (!newWarehouse) {
        alert("Uh oh! Please fill out all input fields before proceeding!");
      } else {
        alert("Warehouse submitted successfully! Redirecting you to the Home Page, safe travels! ");
      }
      axios.post("http://localhost:8080/warehouses", newWarehouse).then((res) => {
        console.log(res.data);
      });
      setRedirectHome(true);
    };
    if (redirectHome) {
      return <Navigate to="/" />;
    }
  return (
    <>
      <section className="addwarehouse">
        <div className="addwarehouse__header">
          <Link to="/">
            <img className="addwarehouse__header-back" src={BackIcon} alt="back arrow"></img>
          </Link>
          <h2 className="addwarehouse__title">Add New Warehouse</h2>
        </div>
        <form className="addwarehouse__form" onSubmit={handleSubmit}>
          <div className="addwarehouse__form-column">
            <div className="addwarehouse__form-container">
              <div className="addwarehouse__form-details">
                <h3 className="addwarehouse__details-title">Warehouse Details</h3>
              </div>
              <div className="addwarehouse__details-container">
                <div className="addwarehouse__details-element">
                  <p className="addwarehouse__element-title">Warehouse Name</p>
                  <input
                    className="addwarehouse__details-input"
                    placeholder="Warehouse Name"
                    value={warehouseName}
                    type="text"
                    id="warehousename"
                    name="warehousename"
                    onChange={(e) => setWarehouseName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Street Address</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Street Address"
                  value={street}
                  type="text"
                  id="street"
                  name="street"
                  onChange={(e) => setStreet(e.target.value)}
                ></input>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">City</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="City"
                  value={city}
                  type="text"
                  id="city"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Country</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Country"
                  value={country}
                  type="text"
                  id="country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="addwarehouse__form-tablet">
              <h3 className="addwarehouse__details-title">Contact Details</h3>
              <div className="addwarehouse__details-container">
                <p className="addwarehouse__element-title">Contact Name</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Contact Name"
                  value={contactName}
                  type="text"
                  id="number"
                  name="number"
                  onChange={(e) => setContactName(e.target.value)}
                ></input>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Position</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Position"
                  type="text"
                  id="position"
                  name="position"
                  onChange={(e) => setContactPosition(e.target.value)}
                ></input>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Phone Number</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  type="text"
                  id="number"
                  name="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
              <div className="addwarehouse__details-element">
                <p className="addwarehouse__element-title">Email</p>
                <input
                  className="addwarehouse__details-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="email"
                  name="email"
                ></input>
              </div>
            </div>
          </div>
          <div className="addwarehouse__buttons">
            <div className="addwarehouse__buttons-container">
              <button className="addwarehouse__buttons-cancel" type="submit">
                <p className="warehouse__card-cancel--text">Cancel</p>
              </button>
              <button className="addwarehouse__buttons-add" type="submit">
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddWarehouse;
