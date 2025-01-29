import "./App.css";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home basket={basket} setBasket={setBasket} />}
        />
        <Route
          path="/cart"
          element={<Cart basket={basket} setBasket={setBasket} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
