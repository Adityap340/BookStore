import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

const ManageBooks = () => {
  const[allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  },[]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/book/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) =>{ alert("Book Deleted Successfully")
      setAllBooks(data);
    });
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      <table className="lg:w-[1180px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th className="py-3 px-6 border-b">Number</th>
          <th className="py-3 px-6 border-b">Book Name</th>
          <th className="py-3 px-6 border-b">Author</th>
          <th className="py-3 px-6 border-b">Category</th>
          <th className="py-3 px-6 border-b">Price</th>
          <th className="py-3 px-6 border-b">Edit</th>
        </tr>
      </thead>
      <tbody>
        {allBooks.map((book, index) => (
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{book.bookTitle}</td>
            <td className="py-2 px-4 border-b">{book.authorName}</td>
            <td className="py-2 px-4 border-b">{book.category}</td>
            <td className="py-2 px-4 border-b">10$</td>
            <td className="py-2 px-4 border-b">
              <Link className="text-cyan-600 hover:underline dark:text-cyan-500" to={`/admin/dashboard/edit-books/${book._id}`}>Edit</Link>
              <button onClick={() => handleDelete(book._id)} className="text-red-600 px-4 py-1 hover:underline dark:text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>    
  )
}

export default ManageBooks