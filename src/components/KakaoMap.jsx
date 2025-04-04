import { useEffect, useRef, useState } from "react"

function KakaoMap({ addr = "나성동", pinName = "핀네임", setPlaces }) {
  const mapRef = useRef(null)
  const mapInstance = useRef(null) // 기존 지도 객체 저장
  const markers = useRef([]) // 마커 저장
  const [allPlaces, setAllPlaces] = useState([]) // 전체 검색 결과 저장

  useEffect(() => {
    if (!mapRef.current) return
    const { kakao } = window

    if (!mapInstance.current) {
      mapInstance.current = new kakao.maps.Map(mapRef.current, {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 중심 = 서울시청
        level: 7, // 기본 확대 레벨
      })
    }

    const map = mapInstance.current
    const ps = new kakao.maps.services.Places()
    let tempPlaces = [] // 여러 페이지의 데이터를 모을 배열
    let currentPage = 1

    const searchPlaces = () => {
      ps.keywordSearch(addr, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          tempPlaces = [...tempPlaces, ...data] // 현재 페이지 데이터 추가

          if (pagination.hasNextPage && currentPage < 3) { // 3페이지까지 가져오기
            currentPage++
            pagination.nextPage()
          } else {
            setAllPlaces(tempPlaces) // 최종 데이터 저장
            updateMap(tempPlaces)
          }
        } else {
          setAllPlaces([]) // 검색 결과 없을 때
          console.log("검색 결과 없음")
        }
      }, { page: currentPage, size: 15 })
    }

    const updateMap = (places) => {
      markers.current.forEach(marker => marker.setMap(null))
      markers.current = []

      const bounds = new kakao.maps.LatLngBounds()

      places.forEach(place => {
        const { place_name, x, y } = place
        const coords = new kakao.maps.LatLng(y, x)

        const marker = new kakao.maps.Marker({
          map,
          position: coords,
        })
        markers.current.push(marker)

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:200px;text-align:center;padding:6px 0;">${place_name || pinName}</div>`,
        })
        kakao.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker)
        })

        bounds.extend(coords)
      })

      map.setBounds(bounds)
    }

    searchPlaces()
  }, [addr])

  useEffect(() => {
    setPlaces(allPlaces) // 사이드바에 결과 전달
  }, [allPlaces])

  return <div ref={mapRef} className="map w-full h-screen border-2 border-gray-300"></div>
}

export default KakaoMap
