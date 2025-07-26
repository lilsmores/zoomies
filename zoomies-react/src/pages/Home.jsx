import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for live activity
const LIVE_ACTIVITIES = [
  { id: 1, user: 'Clara', action: 'donated $50 to', target: 'Stompy', time: '2m ago', avatar: 'https://placehold.co/32x32?text=C' },
  { id: 2, user: 'Sam', action: 'posted a rescue story', target: '', time: '5m ago', avatar: 'https://placehold.co/32x32?text=S' },
  { id: 3, user: 'Jess', action: 'earned the "Advocate" badge', target: '', time: '8m ago', avatar: 'https://placehold.co/32x32?text=J' },
  { id: 4, user: 'Mike', action: 'donated $25 to', target: 'Luna', time: '12m ago', avatar: 'https://placehold.co/32x32?text=M' },
  { id: 5, user: 'Sarah', action: 'started following', target: 'Bella', time: '15m ago', avatar: 'https://placehold.co/32x32?text=S' },
];

const URGENT_CAMPAIGNS = [
  {
    id: 'stompy',
    name: 'Stompy',
    species: 'Goat',
    sanctuary: 'Alveus Sanctuary',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&crop=center',
    raised: 815,
    goal: 2000,
    urgency: 'Medical treatment needed',
    timeLeft: '3 days',
    followers: 1247
  },
  {
    id: 'luna',
    name: 'Luna',
    species: 'Cow',
    sanctuary: 'Gentle Barn',
    image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=200&h=200&fit=crop&crop=center',
    raised: 1200,
    goal: 2500,
    urgency: 'Surgery required',
    timeLeft: '1 day',
    followers: 892
  }
];

