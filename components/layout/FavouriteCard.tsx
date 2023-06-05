import React from 'react';
import Image from 'next/image';
import two from '../../public/two.jpg';

const FavouriteCard = () => (
  <div className="h-[11rem] sm:w-[12rem] w-[10.6rem] mt-7 sm:pr-6 ">
    <div className=" w-[100%] h-[80%] sm:mr-3 mr-1 relative">
      <div className="w-[100%]  h-full">
        <div className="w-[100%] h-[100%] rounded-[.7rem]  ">
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
    <div className="favourite-info text-white sm:text-dark">
      <div className="font-bold">Million</div>
      <div className="font-thin text-xs">Always neve</div>
    </div>
  </div>
);

export default FavouriteCard;
