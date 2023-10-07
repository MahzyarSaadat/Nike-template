import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-1 max-container w-full">
      <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin
          text-4xl capitalize font-bold lg:max-w-lg">
            we provide you
            <span className="text-coral-red">super</span>
            <br />
            <span className="text-coral-red">quality</span>
            &nbsp;Shoes
          </h2>
          <p className="mt-4 info-text lg:max-w-lg">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 info-text lg:max-w-lg">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
          </p>
          <div className="mt-16">
            <Button lable="View details"/>
          </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} width={570} height={522}/>
      </div>
    </div>
  )
}

export default SuperQuality