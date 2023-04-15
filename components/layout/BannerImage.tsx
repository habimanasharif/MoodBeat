import React from 'react';
import Image, { StaticImageData } from 'next/image';

const BannerImage:React.FC<{image:StaticImageData}> = ({ image }) => (
  <div className="w-[100%] h-[100%] relative rounded-[1.7rem]  ">
    <div>
      <Image
        src={image}
        alt="banner Image"
        width={500}
        height={500}
        className="w-[100%] h-[100%] absolute rounded-[2rem] playlist-img"
      />
    </div>
  </div>
);

export default BannerImage;
