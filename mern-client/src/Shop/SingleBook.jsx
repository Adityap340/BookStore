// SingleBook.js

import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, authorName, bookDescription, bookPdfUrl } = useLoaderData();

  return (
    <div className="py-16 px-4 lg:px-24 flex bg-teal-100">
      {/* Book Image on the Left */}
      <div className="w-full lg:w-1/2 pr-8">
        <img src={imageUrl} alt={bookTitle} className="w-full rounded-lg shadow-lg lg:max-w-md" />
      </div>

      {/* Book Details on the Right */}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-2">{bookTitle}</h1>
        <p className="text-gray-600 mb-4">By {authorName}</p>
        <p className="text-lg text-gray-800 mb-6">{bookDescription}</p>

        <div className="flex justify-center">
          <a
            href={bookPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full"
          >
            Read PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
