import { useEffect, useRef, useState } from "react"
import createStatusMarker from './createStatusMarker.util'

function KakaoMap({ keword = "나성동", setPlaces, activePlace = "" }) {
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
      ps.keywordSearch(keword, (data, status, pagination) => {
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

      const defaultMarker = createStatusMarker()

      const activeMarkerImage = new kakao.maps.MarkerImage(
        // fixme : active마크가 들어 갈 곳 이후에 기본, 성공, 실패, 보류로 나눠서 사용할 것
        "https://yourdomain.com/active-marker.png",
        new kakao.maps.Size(24, 24)
      )
      
      const defaultMarkerImage = new kakao.maps.MarkerImage(
        defaultMarker,
        new kakao.maps.Size(24, 24)
      )

      const bounds = new kakao.maps.LatLngBounds()

      places.forEach(place => {
        const { place_name, x, y } = place
        const coords = new kakao.maps.LatLng(y, x)

        const marker = new kakao.maps.Marker({
          map,
          position: coords,
          image: (place_name === activePlace) ? activeMarkerImage : defaultMarkerImage
        })

        markers.current.push(marker)

        if (place_name === activePlace) {
          map.setCenter(coords)
          map.setLevel(3) // 더 가까이
        }

        bounds.extend(coords)
      })

      map.setBounds(bounds)
    }

    searchPlaces()
  }, [keword])

  useEffect(() => {
    setPlaces(allPlaces) // 사이드바에 결과 전달
  }, [allPlaces])

  return <div ref={mapRef} className="map w-full h-screen border-2 border-gray-300"></div>
}

export default KakaoMap
