import ProductButton from './ProductButton'
import heroImgMobile from '../assets/home/mobile/image-header.jpg'
import heroImgTablet from '../assets/home/tablet/image-header.jpg'
import heroImgDesktop from '../assets/home/desktop/image-hero.jpg'


const HeroSection = () => {

    const id = "xx99-mark-ii-headphones"

    return (
        <>
            <div className='md:hidden
      h-[512px] bg-bottom bg-cover 
      flex flex-col justify-center 
      items-center text-center' style={{ backgroundImage: `url(${heroImgMobile})` }}>
                <p className='tracking-[10px] text-gray-500 text-[13px] mb-[16px]'>NEW PRODUCT</p>
                <h1 className='text-white font-bold text-[32px] mb-[25px]'>XX99 MARK II HEADPHONES</h1>
                <p className='leading-[25px] w-[280px] text-gray-400 mb-[25px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ProductButton color="orange" id={id} />
            </div>
            <div className='
      h-[512px] bg-center bg-cover hidden
      md:flex flex-col justify-center lg:hidden
      items-center text-center' style={{ backgroundImage: `url(${heroImgTablet})` }}>
                <p className='tracking-[10px] text-gray-500 text-[13px] mb-[16px]'>NEW PRODUCT</p>
                <h1 className='text-white font-bold text-[32px] mb-[25px]'>XX99 MARK II HEADPHONES</h1>
                <p className='leading-[25px] w-[280px] text-gray-400 mb-[25px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ProductButton color="orange" id={id} />
            </div>
            <div className=' 
      h-[512px] bg-top bg-contain hidden 
      lg:flex flex-col justify-center 
      items- text-left pl-[165px]' style={{ backgroundImage: `url(${heroImgDesktop})` }}>
                <p className='tracking-[10px] text-gray-500 text-[13px] mb-[16px]'>NEW PRODUCT</p>
                <h1 className='text-white font-bold text-[58px] w-[380px] mb-[25px]'>XX99 MARK II HEADPHONES</h1>
                <p className='leading-[25px] w-[380px] text-gray-400 mb-[25px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ProductButton color="orange" id={id} />
            </div>

        </>
    )
}


export default HeroSection