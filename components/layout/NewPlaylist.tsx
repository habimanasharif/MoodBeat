import React from 'react';
import AddIcon from '../svg/Add';

const NewPlaylist = () => (
  <div className=" w-full px-28 py-14 flex ">
    <h1 className="text-[#fff] text-xl font-[800] ">Create  Playlist</h1>
    <div className="mx-12 add-btn w-12 flex items-center justify-end px-1 rounded-r-lg "><AddIcon /></div>
  </div>
);
export default NewPlaylist;
