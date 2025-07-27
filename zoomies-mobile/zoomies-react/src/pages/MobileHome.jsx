import React, { useState } from 'react';

const MobileHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedType, setFeedType] = useState('sanctuaries'); // 'sanctuaries' or 'community'

  // Mock data for FYP feed - Sanctuaries
  const sanctuaryFeedItems = [
    {
      id: 1,
      type: 'video',
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400',
      title: 'Luna the Rescue Dog',
      sanctuary: 'Happy Tails Sanctuary',
      likes: 1247,
      shares: 89,
      comments: 156,
      description: 'Luna finally found her forever home! 🐕❤️'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
      title: 'Whiskers the Cat',
      sanctuary: 'Feline Friends Rescue',
      likes: 892,
      shares: 45,
      comments: 78,
      description: 'Whiskers loves his new toys! 🐱'
    },
    {
      id: 3,
      type: 'video',
      url: 'https://example.com/video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1543852786-1cf6624b998d?w=400',
      title: 'Buddy the Horse',
      sanctuary: 'Equine Haven',
      likes: 2156,
      shares: 234,
      comments: 312,
      description: 'Buddy\'s first ride after recovery! 🐎'
    }
  ];

  // Mock data for FYP feed - Community
  const communityFeedItems = [
    {
      id: 4,
      type: 'video',
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
      title: 'My rescue pup Max',
      user: '@animal_lover_23',
      likes: 567,
      shares: 23,
      comments: 45,
      description: 'Max loves his daily walks! 🐕'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
      title: 'Adopted this sweetie',
      user: '@rescue_mom',
      likes: 1234,
      shares: 67,
      comments: 89,
      description: 'Best decision ever! 🐱❤️'
    },
    {
      id: 6,
      type: 'video',
      url: 'https://example.com/video4.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
      title: 'Foster fail success story',
      user: '@foster_parent',
      likes: 892,
      shares: 34,
      comments: 56,
      description: 'Couldn\'t let her go! 🐕'
    }
  ];

  const currentFeedItems = feedType === 'sanctuaries' ? sanctuaryFeedItems : communityFeedItems;
  const currentItem = currentFeedItems[currentIndex];

  const handleSwipe = (direction) => {
    if (direction === 'up' && currentIndex < currentFeedItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'down' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleToggleFeed = () => {
    setFeedType(feedType === 'sanctuaries' ? 'community' : 'sanctuaries');
    setCurrentIndex(0); // Reset to first item when switching feeds
  };

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Toggle Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '40px 20px 20px 20px',
        background: 'linear-gradient(rgba(0,0,0,0.5), transparent)'
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 25,
          padding: 4,
          backdropFilter: 'blur(10px)'
        }}>
          <button
            onClick={() => setFeedType('sanctuaries')}
            style={{
              flex: 1,
              padding: '8px 16px',
              borderRadius: 20,
              border: 'none',
              backgroundColor: feedType === 'sanctuaries' ? '#FF6B6B' : 'transparent',
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Support
          </button>
          <button
            onClick={() => setFeedType('community')}
            style={{
              flex: 1,
              padding: '8px 16px',
              borderRadius: 20,
              border: 'none',
              backgroundColor: feedType === 'community' ? '#FF6B6B' : 'transparent',
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Community
          </button>
        </div>
      </div>

      {/* Main Feed Item */}
      <div style={{
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Image/Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${currentItem.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }} />
        
        {/* Content Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          color: 'white'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold' }}>
            {currentItem.title}
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', opacity: 0.9 }}>
            {feedType === 'sanctuaries' ? currentItem.sanctuary : currentItem.user}
          </p>
          <p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
            {currentItem.description}
          </p>
        </div>

        {/* Right Side Actions */}
        <div style={{
          position: 'absolute',
          right: 16,
          bottom: 120,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              marginBottom: 4
            }}>
              ❤️
            </div>
            <span style={{ fontSize: 12, color: 'white' }}>{currentItem.likes}</span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              marginBottom: 4
            }}>
              💬
            </div>
            <span style={{ fontSize: 12, color: 'white' }}>{currentItem.comments}</span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              marginBottom: 4
            }}>
              🔄
            </div>
            <span style={{ fontSize: 12, color: 'white' }}>{currentItem.shares}</span>
          </div>

          {feedType === 'sanctuaries' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FF6B6B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                marginBottom: 4
              }}>
                💰
              </div>
              <span style={{ fontSize: 12, color: 'white' }}>Donate</span>
            </div>
          )}
        </div>

        {/* Navigation Hint */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: 14,
          opacity: 0.7,
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          Swipe up for more
        </div>
      </div>
    </div>
  );
};

export default MobileHome; 