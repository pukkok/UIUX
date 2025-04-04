const SearchBar = ({type="text", placeholder="검색어 입력", props}) => {
  
  return (
    <input
    type={type}
    placeholder={placeholder}
    {...props} 
    className="
    bg-white
    border border-gray-800 
    rounded-lg
    p-1 pl-2
    focus:outline-none 
    "/>
  )

}

export default SearchBar