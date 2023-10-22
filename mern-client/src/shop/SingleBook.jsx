import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>

        {/* Left Side: Image and Book Title */}
        <div className='md:w-1/2'>
          <img src={imageURL} alt='' className='h-96' />
         
        </div>

        {/* Right Side: Text, Statistics, and Explore More */}
        <div className='md:w-1/2 space-y-16'>
          <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
          <h2>{bookTitle}</h2>
          </h2>
          <p className='text-lg md:w-5/6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fugit nihil pariatur aspernatur ipsum saepe iure aperiam? Ab, tenetur magnam! Ea dolore magni vel itaque quo magnam quae exercitationem omnis!
          </p>
          <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
           
          </div>
          <Link to="/cart" className='mt-8 block'>
            <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
