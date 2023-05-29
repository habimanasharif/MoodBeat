// @ts-nocheck
import React, { useEffect } from 'react';
import PlayIcon from '../svg/play';
import NextIcon from '../svg/NextIcon';
import PrevIcon from '../svg/PrevIcon';
import RepeatIcon from '../svg/Repeat';
import ShuffleIcon from '../svg/ShuffleIcon';

const PlayerController = () => {
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
      const rawData = audioBuffer.getChannelData(0);
      const samples = 350; // Number of samples we want to have in our final data set
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

    /**
     * A utility function for drawing our line segments
     * @param {AudioContext} ctx the audio context
     * @param {number} x  the x coordinate of the beginning of the line segment
     * @param {number} height the desired height of the line segment
     * @param {number} width the desired width of the line segment
     * @param {boolean} isEven whether or not the segmented is even-numbered
     */
    const drawLineSegment = (ctx:any, x:number, height:number, width:number, isEven:number) => {
      ctx.lineWidth = 1; // how thick the line is
      ctx.strokeStyle = 'white'; // what color our line is
      // ctx.beginPath();
      height = isEven ? height : -height;
      ctx.moveTo(x, -height);
      ctx.lineTo(x, height);
      // ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, isEven);
      // ctx.lineTo(x + width, 0);
      ctx.stroke();
    };
    /**
     * Draws the audio file into a canvas element.
     * @param {Array} normalizedData The filtered array returned from filterData()
     * @returns {Array} a normalized array of data
     */
    const draw = (normalizedData:any) => {
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
            drawLineSegment(ctx, x, height, width, (i + 1) % 2);
          }
    };

    /**
     * Retrieves audio from an external source, the initializes the drawing function
     * @param {String} url the url of the audio we'd like to fetch
     */
    const drawAudio = (url:string) => {
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => draw(normalizeData(filterData(audioBuffer))));
    };
    drawAudio('https://beats-api.onrender.com/song/play/882e74e4118ff2552d633f3c47b5d8f7.mp3');
  }, []);
  return (
    <div>
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
      <div className="absolute pin-player flex bg-[red] rounded-[1rem] px-1 items-center">
        <div className="font-bold">2:00</div>
        <canvas id="canvas" className="w-[90%] h-[3rem] font-thin  " />
        <div className="font-bold">4:00</div>
      </div>
    </div>

  );
};
export default PlayerController;
