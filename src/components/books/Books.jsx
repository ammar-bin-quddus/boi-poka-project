import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])
  

  return (
    <div className=''>
        <h1 className='text-4xl text-center font-bold'>Books</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            books.map((book) => <BookCard key={book.bookId} book={book} />)
          }
        </div>
    </div>
  )
}

export default Books