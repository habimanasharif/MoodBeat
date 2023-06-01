import React from 'react';
import PlaylistItemList from './PlaylistItemList';
import one from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import Songs from './Songs';

interface playlist{
    image:any ;
    title:string;
    description:string
    }
interface category{
    title:string;
}

const MobileExplore = () => {
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
  const categories:category[] = [
    {
      title: 'Trending Right now'
    },
    {
      title: 'HipHop'
    },
    {
      title: 'Rock'
    },
    {
      title: 'Electro'
    },
    {
      title: 'alternative'
    }

  ];
  return (
    <div className=" absolute pin-x  w-full h-screen px-2 py-2 flex flex-col overflow-hidden ">
      <h1 className="text-white ml-3 text-[2rem] h-[3rem] font-bold">Trending right now</h1>
      <PlaylistItemList playlists={playlists} />
      <div className="flex gap-[1rem] mb-3 ml-3 h-[10rem] flex-nowrap overflow-x-auto  ">
        {categories.map((item:category, id:number) => (<h1 key={id} className=" whitespace-nowrap bg-black px-3 py-2 rounded-[1rem] shadow font-bold text-lg text-white">{item.title}</h1>))}
      </div>
      <Songs />

    </div>
  );
};

export default MobileExplore;
