import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';

const FavouriteCard = () => (
  <div className="h-[11rem] w-[12rem] mt-7 pr-12">
    <div className=" w-[100%] h-[80%] mr-3">
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
    <div className="favourite-info">
      <div className="font-bold">Family Tourism</div>
      <div className="font-thin text-xs">The more, the merrier, Suitable for children</div>
    </div>
  </div>
);

export default FavouriteCard;
