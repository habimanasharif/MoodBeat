import React from 'react';
import ArtistCard from './ArtistCard';

const TopArtist = () => (
  <div className="h-[50%] overflow-hidden">
    <h1>Top Artists</h1>
    <div className=" h-full overflow-y-auto">
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <div className="h-[2rem]" />
    </div>
  </div>
);

export default TopArtist;