const TRENDING_ANIMALS = [
  { id: 'stompy', name: 'Stompy', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center', likes: 1247, followers: 892 },
  { id: 'luna', name: 'Luna', image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=100&h=100&fit=crop&crop=center', likes: 892, followers: 456 },
  { id: 'bella', name: 'Bella', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=100&h=100&fit=crop&crop=center', likes: 456, followers: 234 },
  { id: 'max', name: 'Max', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=100&h=100&fit=crop&crop=center', likes: 2034, followers: 1567 }
];

export default function Home() {
  const [likedAnimals, setLikedAnimals] = useState(new Set());
  const [isDark, setIsDark] = useState(false);

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

  const handleLike = (animalId) => {
    setLikedAnimals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(animalId)) {
        newSet.delete(animalId);
      } else {
        newSet.add(animalId);
      }
      return newSet;
    });
  };

  return (
    <div style={{ padding: 0, maxWidth: 1200, margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ 
        background: '#fff', 
        padding: '2rem 1rem', 
        textAlign: 'center', 
        color: 'var(--text)',
        marginBottom: '1rem'
      }}>
        <h1 style={{ 
          fontFamily: 'Calistoga, serif', 
          fontSize: 48, 
          margin: '0 0 0.5rem 0', 
          color: 'var(--primary)'
        }}>
          Zoomies
        </h1>
        <p style={{ 
          fontSize: 18, 
          margin: '0 0 1.5rem 0', 
          color: '#000',
          opacity: 0.9,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.5
        }}>
          Empowering animal sanctuaries and uniting animal lovers through joyful fundraising and community.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/ambassador-hub" className="button" style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--pink))',
            color: '#fff',
            padding: '10px 20px',
            fontSize: 14,
            fontWeight: 600
          }}>
            🐾 Support an Animal
          </Link>
          <Link to="/community" className="button" style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--pink))',
            color: '#fff',
            padding: '10px 20px',
            fontSize: 14,
            fontWeight: 600
          }}>
            👥 Join the Community
          </Link>
        </div>
      </section>

      {/* Community Milestones */}
      <section style={{ margin: '1rem', padding: '1rem', background: 'var(--card)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, textAlign: 'center', marginBottom: 16, fontSize: 20 }}>Community Impact</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
          <div style={{ textAlign: 'center', padding: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>💰</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>$45,230</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>Raised Today</div>
          </div>
          <div style={{ textAlign: 'center', padding: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>🐾</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>1,247</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>Animals Helped</div>
          </div>
          <div style={{ textAlign: 'center', padding: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>👥</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>8,934</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>Active Supporters</div>
          </div>
          <div style={{ textAlign: 'center', padding: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>🏆</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--primary)' }}>156</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>Sanctuaries</div>
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary), var(--pink))', 
        padding: '1rem', 
        borderRadius: 16, 
        margin: '1rem', 
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>🔴</span>
          <h3 style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 600 }}>Live Activity</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {LIVE_ACTIVITIES.map((activity, index) => (
            <div key={activity.id} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8, 
              background: 'rgba(255,255,255,0.1)', 
              padding: '8px 12px', 
              borderRadius: 8,
              fontSize: 14,
              color: '#fff'
            }}>
              <img src={activity.avatar} alt={activity.user} style={{ width: 24, height: 24, borderRadius: '50%' }} />
              <span><strong>{activity.user}</strong> {activity.action} {activity.target}</span>
              <span style={{ marginLeft: 'auto', opacity: 0.8, fontSize: 12 }}>{activity.time}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Urgent Campaigns */}
      <section style={{ margin: '2rem 1rem', padding: '1.5rem', background: 'var(--card)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 20 }}>🚨</span>
          <h2 style={{ margin: 0, fontFamily: 'Calistoga, serif', fontWeight: 300 }}>Urgent Campaigns</h2>
        </div>
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto', padding: '8px 0' }}>
          {URGENT_CAMPAIGNS.map(campaign => (
            <div key={campaign.id} style={{ 
              minWidth: 280, 
              background: 'var(--background)', 
              borderRadius: 12, 
              padding: 16, 
              border: '2px solid var(--primary)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <img src={campaign.image} alt={campaign.name} style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: 18 }}>{campaign.name}</h3>
                  <p style={{ margin: '0 0 8px 0', fontSize: 14, color: 'var(--primary)', fontWeight: 600 }}>{campaign.species} • {campaign.sanctuary}</p>
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--text)', opacity: 0.8 }}>{campaign.urgency}</p>
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span>${campaign.raised.toLocaleString()} raised</span>
                  <span style={{ color: 'var(--primary)' }}>{Math.round((campaign.raised/campaign.goal)*100)}%</span>
                </div>
                <div style={{ background: 'var(--gray)', borderRadius: 6, height: 8, overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${Math.round((campaign.raised/campaign.goal)*100)}%`, 
                    background: 'linear-gradient(90deg, var(--primary), var(--pink))', 
                    height: '100%' 
                  }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>⏰ {campaign.timeLeft} left</span>
                  <Link to={`/ambassadors/${campaign.id}`} className="button" style={{ padding: '6px 12px', fontSize: 12 }}>
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Animals with Interactive Elements */}
      <section style={{ margin: '2rem 1rem', padding: '1.5rem', background: 'var(--card)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, textAlign: 'center', marginBottom: 24 }}>Trending Animals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {TRENDING_ANIMALS.map(animal => (
            <div key={animal.id} style={{ 
              background: 'var(--background)', 
              borderRadius: 12, 
              padding: 16, 
              textAlign: 'center',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              ':hover': { transform: 'translateY(-2px)' }
            }}>
              <img src={animal.image} alt={animal.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 }} />
              <h3 style={{ margin: '0 0 8px 0', fontSize: 18 }}>{animal.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>❤️ {animal.likes}</span>
                <span style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>👥 {animal.followers}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                <button 
                  onClick={() => handleLike(animal.id)}
                  style={{ 
                    padding: '6px 12px', 
                    fontSize: 12, 
                    border: 'none', 
                    borderRadius: 6,
                    background: likedAnimals.has(animal.id) ? 'var(--primary)' : 'var(--gray)',
                    color: likedAnimals.has(animal.id) ? '#fff' : 'var(--text)',
                    cursor: 'pointer'
                  }}
                >
                  {likedAnimals.has(animal.id) ? '❤️ Liked' : '🤍 Like'}
                </button>
                <Link to={`/ambassadors/${animal.id}`} className="button" style={{ padding: '6px 12px', fontSize: 12 }}>
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Achievement Badges */}
      <section style={{ margin: '2rem 1rem', padding: '1.5rem', background: 'var(--card)', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, textAlign: 'center', marginBottom: 24 }}>Recent Achievements</h2>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ 
            background: 'var(--background)', 
            borderRadius: 12, 
            padding: 16, 
            textAlign: 'center',
            border: '2px solid var(--primary)'
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🏆</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>@Clara earned "Top Donor"</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>2 hours ago</div>
          </div>
          <div style={{ 
            background: 'var(--background)', 
            borderRadius: 12, 
            padding: 16, 
            textAlign: 'center',
            border: '2px solid var(--primary)'
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🌟</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>@Sam earned "Advocate"</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>4 hours ago</div>
          </div>
          <div style={{ 
            background: 'var(--background)', 
            borderRadius: 12, 
            padding: 16, 
            textAlign: 'center',
            border: '2px solid var(--primary)'
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>💝</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>@Jess earned "Helper"</div>
            <div style={{ fontSize: 12, color: 'var(--text)', opacity: 0.7 }}>6 hours ago</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ margin: '2rem 1rem', padding: '2rem', background: 'linear-gradient(135deg, var(--primary), var(--pink))', borderRadius: 16, textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, marginBottom: 16 }}>Join the Movement</h2>
        <p style={{ marginBottom: 24, opacity: 0.9 }}>Be part of a community that's making a real difference in animals' lives.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/ambassador-hub" className="button" style={{ background: '#fff', color: 'var(--primary)' }}>
            Find Animals to Support
          </Link>
          <Link to="/community" className="button" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  );
} 