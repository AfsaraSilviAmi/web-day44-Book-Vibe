import React, { useContext } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { BookContext } from '../Context/BookProvider';

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}
const PagesToRead = () => {
      const {wishList} = useContext(BookContext)
      if(wishList.length===0){
        return(
            <div className='flex justify-center items-center h-[50vh]'>
                <div className='text-center font-bold text-4xl'>Add Books to WishList to See the Graph</div>
            </div>
        )
      }

      const data = wishList.map(book =>({
        name:book.bookName,
        pages:book.totalPages

      }))
      const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"]
      
    return (
        <div style={{width:"100%", height:"400px"}}>
            <ResponsiveContainer>
             <BarChart data={data}>
      <XAxis dataKey="name" interval={0}  tickFormatter={(value) => value.slice(0, 17) + "..."}/>
      <YAxis />
      <Tooltip></Tooltip>
      <Bar dataKey="pages" shape={<TriangleBar />}>
  {data.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={colors[index % colors.length]}
    />
  ))}
</Bar>
      
    </BarChart>
    </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;