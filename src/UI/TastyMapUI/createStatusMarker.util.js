const createStatusMarker = (status = "default", scale = 1) => {
  const canvas = document.createElement("canvas")
  const size = 40 * scale
  canvas.width = size
  canvas.height = size + 10 // 꼬리까지 고려

  const ctx = canvas.getContext("2d")
  ctx.scale(scale, scale) // 마커 크기 조정 (선택)

  // 상태별 색상
  const config = {
    default: "#CCCCCC",       
    success: "#A5DE83",        
    hold: "#FFD93D",
    fail: "#FF6B6B"
  }

  const color = config[status] || config.default

  // 원형 마커 본체
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.arc(20, 20, 18, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()

  // 아래쪽 꼬리 (삼각형)
  ctx.beginPath()
  ctx.moveTo(15, 36)
  ctx.lineTo(25, 36)
  ctx.lineTo(20, 48)
  ctx.closePath()
  ctx.fill()

  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(20, 20, 9, 0, Math.PI * 2)
  ctx.closePath()

  return canvas.toDataURL()
}

export default createStatusMarker