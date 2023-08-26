import headphonesImg from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImg from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import rightArrow from '../assets/shared/desktop/icon-arrow-right.svg'

const Gallery = () => {

    return (
        <div className="md:flex items-center gap-3 md:gap-8 md:mt-[90px] mb-[90px] md:mb-[168px] justify-center w-full">

            <div className="relative mt-[90px] md:mt-[0px]">
                <img className="w-[125px] h-[120px] absolute left-0 right-0 top-[-50px] m-auto"
                    src={headphonesImg} alt="headphone" />
                <div className="bg-grey1
                 w-[322px] md:w-[250px] h-[165px] text-center mx-auto rounded-md flex flex-col justify-end">

                    <h3 className="text-black font-bold pb-[17px]">HEADPHONES</h3>
                    <div className="flex justify-center pb-[22px]">
                        <p className="text-[13px] mr-[13px] text-gray-500 cursor-pointer hover:text-orange1 hover:font-bold">SHOP</p>
                        <img className="self-center cursor-pointer"
                            src={rightArrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="relative mt-[70px] md:mt-[0px]">
                <img className="w-[125px] h-[120px] absolute left-0 right-0 top-[-50px] m-auto"
                    src={speakersImg} alt="headphone" />
                <div className="bg-grey1
                 w-[322px] md:w-[250px] h-[165px] text-center mx-auto rounded-md flex flex-col justify-end">

                    <h3 className="text-black font-bold pb-[17px]">SPEAKERS</h3>
                    <div className="flex justify-center pb-[22px]">
                        <p className="text-[13px] mr-[13px] text-gray-500 cursor-pointer hover:text-orange1 hover:font-bold">SHOP</p>
                        <img className="self-center cursor-pointer"
                            src={rightArrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="relative mt-[70px] md:mt-[0px]">
                <img className="w-[140px] h-[120px] absolute left-0 right-0 top-[-50px] m-auto"
                    src={earphonesImg} alt="headphone" />
                <div className="bg-grey1
                 w-[322px] md:w-[250px] h-[165px] text-center mx-auto rounded-md flex flex-col justify-end">

                    <h3 className="text-black font-bold pb-[17px]">EARPHONES</h3>
                    <div className="flex justify-center pb-[22px]">
                        <p className="text-[13px] mr-[13px] text-gray-500 cursor-pointer hover:text-orange1 hover:font-bold">SHOP</p>
                        <img className="self-center cursor-pointer"
                            src={rightArrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery