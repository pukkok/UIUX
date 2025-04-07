
const WoopaImgBox = ({ src="" }) => {
  return (
    <div className="w-2xs">
      <img 
      className="relative bottom-10"
      src={src} alt="우파루파 불러오기 실패" />
    </div>
  )
}

export default WoopaImgBox