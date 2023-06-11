import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage.js";
import EditWarehousePage from "./pages/EditPage/EditWarehousePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import DeleteWarehouseModal from "./components/DeleteWarehouseModal/DeleteWarehouseModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/inventories" element={<InventoryPage />} />
          <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventories/edit/:id" element={<EditInventoryPage />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehousePage />} />
          <Route path="/warehouse/add" element={<AddWarehouse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
