import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileSanctuaryProfile = () => {
  const [selectedTab, setSelectedTab] = useState('animals');
  const navigate = useNavigate();

  // Mock sanctuary data
  const sanctuary = {
    name: 'Alveus Sanctuary',
    username: '@alveus_sanctuary',
    avatar: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200',
    coverImg: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop&crop=center',
    bio: 'Dedicated to rescuing and rehabilitating farm animals. Providing a safe haven for animals in need. 🐐🐷🐮',
    location: 'Austin, Texas',
    founded: '2019',
    animals: 45,
    followers: 1247,
    donations: 156,
    volunteers: 23
  };

  // Mock sanctuary animals
  const sanctuaryAnimals = [
    {
      id: 1,
      name: 'Stompy',
      species: 'Goat',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      status: 'Available for adoption',
      followers: 1247
    },
    {
      id: 2,
      name: 'Luna',
      species: 'Cow',
      image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400',
      status: 'Resident',
      followers: 892
    },
    {
      id: 3,
      name: 'Max',
      species: 'Horse',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400',
      status: 'Available for adoption',
      followers: 2034
    }
  ];

  // Mock sanctuary posts
  const sanctuaryPosts = [
    {
      id: 1,
      title: 'New arrival: Meet Daisy! 🐮',
      content: 'Daisy is a 2-year-old dairy cow who was rescued from a neglectful situation. She\'s settling in well!',
      image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400',
      likes: 234,
      comments: 45,
      timeAgo: '1d'
    },
    {
      id: 2,
      title: 'Volunteer appreciation day!',
      content: 'Thank you to all our amazing volunteers who help us care for these beautiful animals every day.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      likes: 156,
      comments: 23,
      timeAgo: '3d'
    }
  ];

  // Mock donations received
  const donationsReceived = [
    {
      id: 1,
      donor: 'Sarah Johnson',
      amount: 50,
      date: '2024-01-15',
      message: 'For Stompy\'s care!'
    },
    {
      id: 2,
      donor: 'Mike Chen',
      amount: 100,
      date: '2024-01-14',
      message: 'Keep up the great work!'
    },
    {
      id: 3,
      donor: 'Emma Davis',
      amount: 25,
      date: '2024-01-13',
      message: 'For all the animals'
    }
  ];

  const tabs = [
    { id: 'animals', name: 'Animals', icon: '🐾' },
    { id: 'posts', name: 'Posts', icon: '📝' },
    { id: 'donations', name: 'Donations', icon: '💰' },
    { id: 'volunteers', name: 'Volunteers', icon: '👥' }
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
          Sanctuary Profile
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
            src={sanctuary.avatar}
            alt={sanctuary.name}
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
              {sanctuary.name}
            </h2>
            <p style={{
              margin: '0 0 4px 0',
              fontSize: '14px',
              color: '#666'
            }}>
              {sanctuary.username}
            </p>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: '12px',
              color: '#999'
            }}>
              📍 {sanctuary.location} • Founded {sanctuary.founded}
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
          {sanctuary.bio}
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
              {sanctuary.animals}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Animals
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {sanctuary.followers}
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
              {sanctuary.donations}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Donations
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#FF6B6B'
            }}>
              {sanctuary.volunteers}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#666'
            }}>
              Volunteers
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
        {selectedTab === 'animals' && (
          <div>
            {sanctuaryAnimals.map(animal => (
              <div
                key={animal.id}
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
                  alignItems: 'center',
                  gap: 12
                }}>
                  <img
                    src={animal.image}
                    alt={animal.name}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {animal.name}
                    </h3>
                    <p style={{
                      margin: '0 0 4px 0',
                      fontSize: 14,
                      color: '#666'
                    }}>
                      {animal.species}
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: 12,
                      color: '#999'
                    }}>
                      {animal.status} • {animal.followers} followers
                    </p>
                  </div>
                  <button style={{
                    padding: '6px 12px',
                    backgroundColor: '#FF6B6B',
                    color: 'white',
                    border: 'none',
                    borderRadius: 16,
                    fontSize: 12,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'posts' && (
          <div>
            {sanctuaryPosts.map(post => (
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
            {donationsReceived.map(donation => (
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
                    {donation.donor}
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
                  color: '#666',
                  marginBottom: 4
                }}>
                  {new Date(donation.date).toLocaleDateString()}
                </div>
                <div style={{
                  fontSize: 14,
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  "{donation.message}"
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'volunteers' && (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#666'
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16
            }}>
              👥
            </div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333'
            }}>
              Volunteer Management
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14
            }}>
              Manage your volunteer team here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSanctuaryProfile; 