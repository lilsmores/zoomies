import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MobileAmbassadorProfile = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('story');

  // Mock data for ambassador animals (same as in MobileAmbassadors)
  const ambassadorAnimals = {
    'stompy': {
      id: 'stompy',
      name: 'Stompy the Goat',
      species: 'Goat',
      sanctuary: 'Alveus Sanctuary',
      profileImg: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 815, goal: 2000 },
      featured: true,
      story: 'Stompy loves to climb and explore! He was rescued from a neglectful situation and now spends his days playing with his goat friends.',
      followers: 1247,
      category: 'farm',
      age: '3 years old',
      location: 'Austin, Texas',
      rescueDate: 'March 2022',
      personality: ['Playful', 'Adventurous', 'Social'],
      needs: ['Special diet', 'Regular vet checkups', 'Enrichment toys'],
      feeling: 'Silly',
      feelingEmoji: '🤪',
      feelingUpdate: '2 hours ago',
      photos: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center'
      ],
      updates: [
        {
          id: 1,
          date: '2 days ago',
          title: 'Stompy got a new climbing structure!',
          content: 'Thanks to your donations, Stompy now has a brand new climbing structure in his enclosure. He absolutely loves it!',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop&crop=center'
        },
        {
          id: 2,
          date: '1 week ago',
          title: 'Vet checkup went great!',
          content: 'Stompy had his annual checkup and the vet says he\'s in perfect health. His hooves are looking great too!',
          image: null
        }
      ]
    },
    'luna': {
      id: 'luna',
      name: 'Luna the Cow',
      species: 'Cow',
      sanctuary: 'Gentle Barn',
      profileImg: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 1200, goal: 2500 },
      featured: true,
      story: 'Luna is the gentlest soul you\'ll ever meet. She loves belly rubs and spending time with visitors.',
      followers: 892,
      category: 'farm',
      age: '5 years old',
      location: 'Los Angeles, California',
      rescueDate: 'January 2021',
      personality: ['Gentle', 'Loving', 'Calm'],
      needs: ['Hay and fresh grass', 'Regular grooming', 'Social interaction'],
      feeling: 'Peaceful',
      feelingEmoji: '😌',
      feelingUpdate: '5 hours ago',
      photos: [
        'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400&h=300&fit=crop&crop=center'
      ],
      updates: [
        {
          id: 1,
          date: '3 days ago',
          title: 'Luna\'s new pasture is ready!',
          content: 'We\'ve expanded Luna\'s pasture area with fresh grass and new shade structures. She\'s loving the extra space!',
          image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?w=400&h=200&fit=crop&crop=center'
        }
      ]
    },
    'max': {
      id: 'max',
      name: 'Max the Horse',
      species: 'Horse',
      sanctuary: 'Freedom Reins',
      profileImg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 2000, goal: 3000 },
      featured: true,
      story: 'Max is a retired racehorse who loves carrots and long walks. He helps other horses heal from trauma.',
      followers: 2034,
      category: 'horses',
      age: '12 years old',
      location: 'Nashville, Tennessee',
      rescueDate: 'June 2020',
      personality: ['Wise', 'Patient', 'Healing'],
      needs: ['Specialized feed', 'Regular farrier care', 'Therapy sessions'],
      feeling: 'Wise',
      feelingEmoji: '🧠',
      feelingUpdate: '1 day ago',
      photos: [
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop&crop=center'
      ],
      updates: [
        {
          id: 1,
          date: '1 day ago',
          title: 'Max helped a new rescue horse!',
          content: 'Max spent time with our newest rescue, helping her feel safe and comfortable in her new home.',
          image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=200&fit=crop&crop=center'
        }
      ]
    }
  };

  const animal = ambassadorAnimals[animalId];

  if (!animal) {
    return (
      <div style={{
        height: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Animal not found</h2>
          <button
            onClick={() => navigate('/ambassadors')}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(90deg, #E6B6FF, #FFB3E6)',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            Back to Ambassadors
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'story', name: 'Story', icon: '📖' },
    { id: 'photos', name: 'Photos', icon: '📸' },
    { id: 'updates', name: 'Updates', icon: '📢' },
    { id: 'support', name: 'Support', icon: '💝' }
  ];

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Branded Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <img
          src="/LogoBlack.png"
          alt="Zoomies"
          style={{
            width: 48,
            height: 48,
            objectFit: 'contain'
          }}
        />
        <h1 style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FF6B6B',
          fontFamily: 'Calistoga, serif'
        }}>
          Zoomies
        </h1>
      </div>

      {/* Back Button and Header */}
      <div style={{
        position: 'relative',
        height: 200
      }}>
        <img
          src={animal.coverImg}
          alt={animal.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
        }} />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/ambassadors')}
          style={{
            position: 'absolute',
            top: 40,
            left: 16,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: 20,
            width: 40,
            height: 40,
            fontSize: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ←
        </button>

        {/* Animal Info Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          color: 'white'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 8
          }}>
            <img
              src={animal.profileImg}
              alt={animal.name}
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                objectFit: 'cover',
                marginRight: 12,
                border: '3px solid white'
              }}
            />
            <div>
              <h1 style={{
                margin: '0 0 4px 0',
                fontSize: 24,
                fontWeight: 'bold'
              }}>
                {animal.name}
              </h1>
              <p style={{
                margin: 0,
                fontSize: 16,
                opacity: 0.9
              }}>
                {animal.species} • {animal.sanctuary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feeling Status Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 16px',
          backgroundColor: '#f8f9fa',
          borderRadius: 12,
          border: '2px solid #E6B6FF'
        }}>
          <div style={{
            fontSize: 24
          }}>
            {animal.feelingEmoji}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#333'
            }}>
              {animal.name} is feeling: {animal.feeling}
            </div>
            <div style={{
              fontSize: 12,
              color: '#666'
            }}>
              Updated {animal.feelingUpdate}
            </div>
          </div>
          {localStorage.getItem('demoUser') === 'sanctuary' && (
            <button style={{
              padding: '6px 12px',
              background: '#FF6B6B',
              color: 'white',
              border: 'none',
              borderRadius: 16,
              fontSize: 12,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Update
            </button>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          display: 'flex',
          gap: 8
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: 20,
                border: 'none',
                background: activeTab === tab.id ? '#FF6B6B' : '#F8F6FF',
                color: activeTab === tab.id ? 'white' : '#666',
                fontSize: 14,
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4
              }}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }}>
        {activeTab === 'story' && (
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 16,
              marginBottom: 16
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333'
              }}>
                About {animal.name}
              </h3>
              <p style={{
                margin: '0 0 16px 0',
                fontSize: 14,
                color: '#666',
                lineHeight: 1.5
              }}>
                {animal.story}
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 16
              }}>
                <div>
                  <strong style={{ color: '#333' }}>Age:</strong>
                  <p style={{ margin: '4px 0 0 0', color: '#666' }}>{animal.age}</p>
                </div>
                <div>
                  <strong style={{ color: '#333' }}>Location:</strong>
                  <p style={{ margin: '4px 0 0 0', color: '#666' }}>{animal.location}</p>
                </div>
                <div>
                  <strong style={{ color: '#333' }}>Rescued:</strong>
                  <p style={{ margin: '4px 0 0 0', color: '#666' }}>{animal.rescueDate}</p>
                </div>
                <div>
                  <strong style={{ color: '#333' }}>Followers:</strong>
                  <p style={{ margin: '4px 0 0 0', color: '#666' }}>{animal.followers.toLocaleString()}</p>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <strong style={{ color: '#333' }}>Personality:</strong>
                <div style={{
                  display: 'flex',
                  gap: 8,
                  marginTop: 8
                }}>
                  {animal.personality.map(trait => (
                    <span
                      key={trait}
                      style={{
                        padding: '4px 8px',
                        background: 'linear-gradient(90deg, #E6B6FF, #FFB3E6)',
                        color: 'white',
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: 'bold'
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <strong style={{ color: '#333' }}>Current Needs:</strong>
                <ul style={{
                  margin: '8px 0 0 0',
                  paddingLeft: 20,
                  color: '#666'
                }}>
                  {animal.needs.map(need => (
                    <li key={need} style={{ marginBottom: 4 }}>{need}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12
            }}>
              {animal.photos.map((photo, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <img
                    src={photo}
                    alt={`${animal.name} photo ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 150,
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'updates' && (
          <div>
            {animal.updates.map(update => (
              <div
                key={update.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 16,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8
                }}>
                  <span style={{
                    fontSize: 12,
                    color: '#666'
                  }}>
                    {update.date}
                  </span>
                </div>
                
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {update.title}
                </h4>
                
                <p style={{
                  margin: '0 0 12px 0',
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.4
                }}>
                  {update.content}
                </p>

                {update.image && (
                  <img
                    src={update.image}
                    alt={update.title}
                    style={{
                      width: '100%',
                      height: 150,
                      objectFit: 'cover',
                      borderRadius: 8
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'support' && (
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 16,
              marginBottom: 16
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333'
              }}>
                Support {animal.name}
              </h3>
              
              <div style={{
                marginBottom: 16
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 14,
                  marginBottom: 6
                }}>
                  <span style={{ color: '#666' }}>
                    ${animal.donation.raised.toLocaleString()} raised
                  </span>
                  <span style={{ color: '#666' }}>
                    {Math.round((animal.donation.raised/animal.donation.goal)*100)}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  backgroundColor: '#f0f0f0',
                  borderRadius: 6,
                  height: 8,
                  overflow: 'hidden'
                }}>
                  <div
                    style={{
                      width: `${Math.round((animal.donation.raised/animal.donation.goal)*100)}%`,
                      background: 'linear-gradient(90deg, #E6B6FF, #FFB3E6)',
                      height: '100%',
                      borderRadius: 6
                    }}
                  />
                </div>
                <p style={{
                  margin: '8px 0 0 0',
                  fontSize: 12,
                  color: '#666'
                }}>
                  Goal: ${animal.donation.goal.toLocaleString()}
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: 12,
                marginBottom: 16
              }}>
                <button style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: 'linear-gradient(90deg, #E6B6FF, #FFB3E6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  Donate Now
                </button>
                <button style={{
                  flex: 1,
                  padding: '12px 16px',
                  backgroundColor: '#f0f0f0',
                  color: '#666',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  Follow
                </button>
              </div>

              <div style={{
                backgroundColor: '#f8f9fa',
                padding: 12,
                borderRadius: 8,
                fontSize: 14,
                color: '#666'
              }}>
                <strong>Your support helps provide:</strong>
                <ul style={{
                  margin: '8px 0 0 0',
                  paddingLeft: 20
                }}>
                  {animal.needs.map(need => (
                    <li key={need} style={{ marginBottom: 4 }}>{need}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileAmbassadorProfile; 