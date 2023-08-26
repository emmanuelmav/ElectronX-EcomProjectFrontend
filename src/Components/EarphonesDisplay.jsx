import ProductButton from "./ProductButton"
import earphonesImg from '../assets/home/mobile/image-earphones-yx1.jpg'

const EarphonesDisplay = () => {

    const id = 'yx1-earphones'

    return (
        <div className="w-10/12 mx-auto rounded-md mb-[120px] md:mt-[32px] md:flex gap-[22px]">
            <div className="h-[200px] bg-[#242424] mb-[24px] bg-contain md:bg-cover md:bg-center bg-no-repeat rounded-md w-full"
                style={{ backgroundImage: `url(${earphonesImg})` }}
            ></div>
            <div className="h-[200px] w-full p-[41px] lg:pl-[130px] rounded-md bg-grey1 flex flex-col justify-around">
                <h2 className="text-[28px] font-bold">YX1 EARPHONES</h2>
                <ProductButton color={"white"} id={id} />
            </div>
        </div>
    )
}


export default EarphonesDisplay