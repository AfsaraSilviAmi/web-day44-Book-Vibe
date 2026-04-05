import React from 'react';
import HeroImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] container mx-auto mt-5">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full md:px-20">
    <img
      src={HeroImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-8'>
      <h1 className="text-5xl font-semibold">Books to freshen up <br />your bookself</h1>
      
      <button className="btn bg-green-400 text-white text-lg">View the list</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;