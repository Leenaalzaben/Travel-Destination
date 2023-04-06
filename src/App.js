
import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./Components/TourDetails/TourDetails";
import Navbar from "./Components/Navbar/Navbar";

const data = require("./data/db.json");
function App() {
  return (
    <>

     <Navbar/>
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/city/:id" element={<TourDetails/>}></Route>

      </Routes>
      
    </>
  );
}

export default App;
