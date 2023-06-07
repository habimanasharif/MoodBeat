import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import Banner from './Banner';
import ExploreHeader from './ExploreHeader';
import Songs from './Songs';
import MoreExploreContent from './MoreExploreContent';

const Explore:React.FC<{isMobile:boolean}> = ({ isMobile }) => {
  const { panelSize } = useAppSelector((state) => state.exploreData);
  return (
    <div className={`absolute pin-x  ${panelSize > 60 ? 'w-[100%]' : 'w-[60%]'} px-2 py-2 transtion  h-full overflow-hidden`}>
      <div className="w-[100%] h-full bg-[#fff] py-8 px-12 rounded-[2rem] overflow-hidden ">
        <ExploreHeader />
        <div className="flex h-[100%]">
          <div className=" flex  flex-col flex-grow ">
            <Banner />
            <div className=" mt-[2rem] flex justify-between mb-4">
              <h1 className="font-bold">Trending right now</h1>
              <h3 className="underline text-[#2779bd] font-light">see all</h3>
            </div>
            <Songs isMobile={isMobile} />
          </div>
          <div className={` ${panelSize > 60 ? 'w-[40%]' : 'w-[0%]'} transition py-3`}>
            {panelSize > 60 ? <MoreExploreContent /> : ''}

          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
