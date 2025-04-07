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

  return (
    <div className="min-h-screen p-4 bg-[#fff8f4]">
      <HomeTitleBox />

      <div className="
      relative 
      flex flex-col justify-center items-center 
      mt-2">
        <WoopaImgBox src={woopaImgs[acitveCard]} />
        <div className="
        w-full
        flex flex-col justify-center items-center 
        relative bottom-30
        ">
          {homeDatas.map((data, index) => {
            return (
              <HomeCard
                handleCardClick={() => handleCardClick(index)}
                key={index}
                icon={data.icon}
                point={data.point}
                pointList={[]}
              />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Home
