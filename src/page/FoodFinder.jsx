import { useState } from "react"
import KakaoMap from "../components/KakaoMap"
import MobileHeader from "../UI/FoodFinderUI/MobileHeader"
import SearchResults from "../UI/FoodFinderUI/SearchResult"

const FoodFinder = () => {
  
  const [addr, setAddr] = useState("나성동")
  const [places, setPlaces] = useState([])

  return (
    <div className="">
      <MobileHeader setAddr={setAddr} />
      <KakaoMap addr={addr} setPlaces={setPlaces}/>
      <SearchResults places={places}/>
    </div>
  )

}

export default FoodFinder