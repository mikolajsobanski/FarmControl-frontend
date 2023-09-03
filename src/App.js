import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ResetPage from './pages/ResetPage';
import AuthPage from './pages/AuthPage';
import SettingsPage from './pages/SettingsPage';

import NavMobile from './components/NavMobile';
import Sidebar from './components/Sidebar';
import SideIcons from './components/SideIcons';
import StaffPage from './pages/StaffPage';
import MyFarmPage from './pages/MyFarmPage';
import AnalysisPage from './pages/AnalysisPage';



function App() {
  return (
    <div className='container-app'>
      <Router>
        <aside>
          <Sidebar/>
        </aside>
        <div className='asideIcons'>
          <SideIcons />
        </div>
      

      <main className='main-app'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/auth" element={<AuthPage />}/>
          <Route path='/farm' element={<MyFarmPage />}/>
          <Route path='/analysis' element={<AnalysisPage />}/>
          <Route path="/settings" element={<SettingsPage />}/>
          <Route path="/staff" element={<StaffPage />}/>
          <Route path="/reset/:token" element={<ResetPage />}/>
        </Routes>
      </main>

      <end>
        <NavMobile/>
      </end>

    </Router>
    </div>
    
  );
}

export default App;
