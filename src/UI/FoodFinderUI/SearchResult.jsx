import { useRef, useState } from "react"
import DragHandle from "./DragHandle"
import SearchResultItem from "./SearchResultItem"

const SearchResults = ({ places = [], setPlacePin }) => {
  const [sizeLevel, setSizeLevel] = useState(1) // 0: 작음, 1: 중간, 2: 큼
  const startY = useRef(null)

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY
    const delta = startY.current - endY

    // 기준: 드래그 길이
    if (delta > 50 && sizeLevel < 2) {
      setSizeLevel(sizeLevel + 1) // 위로 스와이프 → 확장
    } else if (delta < -50 && sizeLevel > 0) {
      setSizeLevel(sizeLevel - 1) // 아래로 스와이프 → 축소
    }
  }

  return (
    <div
      
      className={`
        fixed bottom-0 left-0 right-0 z-10 
        bg-white border-t border-black
        p-1 pt-0 w-full transition-all duration-300
        ${
          sizeLevel === 0 ? "max-h-6 h-5" : 
          sizeLevel === 1 ? "max-h-[30vh] h-[30vh]" :
          "max-h-[100vh] h-[100vh]"
        }
        overflow-hidden
      `}
      
    >
      <DragHandle
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      <div className="overflow-scroll max-h-full px-2">
        {places.length > 0 &&
          places.map((place) => (
            <SearchResultItem
              key={place.id}
              place={place}
              onClick={() => setPlacePin(place.place_name)}
            />
          ))}
      </div>
    </div>
  )
}

export default SearchResults
