import React, { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import WishList from './WishList';
import { FaArrowDown } from 'react-icons/fa';


const ListOfBooks = () => {

    const [sortingType, setSortingType] = useState("")
    
    return (
        <div className='container mx-auto md:mt-10'>

          <div className='flex justify-center md:mb-10'>
            <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn bg-green-400 text-white m-1 rounded-lg text-lg">Sort By <FaArrowDown></FaArrowDown></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortingType("pages")}><a>Pages</a></li>
    <li onClick={()=>setSortingType("rating")}><a>Rating</a></li>
  </ul>
</div>
          </div>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
     <ReadList sortingType={sortingType}></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList sortingType={sortingType}></WishList>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ListOfBooks;