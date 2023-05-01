import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';
import Folower from '../svg/folower';
import SmallPlay from '../svg/smallPlay';

const ArtistCard = () => (
  <div className="h-[3rem] flex mt-2">
    <div className=" w-[3rem] h-full mr-3">
      <div className="w-[100%]  h-full">
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
    <div className="flex-grow">
      <h1 className=" font-bold">Muse</h1>
      <div className="detail w-full relative items-center">
        <div className="font-thin text-xs">
          <span className="inline-flex mr-3">
            <Folower />
            123456 Followers
          </span>
          <span className="inline-flex">
            <SmallPlay />
            12345 Plays
          </span>
        </div>
        <div className="absolute flex justify-center elipse pin-r pin-b">
          <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
          <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
          <div className=" h-[.3rem] w-[.3rem] rounded-full bg-black" />
        </div>
      </div>
    </div>
  </div>
);

export default ArtistCard;
