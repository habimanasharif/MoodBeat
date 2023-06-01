import React from 'react';
import AddIcon from '../svg/Add';

const NewPlaylist = () => (
  <div className=" w-full px-6 pt-14 pb-8 sm:flex hidden ">
    <h1 className="text-[#fff] text-xl font-[800] ">Submit Your Playlist</h1>
    <div className="mx-36 add-btn w-16 flex items-center justify-end px-1 rounded-r-lg "><AddIcon /></div>
  </div>
);
export default NewPlaylist;
