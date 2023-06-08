import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./WarehousesPage.scss";
 const WarehousesPage = () => {
  const { warehouseId } = useParams();
  const [currentWarehouse, setCurrentWarehouse] = useState([]);
   useEffect(() => {
    const getWarehouse = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/warehouses/2`);
        setCurrentWarehouse(res.data)
      } catch (err) {
        console.log(`Error: ${err}`)
      }
    };
    getWarehouse();
  }, [warehouseId]);
   return (
    <div className="warehouse">
      <WarehouseDetails currentWarehouse={currentWarehouse} warehouseId={warehouseId} />
    </div>
  )
}
 export default WarehousesPage;