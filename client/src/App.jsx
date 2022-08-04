import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Amount from "./components/Amount";
import ListProduct from "./components/ListProduct";
import api from "./services/api";

function App() {

    const [data, setData] = useState()

  useEffect(() => {
    api.get('/products')
        .then(response => setData(response.data))
  }, [])

  return (
    <div id="app" className="App">
      <Amount />
      <ListProduct />
    </div>
  );
}

export default App;