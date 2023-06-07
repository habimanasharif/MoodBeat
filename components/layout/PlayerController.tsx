/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable brace-style */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import PlayIcon from '../svg/play';
import NextIcon from '../svg/NextIcon';
import PrevIcon from '../svg/PrevIcon';
import RepeatIcon from '../svg/Repeat';
import ShuffleIcon from '../svg/ShuffleIcon';
import PauseIcon from '../svg/Pause';

interface props{
  title: string;
  song:string
}

const PlayerController:React.FC<props> = ({ title, song }) => {
  const [nomolizedData, setNomolizedData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
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
    // Set up audio context
    const audioContext = new AudioContext();
    /**
       * Filters the AudioBuffer retrieved from an external source
       * @param {AudioBuffer} audioBuffer the AudioBuffer from drawAudio()
       * @returns {Array} an array of floating point numbers
       */
    const filterData = (audioBuffer:any) => {
      // We only need to work with one channel of data
      setDuration(audioBuffer.duration);
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
      const rawData = audioBuffer.getChannelData(0);
      const samples = 70; // Number of samples we want to have in our final data set
      // the number of samples in each subdivision
      const blockSize = Math.floor(rawData.length / samples);
      const filteredData = [];
      for (let i = 0; i < samples; i++) {
        const blockStart = blockSize * i; // the location of the first sample in the block
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
        }
        filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
      }
      return filteredData;
    };

    /**
       * Normalizes the audio data to make a cleaner illustration
       * @param {Array} filteredData the data from filterData()
       * @returns {Array} an normalized array of floating point numbers
       */
    const normalizeData = (filteredData:any) => {
      const multiplier = Math.max(...filteredData) ** -1;
      return filteredData.map((n:number) => n * multiplier);
    };

    const getFrequency = (url:string) => {
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => setNomolizedData(normalizeData(filterData(audioBuffer))));
    };
    getFrequency(song);
  }, [endTime, duration]);

  useEffect(() => {
    const audio = document.getElementById('song');
    const updateProgress = (e:any) => {
      const { currentTime } = e.srcElement;
      if (duration === currentTime) {
        audio.currentTime = 0;
        console.log('hello');
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
    audio.addEventListener('timeupdate', updateProgress);
  }, [progress, duration]);

  const playsong = (e:any) => {
    e.preventDefault();
    const audio = document.getElementById('song');
    setPlaying(true);
    audio.play();
  };
  const pausesong = (e:any) => {
    e.preventDefault();
    const audio = document.getElementById('song');
    setPlaying(false);
    audio.pause();
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
      <div className="details text-center">
        <h3 className="text-[#fff] mt-1 font-bold text-lg">{title}</h3>
        <p className="text-[#fff] font-thin"> Muse</p>
      </div>

      <div className="player-controllers mt-2 flex items-center">
        <div>
          <RepeatIcon />
        </div>
        <div className="mr-2 ml-8">
          <PrevIcon />
        </div>
        {!playing && (<div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]" onClick={playsong}><PlayIcon size="15" /></div>)}
        {playing && (
        <div className="bg-[#fff] h-10 w-10 flex shadow items-center justify-center rounded-[50%]" onClick={pausesong}>
          <PauseIcon />
        </div>
        )}
        <div className="ml-2 mr-8">
          <NextIcon />
        </div>
        <div>
          <ShuffleIcon />
        </div>
      </div>
      <div className="sm:h-[0re] h-[1rem]" />
      <div className="absolute pin-player flex player-conroller-bg rounded-[1rem] px-1 items-center">
        <div className="font-bold text-white text-xs">{curTime}</div>
        <canvas id="canvas" className="w-[90%] h-[3rem] font-thin ml-1 mr-1  " onMouseDown={getPosition} />
        <div className="font-bold text-white text-xs">{endTime}</div>
      </div>
      <audio id="song">
        <source src={song} type="audio/mpeg" />
      </audio>
    </div>

  );
};
export default PlayerController;
