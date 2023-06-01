import '@/styles/globals.css';
import { useEffect } from 'react';
import { useAppDispatch } from '@/Redux/hooks';
import { setIsMobile } from '@/Redux/data/uiData';
import Layout from '@/components/Layout';
import SideBar from '@/components/SideBar';
import NewPlaylist from '@/components/layout/NewPlaylist';
import Explore from '@/components/layout/Explore';
import PlaylistPlayer from '@/components/layout/PlaylistPlayerContainer';
import store from '@/Redux/store';
import { Provider } from 'react-redux';
import NavBarBottom from '@/components/layout/NavBarBottom';
import MobileExplore from '@/components/layout/MobileExplore';

const App = () =>
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     if (window.matchMedia('(min-width: 640px)').matches) {
  //       dispatch(setIsMobile(false));
  //     } else {
  //       dispatch(setIsMobile(true));
  //     }
  //   });
  // });
  (
    <Provider store={store}>
      <div className="relative">
        <div className="hidden sm:block">
          <SideBar />
        </div>
        <NavBarBottom />
        <Layout>
          <NewPlaylist />
          <PlaylistPlayer />
          <div className="hidden sm:block">
            <Explore />
          </div>
          <div className="block sm:hidden">
            <MobileExplore />
          </div>
        </Layout>
      </div>
    </Provider>
  );
export default App;
