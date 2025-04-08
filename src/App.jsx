import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import TastyMap from "./page/TastyMap";
import Tester from "./page/Tester";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/map" element={<TastyMap />}></Route>
      <Route path="/tester" element={<Tester />} />
    </Routes>
  )
}
