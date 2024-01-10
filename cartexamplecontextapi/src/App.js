import Item from "./components/Items";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Item name={"Lenovo Ideapad"} price={60000} />
      <Item name={"Nord CE3 lite"} price={20000} />
      <Item name={"Logitech Mouse"} price={400} />
      <Cart />
    </div>
  );
}

export default App;
