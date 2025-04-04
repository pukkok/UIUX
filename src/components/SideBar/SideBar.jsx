import { useRef } from "react"
import SearchBar from "../SearchBar"
import SearchResults from "./SearchResults"

const SideBar = ({ setAddr, places }) => {
  const searchRef = useRef(null)

  const search = () => {
    if (searchRef.current?.value.trim()) {
      setAddr(searchRef.current.value)
    }
  }

  return (
    <aside className="
    fixed top-0 left-0 z-10 
    w-sm min-h-screen
    bg-gray-50 p-4 
    border-r border-gray-300">
      <SearchBar ref={searchRef} placeholder="장소·주소 검색" search={search} />
      <SearchResults places={places} setAddr={setAddr} />
    </aside>
  )
}

export default SideBar
