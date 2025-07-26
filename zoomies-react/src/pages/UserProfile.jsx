import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data for enhanced user profile
const USER_DATA = {
  name: 'Lianne Graham',
  username: '@liannagraham',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=center',
  coverPhoto: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=300&fit=crop&crop=center',
  bio: 'Passionate animal advocate and sanctuary supporter. Making the world better for all creatures, one donation at a time! 🐾',
  location: 'San Francisco, CA',
  joinedDate: 'March 2023',
  totalDonated: 1250,
  animalsHelped: 47,
  followers: 892,
  following: 156,
  level: 8,
  xp: 2840,
  nextLevelXp: 3200
};

const BADGES = [
  { name: 'Donor', icon: '💖', description: 'Made first donation', earned: '2024-01-15' },
  { name: 'Event Attendee', icon: '🎟️', description: 'Attended 5 events', earned: '2024-02-20' },
  { name: 'Advocate', icon: '📢', description: 'Shared 50+ posts', earned: '2024-03-10' },
  { name: 'Premium', icon: '🌟', description: 'Premium member', earned: '2024-04-01' },
  { name: 'Fundraiser', icon: '💰', description: 'Raised $500+', earned: '2024-05-15' },
  { name: 'Volunteer', icon: '🤝', description: 'Volunteered 20+ hours', earned: '2024-06-01' }
];

