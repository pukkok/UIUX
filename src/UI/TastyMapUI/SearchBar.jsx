import { forwardRef } from "react";

const SearchBar = forwardRef(({ placeholder = "검색어 입력", search }, ref) => {
  
  const enterSearch = (e) => {
    if (e.key === "Enter") {
      search()
    }
  }

  return (
    <div className="flex w-full relative">
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        onKeyDown={enterSearch}
        className="bg-white border border-gray-800 rounded-lg w-full p-1 pl-2 focus:outline-none"
      />
      <button
        onClick={search}
        className="absolute top-[50%] right-[5%] transform -translate-y-1/2"
      >
        검색
      </button>
    </div>
  )
})

export default SearchBar
