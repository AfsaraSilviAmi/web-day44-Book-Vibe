import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const ListOfBooks = () => {
    const {storeBook} = useContext(BookContext)
    return (
        <div>
            <h1>List of Books</h1>

        </div>
    );
};

export default ListOfBooks;