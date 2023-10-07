import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[282px]" />
        <div className="flex justify-start mt-8 gap-x-2.5">
            <img src={star} alt="rating icon" width={24} height={24}/>
            <p className="text-xl leading-normal text-slate-gray font-montserrat">
                (4.5)
            </p>
        </div>
        <h3 className="font-palanquin font-semibold text-2xl mt-2 leading-normal">{name}</h3>
        <p className="font-semibold text-lg font-montserrat mt-2 leading-normal text-coral-red">{price}</p>
    </div>
  )
}

export default PopularProductCard