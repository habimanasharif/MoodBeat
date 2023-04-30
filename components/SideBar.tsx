import React from 'react';
import { useAppDispatch } from '@/Redux/hooks';
import { setPanelSize } from '@/Redux/data/exploreData';
import SideBarItem from './SideBarItem';
import Disc from './svg/Disc';
import ExploreIcon from './svg/Explore';
import FolderIcon from './svg/Folder';
import HomeIcon from './svg/Home';
import NoteIcon from './svg/Note';
import SettingIcon from './svg/Setting';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const items = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      href: '/',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPanelSize(60));
      }
    },
    {
      icon: <NoteIcon size="20" />,
      label: 'Music',
      href: '/music',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPanelSize(60));
      }

    },
    {
      icon: <FolderIcon />,
      label: 'Album',
      href: '/album',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPanelSize(60));
      }
    },
    {
      icon: <ExploreIcon />,
      label: 'Explore',
      href: '/explore',
      func: (e:any) => {
        e.preventDefault();
        dispatch(setPanelSize(100));
      }
    }
  ];
  return (
    <div className="pin-l z-10 absolute w-24 h-full text-white py-12 px-5 ">
      <div className="flex flex-col justify-between items-center h-full">
        <div className=" flex justify-center">
          <div className="bg-[#642453] w-10 h-10 flex items-center rounded-full justify-center">
            <Disc />
          </div>
        </div>
        <div>
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
        <div className="flex justify-center">
          <div className="">
            <SettingIcon />
          </div>
        </div>

      </div>
    </div>
  );
};
export default SideBar;
