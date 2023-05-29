import React from 'react';
import FavouriteCard from './FavouriteCard';

const Favorite = () => (
  <div className="py-3">
    <h1>
      Recent Favourite
    </h1>
    <div className="flex w-full overflow-x-hidden flex-grow overflow-y-auto ">
      <div className=" flex flex-wrap w-full ">
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
