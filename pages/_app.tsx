import '@/styles/globals.css';
import Layout from '@/components/Layout';
import SideBar from '@/components/SideBar';
import NewPlaylist from '@/components/layout/NewPlaylist';
import Explore from '@/components/layout/Explore';
import PlaylistPlayer from '@/components/layout/PlaylistPlayerContainer';

const App = () => (
  <div className="relative">
    <SideBar />
    <Layout>
      <NewPlaylist />
      <PlaylistPlayer />
      <Explore />
    </Layout>
  </div>
);
export default App;
