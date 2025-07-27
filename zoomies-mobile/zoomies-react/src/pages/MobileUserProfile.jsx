import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileUserProfile = () => {
  const [selectedTab, setSelectedTab] = useState('posts');
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    username: '@rescue_mom_23',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
    bio: 'Animal lover and foster parent. Helping rescue animals find their forever homes! 🐕❤️',
    location: 'New York, NY',
    joined: 'March 2023',
    following: 156,
    followers: 234,
    posts: 45,
    donations: 12
  };

  // Mock user posts
  const userPosts = [
    {
      id: 1,
      title: 'Luna\'s adoption day! 🐕',
      content: 'After 3 months of fostering, Luna finally found her forever home!',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400',
      likes: 156,
      comments: 23,
      timeAgo: '2d'
    },
    {
      id: 2,
      title: 'New foster pup Max',
      content: 'Meet Max! He\'s a 2-year-old golden retriever mix looking for his forever family.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
      likes: 89,
      comments: 15,
      timeAgo: '1w'
    },
    {
      id: 3,
      title: 'Volunteering at the shelter',
      content: 'Spent the day helping out at Happy Tails Sanctuary. These animals are amazing!',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
      likes: 234,
      comments: 45,
      timeAgo: '2w'
    }
  ];

  // Mock donations
  const donations = [
    {
      id: 1,
      sanctuary: 'Happy Tails Sanctuary',
      amount: 50,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      sanctuary: 'Feline Friends Rescue',
      amount: 25,
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: 3,
      sanctuary: 'Equine Haven',
      amount: 100,
      date: '2024-01-05',
      status: 'completed'
    }
  ];

  const tabs = [
    { id: 'posts', name: 'Posts', icon: '📝' },
    { id: 'donations', name: 'Donations', icon: '💰' },
    { id: 'favorites', name: 'Favorites', icon: '❤️' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('demoUser');
    navigate('/profile');
  };

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#f5f5f5',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar with Logout */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
                      <button
                onClick={handleLogout}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#FF6B6B',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
        <h1 style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333'
        }}>
          Profile
        </h1>
        <div style={{ width: 60 }}></div> {/* Spacer for centering */}
      </div>

      {/* Profile Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '40px 16px 16px 16px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        {/* Profile Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 16
        }}>
          <img
            src={user.avatar}
            alt={user.name}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginRight: 16
            }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{
              margin: '0 0 4px 0',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {user.name}
            </h2>
            <p style={{
              margin: '0 0 4px 0',
              fontSize: '14px',
              color: '#666'
            }}>
              {user.username}
            </p>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: '12px',
              color: '#999'
            }}>
              📍 {user.location} • Joined {user.joined}
            </p>
          </div>
          <button style={{
            padding: '8px 16px',
            borderRadius: 20,
            border: '1px solid #FF6B6B',
            backgroundColor: 'white',
            color: '#FF6B6B',
            fontSize: 14,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Edit
          </button>
        </div>

        {/* Bio */}
        <p style={{
          margin: '0 0 16px 0',
          fontSize: '14px',
          lineHeight: 1.4,
          color: '#333'
        }}>
          {user.bio}
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '16px 0',
          borderTop: '1px solid #f0f0f0'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {user.posts}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Posts
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {user.followers}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Followers
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {user.following}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Following
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#FF6B6B'
            }}>
              {user.donations}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Donations
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              style={{
                flex: 1,
                padding: '16px',
                border: 'none',
                backgroundColor: 'transparent',
                borderBottom: selectedTab === tab.id ? '2px solid #e0e0e0' : '2px solid transparent',
                color: selectedTab === tab.id ? '#FF6B6B' : '#666',
                fontSize: 14,
                fontWeight: selectedTab === tab.id ? 'bold' : 'normal',
                cursor: 'pointer'
              }}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }}>
        {selectedTab === 'posts' && (
          <div>
            {userPosts.map(post => (
              <div
                key={post.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 12,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {post.title}
                </h3>
                <p style={{
                  margin: '0 0 12px 0',
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.4
                }}>
                  {post.content}
                </p>
                {post.image && (
                  <div style={{
                    marginBottom: 12,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}>
                    <img
                      src={post.image}
                      alt="Post"
                      style={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontSize: 12,
                  color: '#666'
                }}>
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'donations' && (
          <div>
            {donations.map(donation => (
              <div
                key={donation.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 12,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8
                }}>
                  <h3 style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {donation.sanctuary}
                  </h3>
                  <span style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#FF6B6B'
                  }}>
                    ${donation.amount}
                  </span>
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#666'
                }}>
                  {new Date(donation.date).toLocaleDateString()}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: 8
                }}>
                  <span style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#4CAF50'
                  }} />
                  <span style={{
                    fontSize: 12,
                    color: '#4CAF50'
                  }}>
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'favorites' && (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#666'
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16
            }}>
              ❤️
            </div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333'
            }}>
              No favorites yet
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14
            }}>
              Posts you like will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileUserProfile; 