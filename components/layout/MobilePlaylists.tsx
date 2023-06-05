import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import FavouriteCard from './FavouriteCard';

const MobilePlaylists = () => {
  const { page } = useAppSelector((state) => state.uiData);
  return (
    <>
      { page === 'playlists' && (
      <div className="h-screen w-full px-4 py-2 overflow-hidden">
        <h1 className="text-white text-2xl font-bold">All Playlist </h1>
        <div className="flex flex-shrink-0 flex-wrap overflow-y-auto h-full gap-x-[2.5rem]">
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <FavouriteCard />
          <div className="h-[7rem] w-full" />
        </div>
      </div>
      )}
    </>

  );
};

export default MobilePlaylists;
