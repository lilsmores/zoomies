import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ZoomiesHeader from './components/ZoomiesHeader';
import AmbassadorProfilePage from './pages/AmbassadorProfilePage';
import AmbassadorProfilePageCopy from './pages/AmbassadorProfilePageCopy';
import AmbassadorProfilePageOld from './pages/AmbassadorProfilePageOld';
import AmbassadorHub from './pages/AmbassadorHub';
import Home from './pages/Home';
import Community from './pages/Community';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: 'var(--background, #F8F6FF)', color: 'var(--text, #18171C)' }}>
        <ZoomiesHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ambassador-hub" element={<AmbassadorHub />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ambassadors/:id" element={<AmbassadorProfilePage />} />
          <Route path="/ambassadors-copy/:id" element={<AmbassadorProfilePageCopy />} />
          <Route path="/ambassadors-old/:id" element={<AmbassadorProfilePageOld />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
