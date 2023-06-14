/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/Redux/hooks';
import { setSongNumber } from '@/Redux/data/musicData';
import Image from 'next/image';
import HeartIcon from '../svg/Heart';

interface props{
  isMobile:boolean,
  artist:string,
  title:string,
  cover:string,
  num:number,
  duration:number

}

const SongCard:React.FC<props> = ({
  isMobile, artist, cover, num, duration, title
}) => {
  const dispatch = useAppDispatch();
  const [endTime, setEndTime] = useState('00:00');
  useEffect(() => {
    let sec = 0;
    if (Math.floor(duration) >= 60) {
      for (let i = 1; i <= 60; i++) {
        if (Math.floor(duration) >= (60 * i) && Math.floor(duration) < (60 * (i + 1))) {
          sec = Math.floor(duration) - (60 * i);
        }
      }
    } else {
      sec = Number.isNaN(duration) === true ? 0 : Math.floor(duration);
    }
    const min = Number.isNaN(duration) === true ? 0 : Math.floor(duration / 60);
    setEndTime(`${min}:${sec < 10 ? `0${sec}` : sec}`);
  }, [duration]);
  const playSong = (e:any) => {
    e.preventDefault();
    dispatch(setSongNumber(num));
  };
  return (
    <div className="flex mb-4 h-[2.7rem] w-[100%] items-center" onClick={playSong}>
      <div className="w-1/7 text-sm text-[#c4c4c4]">{num + 1}</div>
      <div className="sm:w-1/5 w-1/4 max-[380px]:w-1/3 px-[1.5rem] h-full">
        <div className="w-[100%] h-[100%] relative rounded-[.7rem] max-[380px]:rounded-[.5rem]  ">
          <div>
            <Image
              src={cover}
              alt="album Image"
              width={500}
              height={500}
              className=" w-[100%] playlist-img  rounded-[.7rem] max-[380px]:rounded-[.5rem] absolute pin-l pin-t h-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 text-white sm:text-black">
        <h1 className="font-bold">{title}</h1>
        <h6 className="font-thin text-xs">{artist}</h6>
      </div>
      <div className="w-1/6 text-xs sm:block hidden font-bold">{endTime}</div>
      <div className="w-1/6 font-thin sm:block hidden text-xs">80234</div>
      <div className="w-1/6 max-[380px]:w-1/8"><HeartIcon color={isMobile ? '#fff' : '#000'} /></div>
      <div className="w-1/7 max-[380px]:w-1/8 flex justify-center elipse">
        <div className=" h-[.3rem] w-[.3rem] rounded-full bg-white sm:bg-black" />
        <div className=" h-[.3rem] w-[.3rem] rounded-full bg-white sm:bg-black" />
        <div className=" h-[.3rem] w-[.3rem] rounded-full bg-white sm:bg-black" />
      </div>

    </div>
  );
};

export default SongCard;
