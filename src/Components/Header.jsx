import mobileNav from '../assets/mobile-nav.svg'
import cart from '../assets/cart.svg'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className='bg-black2 text-white 
        flex justify-around md:justify-between items-center 
        w-full h-[91px] md:px-[165px]
        border-b-[1px] border-b-grey1
        '>
            <img className='self-center md:hidden cursor-pointer' src={mobileNav} alt="mobile-nav" />
            <Link to="/">
                <h1 className='font-bold text-xl cursor-pointer'>ElectronX</h1>
            </Link>
            <div className='hidden md:flex gap-[34px] text-white text-[13px]'>
                <Link to="/">
                    <p className="hover:text-orange1 font-bold cursor-pointer">HOME</p>
                </Link>
                <Link to="/category/headphones">
                    <p className="hover:text-orange1 font-bold cursor-pointer">HEADPHONES</p>
                </Link>
                <Link to="/category/speakers">
                    <p className="hover:text-orange1 font-bold cursor-pointer">SPEAKERS</p>
                </Link>
                <Link to="/category/earphones">
                    <p className="hover:text-orange1 font-bold cursor-pointer">EARPHONES</p>
                </Link>
            </div>
            <img className='self-center cursor-pointer' src={cart} alt="shopping-cart" />
        </div>
    )
}


export default Header