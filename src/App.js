import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses/:id" element={<WarehousesPage />} />
          <Route path="/inventory" element={<InventoryPage />}/>
          <Route path="/inventory/:id" element={<InventoryDetailsPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
