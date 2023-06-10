import React, { useState } from "react";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import DeleteInventory from "./DeleteInventory";
import "../InventoryItem/InventoryItem.scss";

function DeleteInventoryItemButton({ id, name }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inventory__item__delete-button"
      >
        {" "}
        <img
          className="inventory__item__delete-tablet"
          src={deleteIcon}
          alt="delete"
        />
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <DeleteInventory id={id} onClose={() => setOpen(false)} name={name} />
        </div>
      )}
    </>
  );
}

export default DeleteInventoryItemButton;
