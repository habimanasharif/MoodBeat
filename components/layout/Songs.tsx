import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import SongCard from './SongCard';

const Songs:React.FC<{isMobile:boolean}> = ({ isMobile }) => {
  const { musicList } = useAppSelector((state) => state.musicData);
  return (
    <div className=" h-[55%] overflow-x-hidden px-3 ">
      <div className=" w-full flex-shrink-0 h-full overflow-y-auto">
        {musicList.map((data, id) => (
          <SongCard
            cover={data.cover}
            duration={data.duration}
            title={data.title}
            artist={data.artist}
            num={id}
            isMobile={isMobile}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Songs;
