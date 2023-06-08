import React from "react";
import { NavLink } from "react-router-dom";
import "./InventoryItem.scss";
import deleteIcon  from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const InventoryItem = ({item}) => {
  return (
    <article className="inventory__item" key={item.id}>
      <label className="label inventory__item__label">INVENTORY ITEM</label>
      <p className="inventory__item__value inventory__item__name">{item.item_name} &#62;</p>
      <label className="label inventory__item__label">CATEGORY</label>
      <p className="inventory__item__value inventory__item__category">{item.category}</p>
      <img className="inventory__item__delete" src={deleteIcon} alt="delete"/>      
      <label className="label inventory__item__label">STATUS</label>
      <p className="inventory__item__value inventory__item__status">{item.status}</p>
      <label className="label inventory__item__label">QTY</label>
      <p className="inventory__item__value inventory__item__quantity">{item.quantity}</p>
      <label className="label inventory__item__label">WAREHOUSE</label>
      <p className="inventory__item__value inventory__item__warehouse-name">{item.warehouse_name}</p>
      <img className="inventory__item__edit" src={editIcon} alt="edit"/>    
    </article>
  )
}

export default InventoryItem;