import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import one from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import Player from './Player';
import PlaylistItemList from './PlaylistItemList';
import MobilePlayerController from './MobilePlayerController';

interface playlist{
  image:any ;
  title:string;
  description:string
  }
  interface props{
    isMobile:boolean;
  }

const PlaylistPlayerContainer:React.FC<props> = ({ isMobile }) => {
  const { page } = useAppSelector((state) => state.uiData);
  const { musicList, songNumber } = useAppSelector((state) => state.musicData);
  const playlists:playlist[] = [
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
    <div className={`w-[100%] sm:w-[45%]  pr-[.1rem] sm:pr-[4.6rem]  sm:h-[80%]  sm:bg-[transparent] bg-[#2d2e37] h-[95vh] rounded-t-[2rem] sm:rounded-t-[0rem] sm:relative absolute pin-b-0  ${(isMobile && page === 'home') || !isMobile ? 'flex' : 'hidden'} flex-col `}>
      {!isMobile && (<PlaylistItemList playlists={playlists} />)}

      <Player isMobile={isMobile} />
      {isMobile && (
      <MobilePlayerController
        song={musicList[songNumber].audio}
        title={musicList[songNumber].title}
        songNumber={songNumber}
      />
      )}
    </div>
  );
};

export default PlaylistPlayerContainer;
