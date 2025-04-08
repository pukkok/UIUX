import { useRef } from "react"
import SearchBar from "./SearchBar"

const MobileHeader = ({setKeword}) => {
  const searchRef = useRef(null)

  const search = () => {
    if (searchRef.current?.value.trim()) {
      setKeword(searchRef.current.value)
    }
  }

  return (
    <header className="
    fixed top-0 left-0 z-10 
    w-full h-16 
    bg-transparent 
    flex gap-4 items-center justify-between px-4">
      <SearchBar 
      ref={searchRef}
      placeholder={"장소·주소 검색"}
      search={search}
      />
    </header>
  )
}

export default MobileHeader