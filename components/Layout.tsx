import React from 'react';

const Layout:React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout-bg  h-screen mx-24 rounded-[3rem]">
    {children}
  </div>
);

export default Layout;
