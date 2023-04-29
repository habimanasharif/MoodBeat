import React from 'react';

const Layout:React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout-bg   h-screen ml-24 rounded-[3rem] relative">
    {children}
  </div>
);

export default Layout;
