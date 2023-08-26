import fbLogo from '../assets/shared/desktop/icon-facebook.svg'
import igLogo from '../assets/shared/desktop/icon-twitter.svg'
import twtLogo from '../assets/shared/desktop/icon-instagram.svg'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <div className='bg-black2 text-white w-full 
        flex flex-col text-center gap-4 pt-[48px]
        md:pb-[48px] md:pt-[71px] md:px-[165px]
        
        '>
            <div className='md:flex justify-between w-full items-baseline'>
                <Link to="/">
                    <h1 className='font-bold cursor-pointer text-xl mb-[48px]'>ElectronX</h1>
                </Link>
                <div className='md:flex gap-[34px] text-white text-[13px]'>
                    <Link to="/">
                        <p className="mb-[16px] font-bold hover:text-orange1 cursor-pointer">HOME</p>
                    </Link>
                    <Link to="/category/headphones">
                        <p className="mb-[16px] font-bold hover:text-orange1 cursor-pointer">HEADPHONES</p>
                    </Link>
                    <Link to="/category/speakers">
                        <p className="mb-[16px] font-bold hover:text-orange1 cursor-pointer">SPEAKERS</p>
                    </Link>
                    <Link to="/category/earphones">
                        <p className="mb-[16px] font-bold hover:text-orange1 cursor-pointer">EARPHONES</p>
                    </Link>
                </div>
            </div>
            <div className='text-center flex flex-col items-center md:flex-row md:justify-between w-full'>
                <div className='md:text-start w-[340px] md:w-[540px]'>
                    <p className='leading-[25px] text-gray-400 mb-[48px]'>
                        ElectronX is an all in one stop to fulfill
                        your audio needs. We're a small team of
                        music lovers and sound specialists who
                        are devoted to helping you get the most
                        out of personal audio. Come and
                        visit our demo facility - we’re open
                        7 days a week.
                    </p>
                    <p className='text-gray-400 font-bold mb-[48px]'>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className='flex justify-center items-center md:flex-row gap-[16px] pb-[38px]'>
                    <img className='cursor-pointer hover:fill-orange1' src={fbLogo} alt="facebook-logo" />
                    <img className='cursor-pointer hover:fill-orange1' src={twtLogo} alt="twitter-logo" />
                    <img className='cursor-pointer hover:fill-orange1' src={igLogo} alt="instagram-logo" />
                </div>
            </div>
        </div>
    )
}


export default Footer