import { services } from "../constants"
import SeviceCard from "../components/SeviceCard"


const Services = () => {
  return (
    <div className="max-container flex justify-center gap-9 flex-wrap">
      {services.map(service => (
        <SeviceCard key={service.label} {...service}/>
      ))}
    </div>
  )
}

export default Services