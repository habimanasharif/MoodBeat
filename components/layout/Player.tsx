import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';
import PlayerController from './PlayerController';

const Player = () => (
  <div className="w-full  d-flex justify-center  flex-grow flex  justify-center">
    <div className="w-[60%] player-bg rounded-[2rem] shadow h-full flex items-center flex-col py-6 relative">
      <div className=" px-[1.5rem]  h-[10rem] w-[15rem]">
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
      <PlayerController />
    </div>
  </div>
);

export default Player;
