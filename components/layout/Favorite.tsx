import React from 'react';
import FavouriteCard from './FavouriteCard';

const Favorite = () => (
  <div className="py-3">
    <h1>
      Recent Favourite
    </h1>
    <div className="flex w-full overflow-x-hidden">
      <div className=" flex flex-wrap w-full flex-shrink-0 overflow-y-auto">
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
