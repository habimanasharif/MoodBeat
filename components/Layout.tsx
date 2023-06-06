import React from 'react';

const Layout:React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout-bg   h-screen  sm:ml-24 sm:rounded-[3rem] relative">
    {children}
  </div>
);

export default Layout;
