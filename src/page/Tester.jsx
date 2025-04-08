import createStatusMarker from "../UI/TastyMapUI/CreateStatusMarker.util"

const Tester = () => {

  const successMarker = createStatusMarker('success', 1.4)
  const failMarker = createStatusMarker('fail')
  const holdMarker = createStatusMarker('hold')
  const defaultMarker = createStatusMarker()

  return (
    <div>
      <p className="text-center">테스트 공간</p>
      <img src={successMarker}/>
      <img src={failMarker}/>
      <img src={holdMarker}/>
      <img src={defaultMarker}/>
    </div>
  )
}

export default Tester