import { useEffect, useRef } from "react"


function KakaoMap ({addr='나리로 38' ,pinName = '핀네임'}) {

  const mapRef = useRef()

  useEffect(()=>{
    const container = mapRef.current
    // INFO : 카카오 맵 사용
    const { kakao } = window 
    
    const options = {
        center: new kakao.maps.LatLng(0,0), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    }
    const map = new kakao.maps.Map(container, options)

    const geocoder = new kakao.maps.services.Geocoder()

    // TODO : 주소로 좌표를 검색
    geocoder.addressSearch(addr, function(result, status) {

      // TODO : 정상적으로 검색이 완료된 경우 
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x)

        // INFO : 결과값으로 받은 위치를 마커로 표시
        const marker = new kakao.maps.Marker({
            map: map,
            position: coords
        })

        // INFO : 인포윈도우로 장소에 대한 설명을 표시
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${pinName}</div>`
        })
        infowindow.open(map, marker)

        // INFO : 지도의 중심을 결과값으로 받은 위치로 이동
        map.setCenter(coords)
      } else {
        // TODO : 주소 검색 실패
        console.error("주소 검색 실패", status)
      }
    })
  }, [addr, pinName])

    return(
        <div ref={mapRef} className="map w-full h-screen border-2 border-gray-300"></div>
    )
    
}

export default KakaoMap

