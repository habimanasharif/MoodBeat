import React from 'react';
import one from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import BannerImage from './BannerImage';

const Banner = () => {
//   const [count, setCount] = useState(0);
  const playlists = [
    {
      image: one,
      title: ' The Dark Side',
      description: 'Drag your soul '
    },
    {
      image: two,
      title: 'Musta Space',
      description: ' Elavate your spirit'
    },
    {
      image: three,
      title: 'Heartbreak!',
      description: 'Heal your wounds'
    }
  ];
  return (
    <div className="mt-4 h-[30%] relative">

      <BannerImage image={playlists[0].image} />
      <div className="flex flex-col absolute h-[100%] justify-center pin-dot items-center">
        <div className=" h-[.5rem] w-[.3rem] bg-[#fff] rounded-full active-dot" />
        <div className=" h-[.3rem] w-[.3rem] bg-[#c4c4c4] rounded-full" />
        <div className=" h-[.3rem] w-[.3rem] bg-[#c4c4c4] rounded-full" />
        <div className=" h-[.3rem] w-[.3rem] bg-[#c4c4c4] rounded-full" />
      </div>
    </div>
  );
};

export default Banner;
