import { Link } from "react-router-dom"

const HomeCard = ({icon="🚩", point="갈거야", pointList=[], handleCardClick=null}) => {

  return (
    <div className='
    w-full
    bg-[#fff8f4] 
    box-border
    border-2 border-[#331008]
    rounded-lg shadow-md p-4 mb-2'
    onClick={handleCardClick}>
    
      <div className="flex">
        <p className="text-lg flex items-center gap-1">{icon} {point} 
          <span> | </span> 
          {pointList?.totalCount || 0}개
        </p>
        {point === "갈거야" && 
        <Link to={"/map"} className="ml-auto border-2 border-[#331008] p-[2px_4px] rounded-md cursor-pointer">맛집 찾기
        </Link>}
        {/* // <button className="ml-auto border-2 border-[#331008] p-[2px_4px] rounded-md cursor-pointer">맛집 찾기</button> */}
      </div>

      <div className="mt-4 flex items-center">
        {pointList.length > 0 ? 
        <div>
          <p>{pointList[0]?.place_name || "장소 이름"}
            <span>{pointList[0]?.place_addr || "주소"}</span>
          </p>  
          <p>{pointList[0]?.comment || "코멘트 위치"}</p>
        </div> :
        <p>등록된 데이터가 없어요.</p>}
        <button className="ml-auto">➡️</button>
      </div>
    </div>
  )
}

export default HomeCard