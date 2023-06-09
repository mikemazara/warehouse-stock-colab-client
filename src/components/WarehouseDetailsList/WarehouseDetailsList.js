import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./WarehouseDetailsList.scss";

const WarehouseDetailsList = ()=>{
    const { warehouseId } = useParams();
    const [currentWarehouse, setcurrentWarehouse] = useState([]);
    useEffect(()=>{
        const getWarehouse = async ()=>{
          try{  const res = await axios(`http://localhost:8080/warehouses/${warehouseId}inventories`);
            console.log(res.data);
        }catch(err) {
                console.log(`Error: ${err}`)
            }
        }
        getWarehouse()
    },[warehouseId])
    const {   
        id, 
        item_name,
        description,
        category,
        status,
        quantity } = currentWarehouse;
    return(
         <div className="warehouse-list">
            
        </div>
    )
}

export default WarehouseDetailsList;