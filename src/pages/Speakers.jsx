import { useState } from 'react'


import zx9Mobile from '../assets/shared/mobile/image-zx9-speaker.jpg'
import zx9Desktop from '../assets/shared/desktop/image-zx9-speaker.jpg'

import zx7Mobile from '../assets/shared/desktop/image-zx7-speaker.jpg'
import zx7Desktop from '../assets/shared/desktop/image-zx7-speaker.jpg'


import CategoryProducts from '../Components/CategoryProducts'
import Gallery from '../Components/Gallery'
import AboutSection from '../Components/AboutSection'



const Speakers = () => {

    const [products, setProducts] = useState([

        {
            id: 'zx9-speaker',
            mobileImg: zx9Mobile,
            desktopImg: zx9Desktop,
            isNew: true,
            title: 'ZX9 SPEAKER',
            description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
        },
        {
            id: 'zx7-speaker',
            mobileImg: zx7Mobile,
            desktopImg: zx7Desktop,
            isNew: false,
            title: 'ZX7 SPEAKER',
            description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
        }
    ])


    return (
        <>
            <div className="bg-black2 text-[28px] md:text-[40px] text-white font-bold text-center h-[200px] md:h-[230px] flex items-center justify-center">
                Speakers
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

export default Speakers