import ProductButton from "./ProductButton"

const CategoryProducts = ({ index, products }) => {
    return (
        <div className={`w-10/12 my-[120px] mx-auto lg:flex justify-around ${index == 1 ? 'flex-row-reverse' : ''}`}>
            <img className='md:hidden' src={products.desktopImg} alt="mark2-headphones" />
            <img className='hidden md:block lg:hidden mx-auto' src={products.mobileImg} alt="mark2-headphones" />
            <img className='hidden lg:block max-h-[400px]' src={products.desktopImg} alt="mark2-headphones" />
            <div className='flex flex-col items-center text-center lg:text-start lg:items-start lg:justify-center'>
                {
                    products.isNew ?
                        <p className='text-orange1 mb-[16px] mt-[32px] tracking-[10px] text-[14px]'>NEW PRODUCT</p>
                        :
                        <p className='mb-[16px] mt-[32px]'></p>
                }
                <p className='mb-[32px] text-[28px] font-bold leading-[44px]'>{products.title}</p>
                <p className='mb-[24px] text-[15px] leading-[25px] text-gray-500 lg:max-w-[400px]'>{products.description}</p>
                <ProductButton color="orange" id={products.id} />
            </div>
        </div>
    )
}

export default CategoryProducts