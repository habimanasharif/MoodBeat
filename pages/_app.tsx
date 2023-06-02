import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SideBar from '@/components/SideBar';
import NewPlaylist from '@/components/layout/NewPlaylist';
import Explore from '@/components/layout/Explore';
import PlaylistPlayer from '@/components/layout/PlaylistPlayerContainer';
import store from '@/Redux/store';
import { Provider } from 'react-redux';
import NavBarBottom from '@/components/layout/NavBarBottom';
import MobileExplore from '@/components/layout/MobileExplore';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    });
  });
  return (
    <Provider store={store}>
      <div className="relative">
        <div className="hidden sm:block">
          <SideBar />
        </div>
        <NavBarBottom />
        <Layout>
          <NewPlaylist isMobile={isMobile} />
          <PlaylistPlayer isMobile={isMobile} />
          <div className="hidden sm:block">
            <Explore />
          </div>
          <div className="block sm:hidden">
            <MobileExplore isMobile={isMobile} />
          </div>
        </Layout>
      </div>
    </Provider>
  );
};
export default App;
