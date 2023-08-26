import { useState } from 'react'


import yx1Mobile from '../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import yx1Desktop from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

import CategoryProducts from '../Components/CategoryProducts'
import Gallery from '../Components/Gallery'
import AboutSection from '../Components/AboutSection'

const Earphones = () => {

    const [products, setProducts] = useState([

        {
            id: 'yx1-earphones',
            mobileImg: yx1Mobile,
            desktopImg: yx1Desktop,
            isNew: true,
            title: 'YX1 WIRELESS EARPHONES',
            description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
        }
    ])

    return (
        <>
            <div className="bg-black2 text-[28px] md:text-[40px] text-white font-bold text-center h-[200px] md:h-[230px] flex items-center justify-center">
                Earphones
            </div>
            {
                products.map((p, index) => {
                    return (
                        <CategoryProducts products={p} key={p.id} index={index} />
                    )
                })
            }
            <Gallery />
            <AboutSection />
        </>
    )
}

export default Earphones