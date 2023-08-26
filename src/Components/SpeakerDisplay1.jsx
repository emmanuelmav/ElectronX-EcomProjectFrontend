import ProductButton from "./ProductButton"
import bgPattern from '../assets/home/desktop/pattern-circles.svg'
import speakerMobile from '../assets/home/mobile/image-speaker-zx9.png'
import speakerTablet from '../assets/home/tablet/image-speaker-zx9.png'


const SpeakerDisplay1 = () => {

    const id = "zx9-speaker"

    return (
        <div className=" rounded-md text-center 
        lg:flex lg:bg-left lg:bg-contain items-center
        w-10/12 h-[600px] bg-orange1 bg-no-repeat
        mx-auto bg-contain md:bg-cover md:bg-bottom mb-[32px] pt-[50px] md:pt-[100px]
        " style={{ backgroundImage: `url(${bgPattern})` }}>
            <img className="
            w-[150px] h-[180px] mb-[32px] mx-auto
            lg:hidden
            " src={speakerMobile} alt="zx9-speaker" />
            <div className="ml-[150px]">
                <img className=" hidden
            w-[300px] h-[400px] mb-[32px] mx-auto
            lg:block
            " src={speakerTablet} alt="zx9-speaker" />
            </div>
            <div>

                <h2 className="text-white mb-[24px] leading-[40px] w-[200px] mx-auto font-bold text-[36px]">ZX9 SPEAKER</h2>
                <p className="text-white leading-[25px] mb-[24px] md:w-1/2  mx-auto">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <div className="flex justify-center">
                    <ProductButton color={"black"} id={id} />
                </div>
            </div>
        </div>
    )
}

export default SpeakerDisplay1