import "./App.css";

import Amount from "./components/Amount";
import ListProduct from "./components/ListProduct";
import Anotacao from "./components/Anotacao";

function App() {
  return (
    <div id="app" className="App">
      <Amount />
      <Anotacao />
      <ListProduct />
    </div>
  );
}

export default App;
