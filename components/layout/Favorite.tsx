import React from 'react';
import FavouriteCard from './FavouriteCard';

const Favorite = () => (
  <div className="py-3  h-[60%]">
    <h1>
      Recent Favourite
    </h1>
    <div className=" w-full h-full  overflow-y-auto mt-3 ">
      <div className=" flex flex-wrap w-full ">
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
        <FavouriteCard />
      </div>
    </div>
  </div>
);

export default Favorite;
