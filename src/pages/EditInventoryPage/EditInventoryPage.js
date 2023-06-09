const EditInventoryPage = () => {
    {/* <div className="edit__form-container">
<form className="edit__form" onSubmit={handleSubmit}>
  <div className="edit__form-warehouse-details">
    <div className="edit__form-warehouse-header">
      <h2>Warehouse Details</h2>
    </div>
    <label className="edit__form-label" htmlFor="warehouseName">
      Warehouse Name
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="warehouseName"
      name="warehouseName"
      value={warehouseName}
      onChange={(e) => setWarehouseName(e.target.value)}
    />

    <label className="edit__form-label" htmlFor="street">
      Street Address
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="street"
      name="street"
      value={street}
      onChange={(e) => setStreet(e.target.value)}
    />

    <label className="edit__form-label" htmlFor="city">
      City
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="city"
      name="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />

    <label className="edit__form-label" htmlFor="country">
      Country
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="country"
      name="country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
  </div>
  <div className="edit__form-contact-details">
    <div className="edit__form-contact-header">
      <h2>Contact Details</h2>
    </div>
    <label className="edit__form-label" htmlFor="contactName">
      Contact Name
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="contactName"
      name="contactName"
      value={contactName}
      onChange={(e) => setContactName(e.target.value)}
    />
    <label className="edit__form-label" htmlFor="contactPosition">
      Position
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="contactPosition"
      name="contactPosition"
      value={contactPosition}
      onChange={(e) => setContactPosition(e.target.value)}
    />

    <label className="edit__form-label" htmlFor="phoneNumber">
      Phone Number
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="phoneNumber"
      name="phoneNumber"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />

    <label className="edit__form-label" htmlFor="email">
      Email
    </label>
    <input
      className="edit__form-input"
      type="text"
      id="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="edit__form-button-container">
    <button className="edit__form-button edit__form-button--cancel">
      Cancel
    </button>
    <button className="edit__form-button" type="submit">
      Save
    </button>
  </div>
</form>
</div> */}
    return (
        <div className="item">
            <div className="item__header">
                <h2>Add New Inventory Item</h2>
            </div>
            <form className="item__form">
                



                <div className="item__details"></div>
                <div className="item__availability"></div>
            </form>
        </div>



    );
};

export default EditInventoryPage;