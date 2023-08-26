import ProductButton from "../Components/ProductButton"
import speakerImgMobile from '../assets/home/mobile/image-speaker-zx7.jpg'
import speakerImgTablet from '../assets/home/tablet/image-speaker-zx7.jpg'
import speakerImgDesktop from '../assets/home/desktop/image-speaker-zx7.jpg'

const SpeakerDisplay2 = () => {

    const id = 'zx7-speaker'

    return (
        <>
            <div className="mb-[32px] mx-auto md:hidden bg-[#e0e0e0] bg-right
            w-10/12 h-[320px] bg-contain  bg-no-repeat pt-[60px] pl-[20px] 
            " style={{
                    backgroundImage: `url(${speakerImgMobile})`
                }}>
                <div className="">
                    <p className="font-bold text-[28px] mb-[32px]">ZX7 SPEAKER</p>
                    <ProductButton color={"white"} id={id} />
                </div>
            </div>
            <div className="hidden md:block mx-auto lg:hidden bg-[#e0e0e0]
            w-10/12 h-[320px] bg-contain bg-right bg-no-repeat pt-[60px] pl-[60px]
            " style={{
                    backgroundImage: `url(${speakerImgTablet})`
                }}>
                <div className="">
                    <p className="font-bold text-[28px] mb-[32px]">ZX7 SPEAKER</p>
                    <ProductButton color={"white"} id={id} />
                </div>
            </div>
            <div className="hidden lg:block mx-auto rounded-md 
            w-10/12 h-[320px] bg-contain bg-no-repeat pt-[60px] pl-[60px]
            " style={{
                    backgroundImage: `url(${speakerImgDesktop})`
                }}>
                <div className="">
                    <p className="font-bold text-[28px] mb-[32px]">ZX7 SPEAKER</p>
                    <ProductButton color={"white"} id={id} />
                </div>
            </div>
        </>
    )
}


export default SpeakerDisplay2