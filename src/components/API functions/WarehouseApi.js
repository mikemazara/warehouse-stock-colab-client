import axios from "axios";
import { useState, useEffect } from "react";

async function getWarehouses() {
  try {
    const response = await axios.get("http://localhost:8080/warehouses");
    const warehouses = response.data;
    return warehouses;
  } catch (error) {
    console.error(error);
  }
}
function useWarehouses() {
  const [warehouses, setWarehouses] = useState(null);

  useEffect(() => {
    getWarehouses().then((warehouses) => {
      setWarehouses(warehouses);
    });
  }, []);

  return warehouses;
}

export default useWarehouses;
export { getWarehouses };
