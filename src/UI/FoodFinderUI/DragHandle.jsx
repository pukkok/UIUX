const DragHandle = ({ onTouchStart, onTouchEnd }) => {
  return (
    <div
      className="
      w-full flex justify-center py-2
      
      after:content-['']
      after:w-10
      after:h-1
      after:bg-gray-500
      after:rounded-xl

      active:after:bg-[#ff72ce]
      "
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    />
  )
}

export default DragHandle