const SeviceCard = ({imgURL , subtext , label}) => {
  return (
    <div className="flex-1 sm:w-[350px]
    sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 w-full">
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="text-3xl font-palanquin font-bold leading-normal  mt-3 ">{label}</h3>
        <p className="mt-3 font-montserrat leading-normal break-words text-slate-gray text-lg">{subtext}</p>
    </div>
  )
}

export default SeviceCard