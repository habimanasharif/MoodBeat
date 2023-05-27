import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';
import PlayIcon from '../svg/play';
import NextIcon from '../svg/NextIcon';
import PrevIcon from '../svg/PrevIcon';
import RepeatIcon from '../svg/Repeat';
import ShuffleIcon from '../svg/ShuffleIcon';

const Player = () => (
  <div className="w-full  d-flex justify-center  flex-grow flex  justify-center">
    <div className="w-[60%] player-bg rounded-[2rem] shadow h-full flex items-center flex-col py-6">
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
      <div className="details text-center">
        <h3 className="text-[#fff] mt-1 font-bold text-lg">Resistance</h3>
        <p className="text-[#fff] font-thin"> Muse</p>
      </div>

      <div className="player-controllers mt-2 flex items-center">
        <div>
          <RepeatIcon />
        </div>
        <div className="mr-2 ml-8">
          <PrevIcon />
        </div>
        <div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]"><PlayIcon size="15" /></div>
        <div className="ml-2 mr-8">
          <NextIcon />
        </div>
        <div>
          <ShuffleIcon />
        </div>
      </div>

    </div>
  </div>
);

export default Player;
