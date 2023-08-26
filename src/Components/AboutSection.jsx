
import mobileGear from '../assets/shared/mobile/image-best-gear.jpg'
import tabletGear from '../assets/shared/mobile/image-best-gear.jpg'
import desktopGear from '../assets/shared/mobile/image-best-gear.jpg'


const AboutSection = () => {



    return (
        <div className="mb-[120px] w-10/12 mx-auto lg:flex flex-row-reverse">
            <div className="h-[300px] sm:ml-[80px] md:ml-0 md:hidden bg-contain bg-no-repeat"
                // MOBILE
                style={{ backgroundImage: `url(${mobileGear})` }}>
            </div>

            <div className="h-[300px] hidden md:flex lg:hidden bg-contain bg-no-repeat bg-center"
                // TABLET
                style={{ backgroundImage: `url(${tabletGear})` }}>
            </div>

            <div className="h-[500px] w-1/2 bg-cover hidden lg:block bg-no-repeat"
                // DESKTOP
                style={{ backgroundImage: `url(${desktopGear})` }}>
            </div>

            <div className="lg:w-1/2  self-center lg:mr-[30px]">
                <h2 className="font-bold text-center lg:text-start my-[32px]  text-[28px] md:text-[40px] md:leading-[44px] md:w-[500px] lg:w-[400px] mx-auto lg:mx-0">BRINGING YOU THE
                    <span className="text-orange1"> BEST </span>
                    AUDIO GEAR
                </h2>
                <p className="text-center lg:text-start leading-[25px] text-[15px] text-gray-500">Located at the heart of New York City, ElectronX is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}


export default AboutSection