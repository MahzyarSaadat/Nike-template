const Button = (props) => {
  return (
    <button 
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      props.backgroundColor
        ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${props.fullWidth && "w-full"}`}
    >
        {props.lable}

        {props.iconLabel && <img 
        src={props.iconLabel} 
        alt="Arrow right" 
        />}
    </button>
  )
}

export default Button