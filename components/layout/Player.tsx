import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';
import PlayerController from './PlayerController';

const Player:React.FC<{isMobile:boolean}> = ({ isMobile }) => (
  <div className="w-full  d-flex justify-center sm:flex-grow flex   mt-3 sm:mt-[0rem] justify-center">
    <div className="sm:w-[60%] w-[80%] player-bg rounded-[2rem] shadow h-full flex items-center flex-col py-6 relative">
      <div className=" px-[1.5rem]  sm:h-[10rem] h-[12rem] sm:w-[15rem] w-[18rem] ">
        <div className="w-[100%] h-[100%] relative rounded-[.7rem]  ">
          <div>
            <Image
              src={two}
              alt="album Image"
              width={500}
              height={500}
              className=" w-[100%] playlist-img  rounded-[.7rem] absolute pin-l pin-t h-[100%]"
            />
          </div>
        </div>
      </div>
      {!isMobile && (<PlayerController />)}
    </div>
  </div>
);

export default Player;
