import { useState } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { Outlet } from "react-router-dom";
import logo from "./assets/rickipedia.png";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center">
        <img
          src={logo}
          alt="Rickipedia"
          className="h-32 w-40 object-fill mt-0"
        />
        <AppNavbar className="h-32" />
      </div>
      <Outlet />
    </>
  );
}

export default App;
