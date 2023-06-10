import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditWarehousePage from "./pages/EditPage/EditWarehousePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehousePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
