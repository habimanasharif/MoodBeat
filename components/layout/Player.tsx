import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import Image from 'next/image';
import PlayerController from './PlayerController';

const Player:React.FC<{isMobile:boolean}> = ({ isMobile }) => {
  const { musicList, songNumber } = useAppSelector((state) => state.musicData);
  return (
    <div className="w-full  d-flex justify-center  flex-grow flex  justify-center">
      <div className="w-[60%] player-bg rounded-[2rem] shadow h-full flex items-center flex-col py-6 relative">
        <div className=" px-[1.5rem]  h-[10rem] w-[15rem]">
          <div className="w-[100%] h-[100%] relative rounded-[.7rem]  ">
            <div>
              <Image
                src={musicList[songNumber].cover}
                alt="album Image"
                width={500}
                height={500}
                className=" w-[100%] playlist-img  rounded-[.7rem] absolute pin-l pin-t h-[100%]"
              />
            </div>
          </div>
        </div>
        {!isMobile && (
        <PlayerController
          song={musicList[songNumber].audio}
          title={musicList[songNumber].title}
          songNumber={songNumber}
          nomolizedData={musicList[songNumber].normolizedData}
          duration={musicList[songNumber].duration}
        />
        )}
      </div>

    </div>
  );
};
export default Player;
