import React from 'react';
import { useAppDispatch } from '@/Redux/hooks';
import { setPage } from '@/Redux/data/uiData';
import ExploreIcon from '../svg/Explore';
import FolderIcon from '../svg/Folder';
import HomeIcon from '../svg/Home';
import NoteIcon from '../svg/Note';
import SideBarItem from '../SideBarItem';
import AddIcon from '../svg/Add';

const NavBarBottom = () => {
  const dispatch = useAppDispatch();
  const items = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      href: '/',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPage('home'));
      }
    },
    {
      icon: <NoteIcon size="20" />,
      label: 'Music',
      href: '/music',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPage('home'));
      }

    },
    {
      icon: <AddIcon />,
      label: 'Add Playlist',
      href: '/add',
      func: (e:any) => {
        e.preventDefault();
      }

    },
    {
      icon: <FolderIcon />,
      label: 'Album',
      href: '/album',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPage('playlists'));
      }
    },
    {
      icon: <ExploreIcon />,
      label: 'Explore',
      href: '/explore',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPage('explore'));
      }
    }
  ];
  return (
    <div className=" z-50 drop-shadow-2xl pin-b left-[5%] h-[3.5rem] w-[90%]  absolute w-1 bottom-navbar-bg sm:hidden block rounded-[2rem]">
      <div className="flex  justify-center h-[100%] items-center">
        {items.map((item, id) => (
          <SideBarItem
            key={id}
            label={item.label}
            func={item.func}
          >
            {item.icon}
          </SideBarItem>
        ))}
      </div>
    </div>
  );
};
export default NavBarBottom;
