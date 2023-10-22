import React, { useState } from 'react';
import { Table } from 'flowbite-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.jpg';

const ManageBooks = ({ selectedBooks }) => {
  const [allBooks, setAllBooks] = useState([]);

  // Simulating the initial fetch based on selectedBooks
  useEffect(() => {
    // Assuming selectedBooks is an array of book IDs
    fetch(`/books?ids=${selectedBooks?.join(',')}`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [selectedBooks]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`/shop/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is Deleted Successfully!");
        // You might want to refresh the selected books list or update the UI in the shop or single book page.
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-5xl font-bold text-center">Your Cart</h2>
      <div className="md:flex items-center">
        <div className="md:w-1/2">
          <img src={cart} alt="Cart" className="w-full" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center space-y-4">
          <button className="bg-green-700 text-white font-semibold px-10 py-2 rounded-lg hover:bg-black transition-all duration-300">
            Number of Books
          </button>
          <input
            type="search"
            name="bookCount"
            placeholder="Enter the number of books"
            className="py-2 px-4 rounded-lg outline-none w-1/2 text-center"
          />
          <button className="bg-green-700 text-white font-semibold px-10 py-2 rounded-lg hover:bg-black transition-all duration-300">
            Total Price
          </button>
          <input
            type="search"
            name="totalPrice"
            placeholder="$"
            className="py-2 px-4 rounded-lg outline-none w-1/2 text-center"
          />
          <button className="bg-green-700 text-white font-semibold px-10 py-2 rounded-lg hover:bg-black transition-all duration-300">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
