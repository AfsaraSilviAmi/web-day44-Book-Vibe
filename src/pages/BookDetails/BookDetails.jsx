import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const expectedBook = books.find(book => book.bookId === Number(id))
    return (
        <div>
            <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto md:mt-10 rounded-lg">
  <figure className='flex justify-center items-center bg-base-200'>
    <img
      src={expectedBook.image}
      alt={expectedBook.bookName}
      className='h-100 p-4' />
  </figure>
  <div className="card-body space-y-1">
    <h2 className="card-title text-4xl">{expectedBook.bookName}</h2>
    <p className='text-lg font-semibold'>By: {expectedBook.author}</p>
    <div className='border-t border-gray-400'></div>
    <p className='text-md font-semibold'>{expectedBook.category}</p>
    <div className='border-t border-gray-400'></div>
    <p className='font-bold'>Review: <span className='font-normal text-gray-500'>{expectedBook.review}</span></p>
     <div className='flex gap-4'>
       <span className='font-bold'>Tags:</span>
        {
            expectedBook.tags.map(tag => <div className="badge badge-success badge-outline bg-green-100 font-bold">#{tag}</div>)
        }
    </div>
    <div className='border-t border-gray-400'></div>
    <div className='grid space-y-2'>
       <div className='grid grid-cols-2'>
         <span className='text-gray-500'>Number of pages: </span><span className='font-bold'>{expectedBook.totalPages}</span>
       </div>
       <div className='grid grid-cols-2'>
         <span className='text-gray-500'>Publisher: </span><span className='font-bold'>{expectedBook.publisher}</span>
       </div>
       <div className='grid grid-cols-2'>
         <span className='text-gray-500'>Year of Publishing: </span><span className='font-bold'>{expectedBook.yearOfPublishing}</span>
       </div>
       <div className='grid grid-cols-2'>
         <span className='text-gray-500'>Rating:  </span><span className='font-bold'>{expectedBook.rating}</span>
       </div>
        
    </div>
    <div className="card-actions justify-start">
      <button className="btn">Read</button>
      <button className="btn bg-blue-400 text-white">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;