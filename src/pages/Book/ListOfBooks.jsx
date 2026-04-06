import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';


const ListOfBooks = () => {
    const {storeBook, wishList} = useContext(BookContext)
    return (
        <div className='container mx-auto md:mt-10'>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
     <ReadList></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList></WishList>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListOfBooks;