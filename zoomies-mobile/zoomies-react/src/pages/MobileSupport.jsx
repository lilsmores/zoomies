import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileAmbassadors = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  // Filter categories
  const filters = [
    { id: 'all', name: 'All', icon: '🏠' },
    { id: 'featured', name: 'Featured', icon: '⭐' },
    { id: 'dogs', name: 'Dogs', icon: '🐕' },
    { id: 'cats', name: 'Cats', icon: '🐱' },
    { id: 'horses', name: 'Horses', icon: '🐎' },
    { id: 'farm', name: 'Farm Animals', icon: '🐄' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦊' }
  ];

  // Mock data for ambassador animals (like the website's Ambassador Hub)
  const ambassadorAnimals = [
    {
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
      category: 'farm'
    },
    {
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
      category: 'farm'
    },
    {
      id: 'bella',
      name: 'Bella the Pig',
      species: 'Pig',
      sanctuary: 'Sunny Acres',
      profileImg: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 600, goal: 1800 },
      featured: false,
      story: 'Bella loves belly rubs and mud baths! She was rescued from a factory farm and now lives a happy life.',
      followers: 456,
      category: 'farm'
    },
    {
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
      category: 'horses'
    },
    {
      id: 'shadow',
      name: 'Shadow the Dog',
      species: 'Dog',
      sanctuary: 'Happy Tails Rescue',
      profileImg: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 450, goal: 800 },
      featured: false,
      story: 'Shadow was found injured on the streets. Now he\'s a therapy dog helping other rescue dogs heal.',
      followers: 567,
      category: 'dogs'
    },
    {
      id: 'whiskers',
      name: 'Whiskers the Cat',
      species: 'Cat',
      sanctuary: 'Feline Friends',
      profileImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 300, goal: 600 },
      featured: false,
      story: 'Whiskers is a senior cat who loves sunbathing and gentle pets. She helps socialize shy kittens.',
      followers: 234,
      category: 'cats'
    },
    {
      id: 'ranger',
      name: 'Ranger the Fox',
      species: 'Fox',
      sanctuary: 'Wildlife Refuge',
      profileImg: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=100&h=100&fit=crop&crop=center',
      coverImg: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=200&fit=crop&crop=center',
      donation: { raised: 800, goal: 1200 },
      featured: false,
      story: 'Ranger was injured by a car and can\'t be released. He now educates visitors about wildlife.',
      followers: 789,
      category: 'wildlife'
    }
  ];

  // Filter animals based on selected filter and search query
  const filteredAnimals = ambassadorAnimals.filter(animal => {
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'featured' && animal.featured) ||
                         animal.category === selectedFilter;
    const matchesSearch = searchQuery === '' || 
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.sanctuary.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const currentFilter = filters.find(f => f.id === selectedFilter);

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleAnimalClick = (animalId) => {
    // Navigate to the animal's profile page
    navigate(`/ambassadors/${animalId}`);
  };

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
        justifyContent: 'space-between'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <img
            src="/LogoBlack.png"
            alt="Zoomies"
            style={{
              width: 56,
              height: 56,
              objectFit: 'contain'
            }}
          />
          <h1 style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 300,
            color: '#FF6B6B',
            fontFamily: 'Calistoga, serif'
          }}>
            Zoomies
          </h1>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
          <button
            onClick={() => setShowSearch(!showSearch)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: 20,
              cursor: 'pointer',
              padding: 8,
              color: '#FF6B6B'
            }}
          >
            🔍
          </button>
          <button
            onClick={() => window.location.href = '/profile'}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: 20,
              cursor: 'pointer',
              padding: 8,
              color: '#FF6B6B'
            }}
          >
            👤
          </button>
        </div>
      </div>

      {/* Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '16px 16px 12px 16px',
        borderBottom: '1px solid #e0e0e0',
        boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#18171C',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Ambassador Animals
          </h1>
        </div>
        


        <p style={{
          margin: '4px 0 0 0',
          fontSize: '14px',
          color: '#666'
        }}>
          {currentFilter ? `${currentFilter.name} • ${filteredAnimals.length} animals` : 'Discover amazing animals from sanctuaries around the world'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 16px',
        borderBottom: '1px solid #E0E0E0',
        overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          gap: 8,
          minWidth: 'max-content'
        }}>
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 24,
                border: 'none',
                background: selectedFilter === filter.id ? '#FF6B6B' : '#F8F6FF',
                color: selectedFilter === filter.id ? '#FFFFFF' : '#666',
                fontSize: 14,
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: selectedFilter === filter.id ? '0 2px 8px rgba(255, 107, 107, 0.3)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {filter.icon} {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Animals Grid */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#F8F6FF'
      }}>
        {filteredAnimals.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#666'
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16
            }}>
              🐾
            </div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#18171C'
            }}>
              No animals found
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14
            }}>
              {searchQuery ? 'Try adjusting your search terms' : 'No animals in this category yet'}
            </p>
          </div>
        ) : (
          filteredAnimals.map(animal => (
            <div
              key={animal.id}
              onClick={() => handleAnimalClick(animal.id)}
              style={{
                backgroundColor: 'white',
                borderRadius: 16,
                marginBottom: 16,
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)',
                border: '1px solid #F8F6FF',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 107, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 107, 107, 0.1)';
              }}
            >
              {/* Cover Image */}
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
                {animal.featured && (
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: 'linear-gradient(90deg, #D4A5F7, #F0B8D9)',
                    color: '#18171C',
                    padding: '4px 8px',
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}>
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Animal Content */}
              <div style={{
                padding: 16
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 12
                }}>
                  <img
                    src={animal.profileImg}
                    alt={animal.name}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: 12
                    }}
                  />
                  <div>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#18171C'
                    }}>
                      {animal.name}
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: 14,
                      color: '#FF6B6B',
                      fontWeight: 'bold'
                    }}>
                      {animal.species}
                    </p>
                  </div>
                </div>

                <p style={{
                  margin: '0 0 8px 0',
                  fontSize: 14,
                  color: '#666'
                }}>
                  🏠 {animal.sanctuary}
                </p>

                <p style={{
                  margin: '0 0 16px 0',
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.4
                }}>
                  {animal.story}
                </p>

                {/* Progress Bar */}
                <div style={{
                  marginBottom: 16
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 12,
                    marginBottom: 6
                  }}>
                    <span style={{
                      color: '#666'
                    }}>
                      ${animal.donation.raised.toLocaleString()} raised
                    </span>
                    <span style={{
                      color: '#666'
                    }}>
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
                        background: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)',
                        height: '100%',
                        borderRadius: 6
                      }}
                    />
                  </div>
                </div>

                {/* Animal Stats */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                  fontSize: 12,
                  color: '#666'
                }}>
                  <span>Goal: ${animal.donation.goal.toLocaleString()}</span>
                  <span>{animal.followers.toLocaleString()} followers</span>
                </div>

                {/* Actions */}
                <div style={{
                  display: 'flex',
                  gap: 12
                }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Donating to ${animal.name}!`);
                    }}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      backgroundColor: '#FF6B6B',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Donate
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Following ${animal.name}!`);
                    }}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      backgroundColor: '#FFB3E6',
                      color: '#18171C',
                      border: 'none',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create Campaign Button */}
      <div style={{
        position: 'fixed',
        bottom: 80,
        right: 16,
        zIndex: 100
      }}>
        <button style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
          border: 'none',
          color: '#FFFFFF',
          fontSize: 24,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(255, 107, 107, 0.4)'
        }}>
          ✏️
        </button>
      </div>
    </div>
  );
};

export default MobileAmbassadors; 