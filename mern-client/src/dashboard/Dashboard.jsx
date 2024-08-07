import { Card } from 'flowbite-react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  useEffect(()=>{

    fetch("http://localhost:4000/all-books").then(res =>res.json()).then(data=>setBooks(data));
  },[])
  return (
    <div className='mt-10 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-left'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =><Card
            
          >
            <img src={book.imageURL} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
              Here are  acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </p>
            
          </Card>)
        }
      </div>
    
    </div>
  )
}

export default Dashboard