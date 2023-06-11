import "./WarehouseDetailsList.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-blue24px.svg";

const WarehouseDetailsList = ()=>{
    const { id: warehouseId } = useParams();
    const [currentWarehouse, setcurrentWarehouse] = useState([]);
    useEffect(()=>{
        const getWarehouse = async ()=>{
          try{  const res = await axios(`http://localhost:8080/warehouses/${warehouseId}/inventories`);
            setcurrentWarehouse(res.data);
        }catch(err) {
                console.log(`Error: ${err}`)
            }
        }
        getWarehouse()
    },[warehouseId])
    return(
         <div className="item">
            { currentWarehouse.map(item =>{
                return(
                <article key={item.id} className="item__article">
                <div className="item__inventory">
                  <h3 className="item__title">INVENTORY ITEM</h3>
                    <h2 className="item__name">
                      {item.item_name}
                      <img
                        className="item__arrow-icon"
                        src={chevron}
                        alt="arrow icon"
                      />
                    </h2>
                  <h3 className="item__title">CATEGORY</h3>
                  <p className="item__info">
                    {item.category}
                  </p>
                </div>
                <div className="item__status">
                  <h3 className="item__title">STATUS</h3>
                  <p className={
                  !(item.status === "In Stock")
                    ? "item__outstock"
                    : "item__instock"
                }>
                    {item.status}
                  </p>
                  <h3 className="item__title">
                    QTY
                  </h3>
                  <div className="item__quanity">
                    <p className="item__info">{item.quantity}</p>
                  </div>
                </div>
                <div className="item__actions">
                  <Link to={`/warehouse/delete/${item.id}`}>
                    <img
                      className="item__delete-icon"
                      src={deleteIcon}
                      alt="delete icon"
                    />
                  </Link>
                  <Link to={`/warehouse/edit/${item.id}`}>
                    <img
                      className="item__edit-icon"
                      src={edit}
                      alt="edit icon"
                    />
                  </Link>
                </div>
              </article>
                )
            })
             }

        </div>
    )
}

export default WarehouseDetailsList;