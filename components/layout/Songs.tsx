import React from 'react';
import SongCard from './SongCard';

const Songs:React.FC<{isMobile:boolean}> = ({ isMobile }) => (
  <div className=" flex-grow overflow-x-hidden ">
    <div className=" w-full flex-shrink-0 overflow-y-auto">
      <SongCard isMobile={isMobile} />
      <SongCard isMobile={isMobile} />
      <SongCard isMobile={isMobile} />
      <SongCard isMobile={isMobile} />

    </div>
  </div>
);

export default Songs;
