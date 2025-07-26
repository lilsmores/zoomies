import React from 'react';

const BADGES = [
  { name: 'Donor', icon: '💖' },
  { name: 'Event Attendee', icon: '🎟️' },
  { name: 'Advocate', icon: '📢' },
  { name: 'Premium', icon: '🌟' },
];
const FOLLOWED = [
  { name: 'Stompy', type: 'Animal' },
  { name: 'Luna', type: 'Animal' },
  { name: 'Alveus Sanctuary', type: 'Sanctuary' },
];
const PERKS = [
  'Custom Profile',
  'Fundraising Campaigns',
  'Livestream Access',
  'Profile Customization',
];
const WALL = [
  { type: 'text', content: 'Excited to support Stompy this month!' },
  { type: 'photo', content: 'https://placehold.co/200x120?text=Pet+Photo' },
  { type: 'video', content: 'https://placehold.co/200x120?text=Pet+Video' },
];
const DONATIONS = [
  { to: 'Stompy', amount: 25, date: '2024-07-01' },
  { to: 'Luna', amount: 10, date: '2024-06-15' },
];
const LEADERBOARD = [
  { name: 'You', rank: 2, amount: 120 },
  { name: 'Clara', rank: 1, amount: 200 },
  { name: 'Sam', rank: 3, amount: 90 },
];

export default function UserProfile() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 32 }}>
      {/* Cover and Avatar */}
      <div style={{ position: 'relative', height: 220, background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: 24, marginBottom: 48 }}>
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center" alt="User Avatar" style={{ position: 'absolute', bottom: -50, left: 32, border: '4px solid var(--background)', borderRadius: '50%', width: 100, height: 100, objectFit: 'cover', background: '#fff' }} />
        <button className="button" style={{ position: 'absolute', top: 16, right: 24, color: 'var(--background)' }}>Settings</button>
      </div>
      <div style={{ marginLeft: 140, marginBottom: 32 }}>
        <h1 style={{ margin: 0, fontFamily: 'Calistoga, serif' }}>Lianne Graham</h1>
        <div style={{ color: 'var(--text)', opacity: 0.7 }}>@liannagraham</div>
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {/* Sidebar */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontSize: 20 }}>Earned Badges</h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {BADGES.map(b => (
                <span key={b.name} style={{ fontSize: 28, background: 'var(--gray)', borderRadius: 12, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>{b.icon} {b.name}</span>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontSize: 20 }}>Followed</h2>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {FOLLOWED.map(f => (
                <li key={f.name} style={{ marginBottom: 6 }}>{f.name} <span style={{ color: 'var(--accent)', fontSize: 13 }}>({f.type})</span></li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontSize: 20 }}>Premium Perks</h2>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {PERKS.map(p => (
                <li key={p} style={{ marginBottom: 6 }}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Main Wall */}
        <div style={{ flex: 2, minWidth: 320 }}>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontSize: 20 }}>My Wall</h2>
            {WALL.map((w, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                {w.type === 'text' && <div>{w.content}</div>}
                {w.type === 'photo' && <img src={w.content} alt="Wall Post" style={{ width: 200, borderRadius: 12 }} />}
                {w.type === 'video' && <video src={w.content} controls style={{ width: 200, borderRadius: 12 }} />}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, flex: 1, minWidth: 220, marginBottom: 24 }}>
              <h2 style={{ fontSize: 20 }}>Donation History</h2>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {DONATIONS.map(d => (
                  <li key={d.to + d.date}>{d.amount} USD to {d.to} <span style={{ color: 'var(--accent)', fontSize: 13 }}>({d.date})</span></li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, flex: 1, minWidth: 220, marginBottom: 24 }}>
              <h2 style={{ fontSize: 20 }}>Leaderboard</h2>
              <ol style={{ paddingLeft: 18, margin: 0 }}>
                {LEADERBOARD.map(l => (
                  <li key={l.name} style={{ marginBottom: 6 }}>{l.name} <span style={{ color: 'var(--accent)', fontSize: 13 }}>#{l.rank} (${l.amount})</span></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 