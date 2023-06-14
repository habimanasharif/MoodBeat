/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable brace-style */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/Redux/hooks';
import { setSongNumber } from '@/Redux/data/musicData';
import PlayIcon from '../svg/play';
import NextIcon from '../svg/NextIcon';
import PrevIcon from '../svg/PrevIcon';
import RepeatIcon from '../svg/Repeat';
import ShuffleIcon from '../svg/ShuffleIcon';
import PauseIcon from '../svg/Pause';

interface props{
  title: string;
  song:string;
  songNumber:number;
  nomolizedData:number[];
  duration:number;
  artist:string;
}

const MobilePlayerController:React.FC<props> = ({
  title, song, songNumber, nomolizedData, duration, artist
}) => {
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [endTime, setEndTime] = useState('00:00');
  const [curTime, setCurTime] = useState('00:00');

  useEffect(() => {
    /**
     * A utility function for drawing our line segments
     * @param {AudioContext} ctx the audio context
     * @param {number} x  the x coordinate of the beginning of the line segment
     * @param {number} height the desired height of the line segment
     * @param {number} width the desired width of the line segment
     * @param {boolean} isEven whether or not the segmented is even-numbered
     */
    const drawLineSegment = (
      ctx:any,
      x:number,
      height:number,
      width:number,
      isEven:number,
      i:number,
      location:number
    ) => {
      if (i < location) {
        ctx.strokeStyle = 'red';
      } else {
        ctx.strokeStyle = 'white';
      }
      if (height > 3) {
        height = isEven ? height : -height; }
      else {
        height = isEven ? height + 7 : -height + 7;
      }

      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, -height);
      ctx.lineTo(x, height);
      ctx.stroke();
    };
    /**
     * Draws the audio file into a canvas element.
     * @param {Array} normalizedData The filtered array returned from filterData()
     * @returns {Array} a normalized array of data
     */
    const draw = (normalizedData:any, location:number) => {
      // set up the canvas
      const canvas = document.querySelector('canvas');
      const dpr = window.devicePixelRatio || 1;
      const padding = 20;
          canvas!.width = canvas!.offsetWidth * dpr;
          canvas!.height = (canvas!.offsetHeight + padding * 2) * dpr;
          const ctx = canvas!.getContext('2d');
          ctx!.scale(dpr, dpr);
          // set Y = 0 to be in the middle of the canvas
          ctx!.translate(0, canvas!.offsetHeight / 2 + padding);

          // draw the line segments
          const width = canvas!.offsetWidth / normalizedData.length;
          for (let i = 0; i < normalizedData.length; i++) {
            const x = width * i;
            let height = normalizedData[i] * canvas!.offsetHeight - padding;
            if (height < 0) {
              height = 0;
            } else if (height > canvas!.offsetHeight / 2) {
              height = height > canvas!.offsetHeight / 2;
            }
            drawLineSegment(ctx, x, height, width, (i + 1) % 2, i, location);
          }
    };
    /**
     * Retrieves audio from an external source, the initializes the drawing function
     * @param {array} data nomolized data
     */
    const drawAudio = (data:any) => {
      draw(data, progress);
    };
    drawAudio(nomolizedData);
  }, [nomolizedData, progress]);

  useEffect(() => {
    let sec;
    if (Math.floor(duration) >= 60) {
      for (let i = 1; i <= 60; i++) {
        if (Math.floor(duration) >= (60 * i) && Math.floor(duration) < (60 * (i + 1))) {
          sec = Math.floor(duration) - (60 * i);
        }
      }
    } else {
      sec = isNaN(duration) === true ? 0 : Math.floor(duration);
    }
    const min = isNaN(duration) === true ? 0 : Math.floor(duration / 60);
    setEndTime(`${min}:${sec < 10 ? `0${sec}` : sec}`);
  }, [duration]);

  useEffect(() => {
    const audio = document.getElementById('song');
    const updateProgress = (e:any) => {
      const { currentTime } = e.srcElement;
      if (duration === currentTime) {
        audio.currentTime = 0;
      }
      let curSec;
      if (Math.floor(currentTime) >= 60) {
        for (let x = 1; x <= 60; x++) {
          if (Math.floor(currentTime) >= (60 * x) && Math.floor(currentTime) < (60 * (x + 1))) {
            curSec = Math.floor(currentTime) - (60 * x);
          }
        }
      } else {
        curSec = Math.floor(currentTime);
      }
      const curMin = Math.floor(currentTime / 60);
      setCurTime(`${curMin}:${curSec < 10 ? `0${curSec}` : curSec}`);

      setProgress(Math.floor((currentTime / duration) * 70) + 1);
    };
    const onSongEnd = () => {
      dispatch(setSongNumber(songNumber + 1));
    };
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', onSongEnd);
    if (playing) {
      audio.play().catch(() => {
        /* error handler */
      });
    }
  }, [progress, duration, songNumber, song, dispatch, playing]);

  const playsong = (e:any) => {
    e.preventDefault();
    const audio = document.getElementById('song');
    audio.play();
  };
  const pausesong = (e:any) => {
    e.preventDefault();
    const audio = document.getElementById('song');
    setPlaying(false);
    audio.pause();
  };

  const nextSong = () => {
    dispatch(setSongNumber(songNumber + 1));
  };
  const prevSong = () => {
    dispatch(setSongNumber(songNumber - 1));
  };

  const getPosition = (e:any) => {
    e.preventDefault();
    const canvas = document.querySelector('canvas');
    const audio = document.getElementById('song');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    audio.currentTime = (x / (rect.right - rect.left)) * duration;
  };

  return (
    <div>
      <div className="details text-center mt-3">
        <h3 className="text-[#fff] mt-1 font-bold text-3xl max-[380px]:text-xl">{title}</h3>
        <p className="text-[#fff] font-thin text-2xl max-[380px]:text-lg">
          {artist}
        </p>
      </div>

      <div className="player-controllers mt-4 max-[380px]:mt-1 flex justify-center items-center">
        <div>
          <RepeatIcon />
        </div>
        <div className="mr-2 ml-8" onClick={prevSong}>
          <PrevIcon />
        </div>
        {!playing && (<div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]" onClick={playsong}><PlayIcon size="15" /></div>)}
        {playing && (
        <div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]" onClick={pausesong}>
          <PauseIcon />
        </div>
        )}
        <div className="ml-2 mr-8" onClick={nextSong}>
          <NextIcon />
        </div>
        <div>
          <ShuffleIcon />
        </div>
      </div>
      <div className="sm:h-[0re] h-[2rem] max-[380px]:h-[.3rem]" />
      <div className=" flex  rounded-[1rem] px-1 items-center mx-5">
        <div className="font-bold text-white text-lg max-[320px]:text-sm ">{curTime}</div>
        <canvas id="canvas" className="w-[90%] h-[3rem] font-thin ml-3 mr-2  " onMouseDown={getPosition} />
        <div className="font-bold text-white text-lg max-[320px]:text-sm ">{endTime}</div>
      </div>
      <audio id="song">
        <source src={song} type="audio/mpeg" />
      </audio>
      <div className=" flex justify-center">
        <div className="w-[80%] max-[320px]:h-[6rem] h-[9rem] overflow-y-auto ">
          <h1 className="text-white">
            The mandem too inconsiderate, five-star hotel, smokin&rsquo; cigarette
            Mixin&rsquo; codeine up with the phenergan
            She got thick, but she wanna get thin again
            Drinkin&rsquo; apple cider vinegar
            Wearin&rsquo; Skim &rsquo;cause she wanna be Kim and &rsquo;em
            Uh, alright, I know that you&rsquo;re bad, stop actin&rsquo; innocent
            We ain&rsquo;t got generational wealth
            It&rsquo;s only a year that I&rsquo;ve had these millions
            My whip could&rsquo;ve been in the Tokyo Drift &rsquo;cause it&rsquo;s fast and furious
            I went from the Toyota Yaris to Urus, they had their chance but blew it
            Now this gyal wan&rsquo; me in her uterus, fuck it,
            I&rsquo;m rich, let&rsquo;s do it (Fuck it)

          </h1>
        </div>
      </div>
    </div>
  ); };

export default MobilePlayerController;
