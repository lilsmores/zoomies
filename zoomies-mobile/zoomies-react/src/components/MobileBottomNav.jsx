import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Custom hook to listen for localStorage changes
const useLocalStorage = (key) => {
  const [value, setValue] = useState(localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key));
    };

    // Listen for storage events
    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically for changes (since storage event doesn't fire for same window)
    const interval = setInterval(() => {
      const currentValue = localStorage.getItem(key);
      if (currentValue !== value) {
        setValue(currentValue);
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [key, value]);

  return value;
};

const MobileBottomNav = () => {
  const isLoggedIn = useLocalStorage('demoUser');

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/community', icon: '👥', label: 'Community' },
    { path: '/ambassadors', icon: '⭐', label: 'Ambassadors' },
    { path: '/profile', icon: '👤', label: isLoggedIn ? 'Profile' : 'Login' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
      padding: '8px 0',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: isActive ? '#FF6B6B' : '#666',
              fontSize: '12px',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            <div style={{ fontSize: '20px', marginBottom: '2px' }}>
              {item.icon}
            </div>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav; 