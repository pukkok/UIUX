const SearchResultItem = ({ place, onClick }) => {
  return (
    <div
      className="p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      <p className="font-semibold">{place.place_name}</p>
      <p className="text-sm text-gray-500">
        {place.road_address_name || place.address_name}
      </p>
      <p className="text-sm text-gray-500">{place.phone}</p>
      <p className="text-sm text-red-400 mt-2">
        <a href={place.place_url} target="_blank" rel="noreferrer">
          카카오 상세보기
        </a>
      </p>
    </div>
  )
}

export default SearchResultItem