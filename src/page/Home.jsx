import HomeTitleBox from "../UI/HomeUI/HomeTitleBox"
import HomeCard from "../UI/HomeUI/HomeCard"
import WoopaImgBox from "../UI/HomeUI/WoopaImgBox";
import homeDatas from "../datas/homeDatas";
import { useState } from "react";
import woopaImgs from "../datas/woopaImgs";

const Home = () => {

  const [acitveCard, setActiveCard] = useState(0)

  const handleCardClick = (index) => {
    setActiveCard(index)
  }

  const pointList = [
    {
      place_name: "장소 이름1",
      place_addr: "주소 위치1",
      comment: "코멘트 위치1"
    },
    {
      place_name: "장소 이름2",
      place_addr: "주소 위치2",
      comment: "코멘트 위치2"
    },
    {
      place_name: "장소 이름3",
      place_addr: "주소 위치3",
      comment: "코멘트 위치3"
    }
  ]

  return (
    <div className="h-fit p-4 bg-[#fff8f4]">
      <HomeTitleBox />

      <div className="
      relative 
      flex flex-col justify-center items-center 
      mt-2">
        <WoopaImgBox src={woopaImgs[acitveCard]} />
        <div className="
        w-full
        flex flex-col justify-center items-center 
        absolute top-41 overflow-hidden
        ">
          {homeDatas.map((data, index) => {
            return (
              <HomeCard
                handleCardClick={() => handleCardClick(index)}
                key={index}
                icon={data.icon}
                point={data.point}
                pointList={[pointList]}
              />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Home
