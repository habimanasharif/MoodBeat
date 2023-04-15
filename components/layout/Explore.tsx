import React from 'react';
import Banner from './Banner';
import ExploreHeader from './ExploreHeader';
import Songs from './Songs';

const Explore = () => (
  <div className="absolute pin-x w-[60%] px-2 py-2  h-[100%]">
    <div className="w-[100%] h-[100%] bg-[#fff] py-8 px-12 rounded-[2rem] ">
      <ExploreHeader />
      <Banner />
      <Songs />
    </div>
  </div>
);
export default Explore;
