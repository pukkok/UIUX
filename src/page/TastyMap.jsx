import { useState } from "react"
import KakaoMap from "../components/KakaoMap"
import MobileHeader from "../UI/TastyMapUI/MobileHeader"
import SearchResults from "../UI/TastyMapUI/SearchResult"

const TastyMap = () => {
  
  const [keyword, setKeword] = useState("나성동")
  const [places, setPlaces] = useState([])
  const [placePin, setPlacePin] = useState("")

  return (
    <div className="">
      <MobileHeader setKeword={setKeword} />
      <KakaoMap keword={keyword} setPlaces={setPlaces} activePlace={placePin} />
      <SearchResults places={places} setPlacePin={setPlacePin} />
    </div>
  )

}

export default TastyMap