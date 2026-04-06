import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Homepage/BookCard';

const WishList = () => {
     const {wishList} = useContext(BookContext)
      if(wishList.length === 0){
        return(
         <div className='flex justify-center items-center h-[50vh]'>
            <h1 className='text-center font-bold text-xl'>No Books Added to Wish List</h1>
         </div>
        )
      }
    return (
        <div>
            {
                wishList.map(book => <BookCard book ={book}></BookCard>)
            }
        </div>
    );
};

export default WishList;