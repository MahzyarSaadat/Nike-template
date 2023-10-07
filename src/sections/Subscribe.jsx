import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div id="contact-us" className="max-container justify-center items-center max-lg:flex-col gap-10 flex">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="flex lg:max-w-[40%] w-full max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
        type="text" 
        placeholder="subscribe@nike.com"
        className="input"
        />
        <div className="felx max-sm:justify-end items-center max-sm:w-full">
          <Button lable="clicke me" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe