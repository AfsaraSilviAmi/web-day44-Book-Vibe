import React from 'react';
import { CiStar } from 'react-icons/ci';

const BookCard = ({book}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-5 bg-base-200'>
    <img className='h-75 rounded-lg'
      src={book.image}
      alt={book.bookName} />
  </figure>
  <div className="card-body">
    <div className='flex gap-4'>
        {
            book.tags.map(tag => <div className="badge badge-success badge-outline bg-green-100 font-bold">{tag}</div>)
        }
    </div>
    <h2 className="card-title text-2xl">
      {book.bookName}
      
    </h2>
    <p className='text-lg'>By: {book.author}</p>
    <div className='border-t border-dashed border-gray-400 my-4'></div>
    <div className="card-actions justify-between text-[17px]">
      <div>{book.category}</div>
      <div className="flex items-center gap-1">{book.rating}<CiStar></CiStar></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookCard;