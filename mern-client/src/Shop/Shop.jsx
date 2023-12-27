import React, { useState, useEffect } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  const handleBuyNow = (bookPdfUrl) => {
    // Open bookPdfUrl in a new tab
    window.open(bookPdfUrl, '_blank');
  };
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid cols-1'>
        {
          books.map(book => <Card href="#" className="max-w-sm">
            <div className='grid '>
            <img src={book.imageUrl} alt="Sunset in the mountains" className='w-60 h-90 justify-self-center' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {book.bookTitle}
            </h5>
            <p className="truncate font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
            <button onClick={() => handleBuyNow(book.bookPdfUrl)} className='w-1/2  bg-blue-700 hover:bg-black text-white font-semibold py-2 rounded justify-self-center'>Buy Now</button>
            </div>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop