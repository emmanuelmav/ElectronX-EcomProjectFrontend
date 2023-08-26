import { useState } from 'react'


import mark2Mobile from '../assets/shared/mobile/image-xx99-mark-two-headphones.jpg'
import mark2Desktop from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'

import mark1Mobile from '../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import mark1Desktop from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'


import xx59Mobile from '../assets/shared/mobile/image-xx59-headphones.jpg'
import xx59Desktop from '../assets/shared/desktop/image-xx59-headphones.jpg'


import CategoryProducts from '../Components/CategoryProducts'
import Gallery from '../Components/Gallery'
import AboutSection from '../Components/AboutSection'

const Headphones = () => {

    const [products, setProducts] = useState([
        {
            id: 'xx99-mark-ii-headphones',
            mobileImg: mark2Mobile,
            desktopImg: mark2Desktop,
            isNew: true,
            title: 'XX99 MARK II HEADPHONES',
            description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
        },
        {
            id: 'xx99-mark-i-headphones',
            mobileImg: mark1Mobile,
            desktopImg: mark1Desktop,
            isNew: false,
            title: 'XX99 MARK I HEADPHONES',
            description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
        },
        {
            id: 'xx59-headphones',
            mobileImg: xx59Mobile,
            desktopImg: xx59Desktop,
            isNew: false,
            title: 'XX59 HEADPHONES',
            description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
        }
    ])

    return (
        <>
            <div className="bg-black2 text-[28px] md:text-[40px] text-white font-bold text-center h-[200px] md:h-[230px] flex items-center justify-center">
                Headphones
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

export default Headphones