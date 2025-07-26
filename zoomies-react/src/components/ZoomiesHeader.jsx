import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoPink from '../assets/LogoPink.png';
import logoWhite from '../assets/LogoWhite.png';

export default function ZoomiesHeader() {
  // Placeholder login state
  const [user, setUser] = useState(null); // null or { name, avatar, type }
  const [theme, setTheme] = useState('light');
  const [isDark, setIsDark] = useState(false);
  const handleUserLogin = () => setUser({ name: 'Lianne', avatar: 'https://placehold.co/32x32?text=L', type: 'user' });
  const handleSanctuaryLogin = () => setUser({ name: 'Alveus Sanctuary', avatar: 'https://placehold.co/32x32?text=A', type: 'sanctuary' });
  const handleLogout = () => setUser(null);
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // Apply theme to document root (for CSS vars)
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    updateTheme();
    window.addEventListener('themechange', updateTheme);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      window.removeEventListener('themechange', updateTheme);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="zoomies-header" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.5rem 2rem', background: 'var(--card, #fff)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 0, zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src={isDark ? logoWhite : logoPink} alt="Zoomies Logo" style={{ 
          width: 80, 
          height: 86, 
          objectFit: 'cover',
          ...(isDark && { borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' })
        }} />
        <span style={{ fontFamily: 'Calistoga, serif', fontSize: 25, color: 'var(--primary, #fc97ca)', letterSpacing: 1 }}>Zoomies</span>
        <nav style={{ display: 'flex', gap: 24, fontSize: 18 }}>
          <Link to="/" style={{ color: 'var(--text, #18171C)', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
          <Link to="/ambassador-hub" style={{ color: 'var(--text, #18171C)', textDecoration: 'none', fontWeight: 500 }}>Animals</Link>
          <Link to="/community" style={{ color: 'var(--text, #18171C)', textDecoration: 'none', fontWeight: 500 }}>Community</Link>
        </nav>
      </div>
      <form style={{ flex: 1, maxWidth: 240, margin: '0 1.25rem', display: 'flex', alignItems: 'center', background: 'var(--background, #F8F6FF)', borderRadius: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
        <input type="text" placeholder="Search Zoomies..." style={{ flex: 1, border: 'none', background: 'transparent', padding: '0.5rem 1rem', fontSize: 16, outline: 'none', color: 'var(--text, #18171C)' }} />
        <button type="submit" style={{ background: 'none', border: 'none', padding: '0 1rem', cursor: 'pointer', color: 'var(--primary, #fc97ca)', fontSize: 16 }}></button>
      </form>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={toggleTheme} className="button" style={{ border: 'none', borderRadius: 20, padding: '0.5rem 1rem', fontSize: 18, cursor: 'pointer', marginRight: 8 }} title="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link to={user.type === 'sanctuary' ? '/sanctuary-dashboard' : '/profile'} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <img src={user.avatar} alt={user.name} style={{ width: 32, height: 32, borderRadius: '50%' }} />
              <span style={{ color: 'var(--primary, #fc97ca)', fontWeight: 600 }}>{user.name}</span>
            </Link>
            <button onClick={handleLogout} className="button" style={{ border: 'none', borderRadius: 20, padding: '0.5rem 1rem', fontWeight: 600, marginLeft: 8, cursor: 'pointer' }}>Logout</button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={handleUserLogin} className="button" style={{ background: isDark ? 'var(--accent)' : 'var(--pink)', color: isDark ? 'var(--text)' : '#fff', border: 'none', borderRadius: 20, padding: '0.5rem 1rem', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>User</button>
            <button onClick={handleSanctuaryLogin} className="button" style={{ background: isDark ? 'var(--accent)' : 'var(--pink)', color: isDark ? 'var(--text)' : '#fff', border: 'none', borderRadius: 20, padding: '0.5rem 1rem', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Sanctuary</button>
          </div>
        )}
      </div>
    </header>
  );
} 