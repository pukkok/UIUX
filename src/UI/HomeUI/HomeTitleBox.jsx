const datas = {
  title: "우파루파 맛집뿌수기",
  subTitle: "어떤 맛집을 뿌숴볼까?",
}

const HomeTitleBox = () => {

  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <h1 className="text-2xl">{datas.title}</h1>
      <h2 className="text-2xs">{datas.subTitle}</h2>
    </div>
  )
}

export default HomeTitleBox