import React from 'react';
import Image from 'next/image';
import NoteIcon from '../svg/Note';
import PlayIcon from '../svg/play';

interface props{
image:any ;
title:string;
description:string
}

const PlaylistItem:React.FC<props> = ({ image, title, description }) => (
  <div>
    <div className=" relative w-[15rem] h-[15rem] rounded-[1.7rem] shadow-lg ml-2 ">
      <div className="w-[100%] h-[100%] relative rounded-[1.7rem]  ">
        <div>
          <Image
            src={image}
            alt="album Image"
            width={500}
            height={500}
            className=" w-[100%] playlist-img  rounded-[1.7rem] absolute pin-l pin-t h-[100%]"
          />
        </div>
      </div>
      <div className="w-[100%] h-[100%] rounded-[2rem]  absolute pin-t  flex justify-center">
        <div className="content w-[90%]  transparent-blue h-14 px-2 py-2 rounded-[1rem] absolute flex items-center justify-between pin-b-playlist">
          <div className="text-white">
            <h1 className="font-bold text-sm">{title}</h1>
            <h5 className="font-light text-xs flex">
              <NoteIcon size="10" />
              <span className="mx-1">
                {description}

              </span>
            </h5>
          </div>
          <div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]"><PlayIcon size="15" /></div>
        </div>
      </div>
    </div>
  </div>
);
export default PlaylistItem;
