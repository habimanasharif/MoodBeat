import React from 'react';
import PlaylistItem from './PlaylistItem';
import one from '../../public/one.jpg';
import two from '../../public/two.jpg';
import three from '../../public/three.jpg';
import Player from './Player';

const PlaylistPlayerContainer = () => {
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
    <div className="w-[45%] pr-[4.6rem]  h-[80%] flex flex-col ">
      <div className="w-[100%] flex flex-no-rwap overflow-x-auto flex-gap ">
        <div />
        {
          playlists.map((item, id) => (
            <PlaylistItem
              image={item.image}
              title={item.title}
              description={item.description}
              key={id}
            />
          ))
        }

      </div>
      <Player />
    </div>
  );
};

export default PlaylistPlayerContainer;
