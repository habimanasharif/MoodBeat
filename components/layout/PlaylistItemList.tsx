import React from 'react';
import PlaylistItem from './PlaylistItem';

interface playlist{
    image:any ;
    title:string;
    description:string
    }

const PlaylistItemList:React.FC<{playlists:playlist[]}> = ({ playlists }) => (
  <div className="w-[100%] sm:h-[44%] pt-3 sm:mt-[0rem] h-screen sm:flex hidden flex-wrap  sm:flex-nowrap  sm:overflow-x-auto overflow-y-auto flex-gap pb-16 sm:pb-0  ">
    {
          playlists.map((item:playlist, id:number) => (
            <PlaylistItem
              image={item.image}
              title={item.title}
              description={item.description}
              key={id}
            />
          ))
        }

  </div>
);

export default PlaylistItemList;
