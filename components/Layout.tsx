import React from 'react';

const Layout:React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="layout-bg h-screen ">
    {children}
  </div>
);

export default Layout;
