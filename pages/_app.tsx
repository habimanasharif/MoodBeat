import '@/styles/globals.css';
import Layout from '@/components/Layout';
import SideBar from '@/components/SideBar';
import NewPlaylist from '@/components/layout/NewPlaylist';

const App = () => (
  <div className="relative">
    <SideBar />
    <Layout>
      <NewPlaylist />
    </Layout>
  </div>
);
export default App;
