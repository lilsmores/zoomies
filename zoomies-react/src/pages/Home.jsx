import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: 0, maxWidth: 1200, margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem 2rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Calistoga, serif', fontSize: 48, margin: 0, color: 'var(--primary)' }}>Zoomies</h1>
        <p style={{ fontSize: 22, margin: '1rem 0 2rem 0', color: 'var(--text)' }}>
          Empowering animal sanctuaries and uniting animal lovers through joyful fundraising and community.
        </p>
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          <Link to="/ambassador-hub" className="button">Support an Animal</Link>
          <Link to="/community" className="button">Join the Community</Link>
        </div>
      </section>
      {/* Trending Ambassadors Carousel */}
      <section style={{ margin: '2rem 0', padding: '2rem 0', background: 'var(--card)', borderRadius: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, textAlign: 'center', marginBottom: 24 }}>Trending Ambassadors</h2>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Sample trending animals */}
          <Link to="/ambassadors/stompy" style={{ textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center" alt="Stompy" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
            <div>Stompy</div>
          </Link>
          <Link to="/ambassadors/luna" style={{ textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=100&h=100&fit=crop&crop=center" alt="Luna" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
            <div>Luna</div>
          </Link>
          <Link to="/ambassadors/bella" style={{ textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=100&h=100&fit=crop&crop=center" alt="Bella" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
            <div>Bella</div>
          </Link>
          <Link to="/ambassadors/max" style={{ textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=100&h=100&fit=crop&crop=center" alt="Max" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 8 }} />
            <div>Max</div>
          </Link>
        </div>
      </section>
      {/* Why Zoomies Section */}
      <section style={{ margin: '2rem 0', padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300 }}>Why Zoomies?</h2>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3>Transparent Donations</h3>
            <p>Track your impact and see exactly where your support goes.</p>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3>Supporter Engagement</h3>
            <p>Follow, comment, and celebrate your favorite animals and sanctuaries.</p>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3>Fundraising Tools</h3>
            <p>Sanctuaries get powerful tools to reach more supporters and raise more funds.</p>
          </div>
        </div>
      </section>
      {/* Community Shoutouts */}
      <section style={{ margin: '2rem 0', padding: '2rem 0', background: 'var(--card)', borderRadius: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300, textAlign: 'center', marginBottom: 24 }}>Community Shoutouts</h2>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--background)', borderRadius: 16, padding: 24, minWidth: 220 }}>
            <strong>@Clara</strong> donated $50 to Stompy!
          </div>
          <div style={{ background: 'var(--background)', borderRadius: 16, padding: 24, minWidth: 220 }}>
            <strong>@Sam</strong> posted a rescue story in Community.
          </div>
          <div style={{ background: 'var(--background)', borderRadius: 16, padding: 24, minWidth: 220 }}>
            <strong>@Jess</strong> earned the "Advocate" badge.
          </div>
        </div>
      </section>
      {/* Testimonials & Logos */}
      <section style={{ margin: '2rem 0', padding: '2rem 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Calistoga, serif', fontWeight: 300 }}>What People Are Saying</h2>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, fontStyle: 'italic', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            “Zoomies made it so easy to support my favorite sanctuary!”<br /><span style={{ fontWeight: 600 }}>– Linda S.</span>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, fontStyle: 'italic', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            “I love seeing updates from the animals I support.”<br /><span style={{ fontWeight: 600 }}>– James R.</span>
          </div>
          <div style={{ background: 'var(--card)', borderRadius: 16, padding: 24, minWidth: 220, fontStyle: 'italic', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            “The community is so positive and welcoming!”<br /><span style={{ fontWeight: 600 }}>– Megan T.</span>
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 32 }}>
          <img src="https://placehold.co/100x40?text=Sanctuary+Logo" alt="Sanctuary Logo" style={{ opacity: 0.7 }} />
          <img src="https://placehold.co/100x40?text=Partner+Logo" alt="Partner Logo" style={{ opacity: 0.7 }} />
        </div>
      </section>
    </div>
  );
} 