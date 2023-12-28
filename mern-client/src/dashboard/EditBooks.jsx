import React , { useState } from 'react'
import { useLoaderData, useParams} from 'react-router-dom';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { HiLink } from 'react-icons/hi';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData()
  const bookCategories = [
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Historical Fiction",
    "Non-fiction",
    "Biography",
    "Self-help",
    "Adventure",
    "Horror",
    "Poetry",
    "Children's",
    "Young Adult",
    "Dystopian",
    "Science",
    "Humor",
    "Graphic Novel",
    "Classics",
    "Crime",
    "Satire",
    "Fairy Tale",
    "Western",
    "Historical",
    "Political",
    "Educational",
    "Cookbook",
    "Travel",
    "Reference",
    "Religion",
    "Philosophy",
    "Autobiography",
    "Memoir",
    "Journal",
    "Essay",
    "Short Story",
    "Anthology",
    "Drama",
    "Action and Adventure",
    "Sociology",
    "Psychology",
    "Business",
    "Economics",
    "Finance",
  ];

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategories(event.target.value);
  }

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObject = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl
    }

    fetch(`https://book-inventory-2kcm.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Updated Successfully");
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Upload A Book
      </h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/*First Row*/}

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle}/>
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName}/>
          </div>
        </div>

        {/*Secomd Row*/}

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image UR" />
            </div>
            <TextInput id="imageUrl" name="imageUrl" type="text" placeholder="Book Image URL" required defaultValue={imageUrl} />
          </div>

          {/*category*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/*Third Row*/}

        <div >
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description" className='w-full' required rows={6} defaultValue={bookDescription}/>
        </div>

        {/*Fourth Row*/}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfUrl" type="text" name='bookPdfUrl' icon={HiLink} rightIcon={HiLink} placeholder="book pdf url" required defaultValue={bookPdfUrl}/>
        </div>

        <Button type='submit' className='mt-5 bg-blue-700 hover:bg-black transition-all duration-300 '>
          Upload Book
        </Button>
      </form>
    </div>
  )
}

export default EditBooks