import { useState } from 'react'
import './App.css'

import productData from './productData'
import { Route, Routes, Navigate } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Layout from './pages/Layout'
import Headphones from './pages/Headphones'
import Earphones from './pages/Earphones'
import Speakers from './pages/Speakers'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState(productData)
  const [cart, setCart] = useState([])

  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/category">
            <Route path="headphones" element={<Headphones />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="speakers" element={<Speakers />} />
          </Route>
          <Route path="/product" >
            <Route path=":id" element={<ProductPage products={products} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="p-4">

        <div className='bg-orange1 cursor-pointer text-white hover:bg-orange2 text-center w-[160px] h-[48px] flex justify-center items-center'>
          <p>SEE PRODUCT</p>
        </div>
        <div className='bg-white cursor-pointer text-black outline outline-1 outline-black hover:bg-black text-center outlin hover:text-white w-[160px] h-[48px] flex justify-center items-center'>
          <p>SEE PRODUCT</p>
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="name" className='block mb-2 font-bold'>Name</label>
          <input
            type="text"
            name='name'
            id='name'
            className='focus:outline focus:outline-1 focus:outline-orange1 w-[300px] px-6 py-2 font-bold outline outline-2 outline-grey1 rounded'
            placeholder='Insert your name'
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="e-money"
            className='
                  active:outline active:outline-1 
                  active:outline-orange1
                  hover:outline hover:outline-1 
                  hover:outline-orange1

                  w-[300px] px-6 py-2 font-bold 
                  outline outline-2 outline-grey1 
                  rounded flex gap-5
          '>
            <input
              type="radio"
              name='e-money'
              id='e-money'
              className=""
            />
            e-Money
          </label>
        </div>
        <br />
        <br />
        <div className='bg-grey1 text-black text-center w-[120px] h-[48px] flex justify-around items-center'>
          <span className='cursor-pointer hover:text-orange1 hover:font-bold'>-</span>
          <span className=''>0</span>
          <span className='cursor-pointer hover:text-orange1 hover:font-bold'>+</span>
        </div>


      </div> */}

    </div>
  )
}

export default App
