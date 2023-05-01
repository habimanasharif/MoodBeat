import React from 'react';
import ArtistCard from './ArtistCard';

const TopArtist = () => (
  <div className="h-[25%]">
    <h1>Top Artists</h1>
    <div>
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
    </div>
  </div>
);

export default TopArtist;
