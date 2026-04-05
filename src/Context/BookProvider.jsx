import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();
const BookProvider = ({children}) => {
    const [storeBook, setStoreBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) =>{
      const isExistBook = storeBook.find(book => book.bookId === currentBook.bookId)

      if(isExistBook){
        toast.error(`${currentBook.bookName} already Exist in Read List`);
        return;
      }else{
        setStoreBook([...storeBook, currentBook]);
        toast.success(`${currentBook.bookName} is Added to Read list`)
      }
    }

    const handleWishList = (currentBook) =>{
        const isExistInReadList = storeBook.find(book => book.bookId === currentBook.bookId)

        if(isExistInReadList){
            toast.error(`${currentBook.bookName} already Exist in Read List`);
            return;
        }
      const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)

      if(isExistBook){
        toast.error(`${currentBook.bookName} already Exist in Wish List`)
        return;
      }else{
        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} is Added to Wish list`)
      }
    }
    const data = {
        storeBook, 
        handleMarkAsRead, 
        setStoreBook,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;