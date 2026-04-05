import React, { use } from 'react';
import BookCard from './BookCard';

const bookPromise = fetch("/booksData.json").then((res)=>res.json())

const AllBooks = () => {
   const books = use(bookPromise);
    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold md:mt-10 text-3xl'>Books</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-4 md:mt-10'>
                {
                  books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;