import SearchBar from "../components/SearchBar";
import KakaoMap from "../components/KakaoMap";

export default function Home() {

  return (
    <div className="min-h-scree flex flex-col items-center p-6">
      <h1>홈화면</h1>
      <SearchBar placeholder="검색어 입력" autoFocus={true}/>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1]">
        <KakaoMap />
      </div>
    </div>
  )
}
