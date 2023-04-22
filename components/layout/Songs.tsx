import React from 'react';
import SongCard from './SongCard';

const Songs = () => (
  <div className="mt-[2rem] flex-grow">
    <div className="flex justify-between mb-4">
      <h1 className="font-bold">Trending right now</h1>
      <h3 className="underline text-[#2779bd] font-light">see all</h3>
    </div>
    <div className="  h-full overflow-y-scroll">
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  </div>
);

export default Songs;
