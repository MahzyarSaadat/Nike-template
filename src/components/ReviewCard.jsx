import {star} from "../assets/icons"

const ReviewCard = ({
    imgURL,
    customerName,
    rating,
    feedback,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
            src={imgURL}
            alt="customer pictucre"
            width={100}
            height={100}
            className=" rounded-full mb-4 object-cover w-[125px]"
        />
        <p className="text-center text-slate-gray
        max-w-xs info-text">
          {feedback}
        </p>
        <div className="flex gap-3 mt-4">
          <img  
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <p className="text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-6 font-palanquin font-bold leading-normal text-2xl">{customerName}</h3>
    </div>
  )
}

export default ReviewCard