import React from 'react';
import Favorite from './Favorite';
import TopArtist from './TopArtist';

const MoreExploreContent = () => (
  <div className="w-full h-full pl-10 py-5 flex flex-col overflow-hidden">
    <TopArtist />
    <Favorite />
  </div>
);

export default MoreExploreContent;