const FOLLOWED_ANIMALS = [
  { name: 'Stompy', type: 'Goat', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=60&h=60&fit=crop&crop=center', sanctuary: 'Alveus Sanctuary', status: 'Active' },
  { name: 'Luna', type: 'Cow', image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=60&h=60&fit=crop&crop=center', sanctuary: 'Gentle Barn', status: 'Recovering' },
  { name: 'Bella', type: 'Pig', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=60&h=60&fit=crop&crop=center', sanctuary: 'Farm Sanctuary', status: 'Thriving' }
];

const FOLLOWED_SANCTUARIES = [
  { name: 'Alveus Sanctuary', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=60&h=60&fit=crop&crop=center', location: 'Austin, TX', animals: 47 },
  { name: 'Gentle Barn', image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=60&h=60&fit=crop&crop=center', location: 'Santa Clarita, CA', animals: 89 },
  { name: 'Farm Sanctuary', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=60&h=60&fit=crop&crop=center', location: 'Watkins Glen, NY', animals: 156 }
];

const ACTIVITY_FEED = [
  { type: 'donation', content: 'Donated $50 to Stompy', time: '2 hours ago', icon: '💖' },
  { type: 'post', content: 'Just visited Alveus Sanctuary! The animals are doing amazing. #sanctuarylife', time: '1 day ago', icon: '📸' },
  { type: 'achievement', content: 'Earned the "Fundraiser" badge!', time: '3 days ago', icon: '🏆' },
  { type: 'event', content: 'Registered for "Walk for Animals" event', time: '1 week ago', icon: '🎟️' },
  { type: 'fundraiser', content: 'Started fundraiser for Luna\'s surgery', time: '2 weeks ago', icon: '💰' }
];

const DONATIONS = [
  { to: 'Stompy', amount: 50, date: '2024-07-01', type: 'Monthly' },
  { to: 'Luna', amount: 25, date: '2024-06-15', type: 'One-time' },
  { to: 'Bella', amount: 100, date: '2024-06-01', type: 'Emergency' },
  { to: 'Alveus Sanctuary', amount: 75, date: '2024-05-20', type: 'General' }
];

const FUNDRAISERS = [
  { name: 'Help Luna Get Surgery', goal: 2500, raised: 1800, daysLeft: 5, image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=200&h=120&fit=crop&crop=center' },
  { name: 'Stompy\'s Medical Fund', goal: 2000, raised: 815, daysLeft: 12, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=120&fit=crop&crop=center' }
];

const LEADERBOARD = [
  { name: 'Clara', rank: 1, amount: 200, avatar: 'https://placehold.co/32x32?text=C' },
  { name: 'You', rank: 2, amount: 150, avatar: USER_DATA.avatar },
  { name: 'Sam', rank: 3, amount: 90, avatar: 'https://placehold.co/32x32?text=S' },
  { name: 'Jess', rank: 4, amount: 75, avatar: 'https://placehold.co/32x32?text=J' },
  { name: 'Mike', rank: 5, amount: 60, avatar: 'https://placehold.co/32x32?text=M' }
];

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('activity');
  const [isEditing, setIsEditing] = useState(false);

  const renderProgressBar = (current, max) => {
    const percentage = (current / max) * 100;
    return (
      <div style={{ width: '100%', height: 8, background: 'var(--gray)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${percentage}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--pink))', borderRadius: 4 }} />
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
      {/* Cover and Profile Header */}
      <div style={{ position: 'relative', height: 300, background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${USER_DATA.coverPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 24, marginBottom: 24 }}>
        <div style={{ position: 'absolute', bottom: -60, left: 32, display: 'flex', alignItems: 'flex-end', gap: 24 }}>
          <img src={USER_DATA.avatar} alt="User Avatar" style={{ border: '4px solid var(--background)', borderRadius: '50%', width: 120, height: 120, objectFit: 'cover' }} />
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ margin: '0 0 8px 0', fontFamily: 'Calistoga, serif', color: '#fff', fontSize: 32 }}>{USER_DATA.name}</h1>
            <div style={{ color: '#fff', opacity: 0.9, fontSize: 18 }}>{USER_DATA.username}</div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: 16, right: 24, display: 'flex', gap: 12 }}>
          <button className="button" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
          <button className="button" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            Settings
          </button>
        </div>
      </div>

      {/* Profile Stats */}
      <div style={{ marginLeft: 176, marginBottom: 32 }}>
        <p style={{ color: 'var(--text)', opacity: 0.8, margin: '0 0 16px 0', maxWidth: 600 }}>{USER_DATA.bio}</p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary)' }}>${USER_DATA.totalDonated}</div>
            <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>Total Donated</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary)' }}>{USER_DATA.animalsHelped}</div>
            <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>Animals Helped</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary)' }}>{USER_DATA.followers}</div>
            <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>Followers</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--primary)' }}>{USER_DATA.following}</div>
            <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>Following</div>
          </div>
        </div>
        
        
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, borderBottom: '1px solid var(--gray)' }}>
        {[
          { id: 'activity', label: 'Activity', icon: '📱' },
          { id: 'badges', label: 'Badges', icon: '🏆' },
          { id: 'following', label: 'Following', icon: '👥' },
          { id: 'donations', label: 'Donations', icon: '💖' },
          { id: 'fundraisers', label: 'Fundraisers', icon: '💰' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--text)',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px 8px 0 0',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: 16
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        {/* Main Content */}
        <div>
          {activeTab === 'activity' && (
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ margin: '0 0 20px 0', fontSize: 24 }}>Recent Activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {ACTIVITY_FEED.map((activity, index) => (
                  <div key={index} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 20 }}>{activity.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ marginBottom: 4 }}>{activity.content}</div>
                      <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.6 }}>{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'badges' && (
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ margin: '0 0 20px 0', fontSize: 24 }}>Earned Badges</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                {BADGES.map(badge => (
                  <div key={badge.name} style={{ background: 'var(--background)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>{badge.icon}</div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{badge.name}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7, marginBottom: 8 }}>{badge.description}</div>
                    <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.5 }}>Earned {badge.earned}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'following' && (
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ margin: '0 0 20px 0', fontSize: 24 }}>Following</h2>
              
              <h3 style={{ margin: '20px 0 12px 0', fontSize: 18 }}>Animals</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                {FOLLOWED_ANIMALS.map(animal => (
                  <div key={animal.name} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <img src={animal.image} alt={animal.name} style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{animal.name}</div>
                      <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>{animal.type} • {animal.sanctuary}</div>
                    </div>
                    <span style={{ fontSize: 12, padding: '4px 8px', background: 'var(--primary)', color: '#fff', borderRadius: 12 }}>{animal.status}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ margin: '20px 0 12px 0', fontSize: 18 }}>Sanctuaries</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {FOLLOWED_SANCTUARIES.map(sanctuary => (
                  <div key={sanctuary.name} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <img src={sanctuary.image} alt={sanctuary.name} style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{sanctuary.name}</div>
                      <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>{sanctuary.location} • {sanctuary.animals} animals</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ margin: '0 0 20px 0', fontSize: 24 }}>Donation History</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {DONATIONS.map((donation, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--gray)' }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>${donation.amount} to {donation.to}</div>
                      <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>{donation.date}</div>
                    </div>
                    <span style={{ fontSize: 12, padding: '4px 8px', background: 'var(--accent)', color: '#fff', borderRadius: 12 }}>{donation.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'fundraisers' && (
            <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
              <h2 style={{ margin: '0 0 20px 0', fontSize: 24 }}>My Fundraisers</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {FUNDRAISERS.map((fundraiser, index) => (
                  <div key={index} style={{ background: 'var(--background)', borderRadius: 12, padding: 16 }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <img src={fundraiser.image} alt={fundraiser.name} style={{ width: 80, height: 60, borderRadius: 8, objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, marginBottom: 8 }}>{fundraiser.name}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <span style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>${fundraiser.raised} raised of ${fundraiser.goal}</span>
                          <span style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>{fundraiser.daysLeft} days left</span>
                        </div>
                        {renderProgressBar(fundraiser.raised, fundraiser.goal)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Leaderboard */}
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 20 }}>Top Donors</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {LEADERBOARD.map((user, index) => (
                <div key={user.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--primary)', width: 24 }}>#{user.rank}</div>
                  <img src={user.avatar} alt={user.name} style={{ width: 32, height: 32, borderRadius: '50%' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{user.name}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', opacity: 0.7 }}>${user.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24 }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 20 }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link to="/ambassador-hub" className="button" style={{ textAlign: 'center', textDecoration: 'none' }}>
                🐾 Support an Animal
              </Link>
              <Link to="/community" className="button" style={{ textAlign: 'center', textDecoration: 'none' }}>
                👥 Join Community
              </Link>
              <button className="button" style={{ textAlign: 'center' }}>
                💰 Start Fundraiser
              </button>
              <button className="button" style={{ textAlign: 'center' }}>
                📸 Share Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 