import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';
import HeartIcon from '../svg/Heart';

const SongCard = () => (
  <div className="flex mb-4 h-[2.7rem] w-[100%] items-center">
    <div className="w-1/7 text-sm text-[#c4c4c4]">01</div>
    <div className="w-1/6 px-[1.5rem] h-full">
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
    <div className="w-1/2">
      <h1 className="font-bold">The dark side</h1>
      <h6 className="font-thin text-xs">David Gueta & Bebe Raxha</h6>
    </div>
    <div className="w-1/6 text-xs font-bold">03:14</div>
    <div className="w-1/6 font-thin text-xs">80234</div>
    <div className="w-1/6"><HeartIcon /></div>
    <div className="w-1/7 flex justify-center elipse">
      <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
      <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
      <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
    </div>

  </div>
);

export default SongCard;
