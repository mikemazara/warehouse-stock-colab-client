import React from "react";
import "./InventoryItem.scss";

const InventoryItem = ({item}) => {
  return (
    <article className="inventory__item" key={item.id}>
      <label className="label inventory__item__label">INVENTORY ITEM</label>
      <p className="inventory__item__value inventory__item__name">{item.item_name} &#62;</p>
      <label className="label inventory__item__label">CATEGORY</label>
      <p className="inventory__item__value inventory__item__category">{item.category}</p>
      <label className="label inventory__item__label">STATUS</label>
      <p className="inventory__item__value inventory__item__status">{item.status}</p>
      <label className="label inventory__item__label">QTY</label>
      <p className="inventory__item__value inventory__item__quantity">{item.quantity}</p>
      <label className="label inventory__item__label">WAREHOUSE</label>
      <p className="inventory__item__value inventory__item__warehouse-name">{item.warehouse_name}</p>
    </article>
  )
}

export default InventoryItem;