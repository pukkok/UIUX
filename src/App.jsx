import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import TastyMap from "./page/TastyMap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/map" element={<TastyMap />}></Route>
    </Routes>
  )
}
