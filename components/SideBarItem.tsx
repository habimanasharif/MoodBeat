import Link from 'next/link';
import React from 'react';

interface SidebarItemProps {
    label: string;
    href: string;
    children: React.ReactNode
  }
const SideBarItem:React.FC<SidebarItemProps> = ({
  label, href, children
}) => (
  <div title={label} className="mx-3 my-3 w-9 h-9 flex justify-center rounded-lg items-center transparent-White shadow">
    <Link href={href}>
      {children}
    </Link>
  </div>
);
export default SideBarItem;
