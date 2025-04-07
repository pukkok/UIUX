import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import FoodFinder from "./page/FoodFinder";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/map" element={<FoodFinder />}></Route>
    </Routes>
  )
}
