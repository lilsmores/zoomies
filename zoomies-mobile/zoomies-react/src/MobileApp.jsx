import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MobileHome from "./pages/MobileHome";
import MobileCommunity from "./pages/MobileCommunity";
import MobileProfile from "./pages/MobileProfile";
import MobileUserProfile from "./pages/MobileUserProfile";
import MobileSanctuaryProfile from "./pages/MobileSanctuaryProfile";
import MobileAmbassadors from "./pages/MobileSupport";
import MobileAmbassadorProfile from "./pages/MobileAmbassadorProfile";
import MobileBottomNav from "./components/MobileBottomNav";

const MobileApp = () => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('demoUser');
  const userType = localStorage.getItem('demoUser');

  return (
    <HashRouter>
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column'
      }}>
        <div style={{
          flex: 1,
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<MobileHome />} />
            <Route path="/community" element={<MobileCommunity />} />
            <Route path="/profile" element={
              isLoggedIn ? 
                (userType === 'user' ? <Navigate to="/profile/user" /> : <Navigate to="/profile/sanctuary" />) 
                : <MobileProfile />
            } />
            <Route path="/profile/user" element={<MobileUserProfile />} />
            <Route path="/profile/sanctuary" element={<MobileSanctuaryProfile />} />
            <Route path="/ambassadors" element={<MobileAmbassadors />} />
            <Route path="/ambassadors/:animalId" element={<MobileAmbassadorProfile />} />
          </Routes>
        </div>
        <MobileBottomNav />
      </div>
    </HashRouter>
  );
};

export default MobileApp; 