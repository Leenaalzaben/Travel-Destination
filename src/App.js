
import "./App.css";
import Home from "./Components/Home/Home";
import Tour from "./Components/Tours/tour/Tour";


import { Routes, Route } from "react-router-dom";

const ToursData = require("./data/db.json");
function App() {
  return (
    <>

      {/* <div className="app">
        <Home id="home" data={ToursData} />
      </div> */}

      <Routes>
        <Route path="/" element={<Home id="home" data={ToursData} />}></Route>
        <Route path="/city/:id" element={<Tour />}></Route>

      </Routes>
      
    </>
  );
}

export default App;
