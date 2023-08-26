import { useParams } from "react-router-dom"
import mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import tablet from '../assets/shared/tablet/image-xx99-mark-two-headphones.jpg'
import desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'


import gallery1 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
import gallery2 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
import gallery3 from '../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'



import { Link } from 'react-router-dom'


const ProductPage = ({ products }) => {
    const { id } = useParams()

    let product = products.find(p => p.id == id)

    return (

        <div className="px-[24px] md:px-[39px] lg:px-[165px] w-full ">
            <Link to="/">
                <p className="mt-[16px] mb-[24px] inline-block text-gray-500 cursor-pointer hover:text-black hover:font-bold">Go Back</p>
            </Link>
            <div className="mb-[88px] md:flex w-full justify-between gap-5">
                <img src={product.mobileImg} alt={id} className="md:hidden" />
                <img src={product.tabletImg} alt={id} className="hidden md:block lg:hidden" />
                <img src={product.desktopImg} alt={id} className="hidden lg:block max-w-[540px] max-h-[560px]" />
                <div className="self-center">
                    {
                        product.isNew ?
                            <p className='text-orange1 mb-[16px] mt-[32px] tracking-[10px] text-[14px]'>NEW PRODUCT</p>
                            :
                            <p className='text-orange1 mb-[16px] mt-[32px] tracking-[10px] text-[14px]'></p>
                    }
                    <p className='mb-[32px] text-[28px] lg:text-[40px] lg:w-[300px]  font-bold leading-[44px]'>{product.title}</p>
                    <p className='mb-[24px] text-[15px] leading-[25px] text-gray-500 lg:max-w-[400px]'>{product.description}</p>
                    <p className="font-bold mb-[31px]">$ {product.price}</p>
                    {/* COUNTER + ADD TO CART BUTTON */}
                    <div className="flex gap-4">

                        <div className='bg-grey1 text-black text-center w-[120px] h-[48px] flex justify-around items-center'>
                            <span className='cursor-pointer hover:text-orange1 hover:font-bold'>-</span>
                            <span className=''>1</span>
                            <span className='cursor-pointer hover:text-orange1 hover:font-bold'>+</span>
                        </div>

                        <div className={`cursor-pointer bg-orange1 text-white hover:bg-orange2 text-center 
                        w-[160px] h-[48px] flex justify-center items-center`}>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:flex  gap-44">
                {/* FEATURES SECTION */}
                <div className="mb-[87px] lg:w-1/2">
                    <h2 className="lg:text-[32px] text-[24px] font-bold mb-[25px]">FEATURES</h2>
                    <p className="mb-[20px] text-gray-500">{product.features}</p>
                    <p className="text-gray-500">{product.features2}</p>
                </div>
                {/* IN THE BOX SECTION */}
                <div className="mb-[88px] md:flex md:gap-[260px] lg:block">
                    <h2 className="text-[24px] md:text-[32px] font-bold mb-[24px]">IN THE BOX</h2>
                    <div>
                        {
                            product.includes.map((p, index) => {
                                return (

                                    <p className="mb-[8px]" key={index}>
                                        <span className="text-orange1 font-bold mr-[24px]">{p.quantity}x</span>
                                        {p.item}
                                    </p>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* PRODUCT CAROUSEL */}
            <div className="w-full mx-auto mb-[120px] md:flex gap-7">
                <div>
                    <img className="mb-[20px] rounded-md" src={product.gallery1} alt="image-gallery-1" />
                    <img className="mb-[20px] rounded-md" src={product.gallery2} alt="image-gallery-1" />
                </div>
                <div>
                    <img className="rounded-md" src={product.gallery3} alt="image-gallery-1" />
                </div>
            </div>

        </div>
    )
}


export default ProductPage