import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Homepage/BookCard';

const WishList = ({sortingType}) => {
     const {wishList} = useContext(BookContext)

      let filteredWishList = wishList;

     if(sortingType === "pages"){
        filteredWishList = [...wishList].sort((a,b)=> a.totalPages - b.totalPages)
     }
     else if(sortingType === "rating"){
        filteredWishList = [...wishList].sort((a,b)=>a.rating - b.rating)
     }

      if(filteredWishList.length === 0){
        return(
         <div className='flex justify-center items-center h-[50vh]'>
            <h1 className='text-center font-bold text-xl'>No Books Added to Wish List</h1>
         </div>
        )
      }
    return (
        <div className='grid md:grid-cols-3'>
            {
                filteredWishList.map(book => <BookCard book ={book}></BookCard>)
            }
        </div>
    );
};

export default WishList;