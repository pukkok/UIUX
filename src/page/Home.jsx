import { useState } from "react"
import KakaoMap from "../components/KakaoMap"
import SideBar from "../components/SideBar/SideBar"

const Home = () => {
  const [addr, setAddr] = useState("세종특별자치시 나리로 38")
  const [places, setPlaces] = useState([]) // 검색 결과 저장

  return (
    <div className="min-h-screen flex">
      <SideBar setAddr={setAddr} places={places} />
      <KakaoMap addr={addr} setPlaces={setPlaces} />
    </div>
  )
}

export default Home
