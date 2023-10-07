import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import {arrowRight} from "../assets/icons"
import {statistics , shoes} from "../constants"
import { bigShoe1 } from "../assets/images"
import { useState } from "react"



const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col
      justify-center min-h-screen gap-10 max-container relative"
    >
      <div className="relative xl:w-2/5 flex
      flex-col justify-center items-start 
      w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">our summer collection</p>
        <h1 className="mt-10 font-palanquin
        text-8xl  max-sm:text-[72px] max-sm:leading-[82px]
        font-bold  ">
          <span className="xl:bg-white 
          xl:whitespace-nowrap relative pr-10 z-10">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-10 inline-block">Nike</span>
          &nbsp;Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-10 mb-14 leading-8 sm:max-w-sm ">
          Discover stylish Nike arrivals, 
          quality comfort, and innovation for
          your active life.
        </p>
        <Button lable="shop now" 
        iconLabel={arrowRight}/>

        <div className="flex justify-start items-center 
        mt-20 gap-16 flex-wrap w-full ">
          {statistics.map((state) => (
            <div key={state.label}>
              <p className="font-montserrat font-bold text-4xl ">{state.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">{state.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
      max-xl:py-40 bg-hero bg-cover bg-primary">
        <img
          src={bigShoeImg} 
          alt="show collection"
          width={610}
          height={500}
          className="relative object-contain z-10"
        />
      </div>

      <div className="flex right-[10%] sm:gap-6 gap-4 absolute justify-center items-center -bottom-[5%] ">
        {shoes.map(shoe => (
          <div key={shoe}>
            <ShoeCard 
              imageUrl={shoe}
              changeBigShoeImageUrl={
                (shoe) => (setbigShoeImg(shoe))
              }
              bigShowImage={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero