const SearchResults = ({ places, setAddr }) => {
  if (places.length === 0) return null // 검색 결과 없으면 숨김
  console.log(places) // 검색 결과 확인
  return (
    <div className="mt-4 h-[800px] overflow-scroll">
      {places.map(place => (
        <div 
          key={place.id} 
          className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200"
          onClick={() => setAddr(place.place_name)}
        >
          <p className="font-semibold">{place.place_name}</p>
          <p className="text-sm text-gray-500">{place.road_address_name || place.address_name}</p>
          <p className="text-sm text-gray-500">{place.phone}</p>
          <p className="text-sm text-red-400 mt-2"><a 
          href={place.place_url}
          target="_blank"
          >카카오맵 상세보기</a></p>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
