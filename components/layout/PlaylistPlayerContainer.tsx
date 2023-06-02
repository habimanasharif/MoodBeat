import React from 'react';
import { useAppSelector } from '@/Redux/hooks';
import { setIsMobile } from '@/Redux/data/uiData';
import one from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import Player from './Player';
import PlaylistItemList from './PlaylistItemList';

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
    <div className={`w-[100%] sm:w-[45%]  pr-[.1rem] sm:pr-[4.6rem]  sm:h-[80%] h-screen  ${isMobile && page === 'home' ? 'flex' : 'hidden'} flex-col `}>
      {!setIsMobile && (<PlaylistItemList playlists={playlists} />)}

      <Player />
    </div>
  );
};

export default PlaylistPlayerContainer;
