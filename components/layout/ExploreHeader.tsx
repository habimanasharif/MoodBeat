import React from 'react';
import NotificationIcon from '../svg/Notification';
import SearchIcon from '../svg/Search';

const ExploreHeader = () => (
  <div className=" flex justify-between">
    <h1 className="text-3xl font-black"> Home</h1>
    <div className="flex items-center">
      <div className="mr-3"><NotificationIcon /></div>
      <div className="shadow flex border rounded  items-center px-2">
        <div className=" "><SearchIcon /></div>
        <input className=" appearance-none   py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
      </div>
    </div>
  </div>
);
export default ExploreHeader;
