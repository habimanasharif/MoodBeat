/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface SidebarItemProps {
    label: string;
    children: React.ReactNode
    func:any
  }
const SideBarItem:React.FC<SidebarItemProps> = ({
  label, children, func
}) => (
  <div title={label} className="mx-3 my-3 w-9 h-9 flex justify-center rounded-lg items-center transparent-White shadow" onClick={func}>
    {children}

  </div>
);
export default SideBarItem;
