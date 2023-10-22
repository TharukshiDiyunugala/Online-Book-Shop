import React from 'react'
import BannerCard from '../home/BannerCard'
import { Link } from 'react-router-dom'
import book from '../home/BannerCard'




const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className = 'text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books<span className='text-blue-700'> for the Best Prices</span></h2>
                <p className= 'md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas accusamus quas consectetur mollitia praesentium quibusdam enim iste ratione perferendis minima, reprehenderit quam dicta optio! Repellat, non. Nostrum, voluptatum dolorem!</p>
            <div>

                <input type="search" name="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
               
            <Link to = "http://localhost:5173/book/6529fc0a70f05f3d42407db4">
            <button className='bg-green-700 px-6 py-2 text-white font-medium hover:bg-black
            transition-all ease-in duration-200'>Search
            </button>
            </Link>
            
            </div>
            </div>

            <div>
                <BannerCard/>
            </div>
        </div>
        </div>
  )
}

export default Banner