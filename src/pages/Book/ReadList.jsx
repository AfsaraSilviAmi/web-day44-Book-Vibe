import React, { useContext } from 'react';
import BookCard from '../Homepage/BookCard';
import { BookContext } from '../../Context/BookProvider';

const ReadList = () => {
      const {storeBook} = useContext(BookContext)
      if(storeBook.length === 0){
        return(
         <div className='flex justify-center items-center h-[50vh]'>
            <h1 className='text-center font-bold text-xl'>No Books Added to Read List</h1>
         </div>
        )
      }
        
    return (
        
        <div className='grid md:grid-cols-3'>
            {
                storeBook.map(book => <BookCard book ={book}></BookCard>)
            }
        </div>
    );
};

export default ReadList;