import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';

const SongCard = () => (
  <div className="flex mb-4 h-[3rem] w-[100%] items-center">
    <div className="w-1/7">01</div>
    <div className="w-1/6 px-[1.5rem] h-full">
      <div className="w-[100%] h-[100%] relative rounded-[1rem]  ">
        <div>
          <Image
            src={two}
            alt="album Image"
            width={500}
            height={500}
            className=" w-[100%] playlist-img  rounded-[1rem] absolute pin-l pin-t h-[100%]"
          />
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <h1 className="font-bold">The dark side</h1>
      <h6 className="font-thin text-xs">David Gueta & Bebe Raxha</h6>
    </div>
    <div className="w-1/6 text-xs font-bold">03:14</div>
    <div className="w-1/6 font-thin text-xs">80234</div>
    <div className="w-1/6">01</div>
    <div className="w-1/7">01</div>

  </div>
);

export default SongCard;
