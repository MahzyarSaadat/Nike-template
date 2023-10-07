import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <div className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer log" width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 sm:max-w-sm">            
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map(icon => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                <img 
                  ImgURL={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div> 
        <div className="flex gap-20 lg:gap-10 justify-between flex-wrap">
          {footerLinks.map(section => (
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
              {section.title}
              <ul>
                {section.links.map(link => (
                  <li key={link.name} className="mt-3 font-montserrat text-white-400 text-base hover:text-slate-gray cursor-pointer">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </h4>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
                  <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img 
                      src={copyrightSign}
                      alt="copy right sign"
                      width={20}
                      height={20}
                      className="rounded-full m-0"
                    />
                    <p className="text-white-400">Copyright. All right reserved.</p>
                  </div>
                  <p className="font-montserrat cursor-pointer text-white-400 ">
                    Terms & Conditions
                  </p>
      </div>
    </div>
  )
}

export default Footer