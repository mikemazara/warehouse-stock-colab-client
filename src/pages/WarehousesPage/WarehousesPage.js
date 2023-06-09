import WarehouseList from "../../components/Warehouse/WarehouseList";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import "./WarehousesPage.scss";

const WarehousesPage = () => {
  return (
    <>
      <AddWarehouse />
      <WarehouseList />
    </>
  );
};

export default WarehousesPage;
