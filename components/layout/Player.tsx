import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';

const Player = () => (
  <div className="w-full  d-flex justify-center  flex-grow flex  justify-center">
    <div className="w-[60%] player-bg rounded-[2rem] shadow h-full">
      <div className="w-1/6 px-[1.5rem] h-[2rem]">
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
    </div>
  </div>
);

export default Player;
