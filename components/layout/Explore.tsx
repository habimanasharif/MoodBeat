import React from 'react';
import Banner from './Banner';
import ExploreHeader from './ExploreHeader';
import Songs from './Songs';

const Explore = () => (
  <div className="absolute pin-x w-[60%] px-2 py-2  h-full overflow-hidden">
    <div className="w-[100%] h-full bg-[#fff] py-8 px-12 rounded-[2rem] flex  flex-col relative ">
      <ExploreHeader />
      <Banner />
      <div className=" mt-[2rem] flex justify-between mb-4">
        <h1 className="font-bold">Trending right now</h1>
        <h3 className="underline text-[#2779bd] font-light">see all</h3>
      </div>
      <Songs />

    </div>
  </div>
);
export default Explore;
