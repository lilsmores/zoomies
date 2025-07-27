import React, { useState } from 'react';

const MobileCommunity = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSubCommunity, setSelectedSubCommunity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Filter categories
  const filters = [
    { id: 'all', name: 'All', icon: '🏠 ' },
    { id: 'adoption', name: 'Adoption', icon: '🐕 ' },
    { id: 'fostering', name: 'Fostering', icon: '🏠 ' },
    { id: 'volunteering', name: 'Volunteering', icon: '🤝 ' },
    { id: 'fundraising', name: 'Fundraising', icon: '💰 ' },
    { id: 'animal-care', name: 'Animal Care', icon: '🏥 ' },
    { id: 'rescue-stories', name: 'Rescue Stories', icon: '🆘 ' },
    { id: 'sanctuary-life', name: 'Sanctuary Life', icon: '🏞️ ' },
    { id: 'training', name: 'Training', icon: '🎓 ' },
    { id: 'emergency-help', name: 'Emergency Help', icon: '🚨 ' }
  ];

  // Sub-communities organized by filter
  const subCommunitiesByFilter = {
    'animal-care': [
      { id: 'corn-snake-care', name: '/Corn Snake Care', members: 234, description: 'Care tips for corn snakes' },
      { id: 'blue-tongue-skink-care', name: '/Blue Tongue Skink Care', members: 156, description: 'Care for blue tongue skinks' },
      { id: 'rabbit-care', name: '/Rabbit Care', members: 445, description: 'Everything about rabbit care' },
      { id: 'senior-dog-care', name: '/Senior Dog Care', members: 678, description: 'Caring for older dogs' },
      { id: 'cat-health', name: '/Cat Health & Care', members: 892, description: 'Feline health and wellness' },
      { id: 'bird-care', name: '/Bird Care', members: 334, description: 'Avian care and health' }
    ],
    'adoption': [
      { id: 'dog-adoption', name: '/Dog Adoption', members: 1234, description: 'Dog adoption stories and tips' },
      { id: 'cat-adoption', name: '/Cat Adoption', members: 987, description: 'Cat adoption experiences' },
      { id: 'exotic-pet-adoption', name: '/Exotic Pet Adoption', members: 456, description: 'Adopting exotic animals' },
      { id: 'senior-pet-adoption', name: '/Senior Pet Adoption', members: 789, description: 'Adopting older pets' }
    ],
    'fostering': [
      { id: 'puppy-fostering', name: '/Puppy Fostering', members: 567, description: 'Fostering puppies' },
      { id: 'kitten-fostering', name: '/Kitten Fostering', members: 432, description: 'Fostering kittens' },
      { id: 'medical-fostering', name: '/Medical Fostering', members: 234, description: 'Fostering sick/injured animals' },
      { id: 'mama-fostering', name: '/Mama & Babies Fostering', members: 345, description: 'Fostering nursing mothers' }
    ],
    'training': [
      { id: 'dog-training', name: '/Dog Training', members: 1234, description: 'Dog training techniques' },
      { id: 'cat-behavior', name: '/Cat Behavior', members: 567, description: 'Understanding cat behavior' },
      { id: 'reactive-dog-help', name: '/Reactive Dog Help', members: 789, description: 'Help with reactive dogs' },
      { id: 'puppy-training', name: '/Puppy Training', members: 456, description: 'Training young puppies' }
    ],
    'volunteering': [
      { id: 'shelter-volunteering', name: '/Shelter Volunteering', members: 456, description: 'Volunteering at animal shelters' },
      { id: 'wildlife-rescue', name: '/Wildlife Rescue', members: 234, description: 'Wildlife rescue and rehabilitation' },
      { id: 'sanctuary-volunteering', name: '/Sanctuary Volunteering', members: 345, description: 'Volunteering at sanctuaries' }
    ],
    'fundraising': [
      { id: 'emergency-funds', name: '/Emergency Funds', members: 567, description: 'Emergency fundraising for animals' },
      { id: 'medical-funds', name: '/Medical Funds', members: 789, description: 'Fundraising for medical care' },
      { id: 'shelter-support', name: '/Shelter Support', members: 432, description: 'Supporting local shelters' }
    ]
  };

  // Get suggested communities based on filter
  const getSuggestedCommunities = (filterId) => {
    if (filterId === 'all') {
      // For "All" filter, show a randomized selection from all communities
      const allCommunities = Object.values(subCommunitiesByFilter).flat();
      const shuffled = [...allCommunities].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6); // Show 6 random communities
    }
    return subCommunitiesByFilter[filterId] || [];
  };

  // Mock data for community posts
  const allPosts = [
    {
      id: 1,
      title: 'Just adopted this sweet rescue pup! 🐕',
      content: 'After months of fostering, we finally made it official. Meet Luna! She\'s the most loving dog I\'ve ever met.',
      author: 'rescue_mom_23',
      filter: 'adoption',
      subCommunity: 'dog-adoption',
      upvotes: 156,
      comments: 23,
      timeAgo: '2h',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400'
    },
    {
      id: 2,
      title: 'Tips for first-time foster parents?',
      content: 'I\'m about to foster my first dog and I\'m nervous! Any advice on what to expect and how to prepare?',
      author: 'new_foster',
      filter: 'fostering',
      subCommunity: 'puppy-fostering',
      upvotes: 89,
      comments: 45,
      timeAgo: '4h'
    },
    {
      id: 3,
      title: 'Sanctuary volunteer opportunities in NYC',
      content: 'Looking for places to volunteer with animals in the city. Any recommendations for good organizations?',
      author: 'animal_lover',
      filter: 'volunteering',
      upvotes: 234,
      comments: 67,
      timeAgo: '6h'
    },
    {
      id: 4,
      title: 'My cat\'s transformation after adoption 😍',
      content: 'From scared shelter cat to confident family member in just 3 months! The transformation is incredible.',
      author: 'cat_dad',
      filter: 'adoption',
      subCommunity: 'cat-adoption',
      upvotes: 445,
      comments: 89,
      timeAgo: '8h',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400'
    },
    {
      id: 5,
      title: 'Fundraising ideas for local shelter',
      content: 'Our local shelter needs funds for medical supplies. Any creative fundraising ideas that have worked well?',
      author: 'shelter_helper',
      filter: 'fundraising',
      upvotes: 123,
      comments: 34,
      timeAgo: '12h'
    },
    {
      id: 6,
      title: 'Emergency: Found injured bird, what do I do?',
      content: 'Found a bird with a broken wing in my backyard. Should I take it to a wildlife rehab center?',
      author: 'bird_helper',
      filter: 'emergency-help',
      upvotes: 67,
      comments: 28,
      timeAgo: '1h'
    },
    {
      id: 7,
      title: 'Best food for senior dogs with kidney issues',
      content: 'My 12-year-old dog was diagnosed with kidney disease. Any recommendations for food and supplements?',
      author: 'senior_dog_mom',
      filter: 'animal-care',
      subCommunity: 'senior-dog-care',
      upvotes: 189,
      comments: 56,
      timeAgo: '3h'
    },
    {
      id: 8,
      title: 'Training tips for reactive dogs',
      content: 'My rescue dog is reactive to other dogs on walks. Any training techniques that have worked for you?',
      author: 'dog_trainer_23',
      filter: 'training',
      subCommunity: 'reactive-dog-help',
      upvotes: 312,
      comments: 78,
      timeAgo: '5h'
    },
    {
      id: 9,
      title: 'Incredible rescue story: From street to sanctuary',
      content: 'This horse was found malnourished and injured. Look at her now after 6 months of care!',
      author: 'equine_rescuer',
      filter: 'rescue-stories',
      upvotes: 567,
      comments: 123,
      timeAgo: '1d',
      image: 'https://images.unsplash.com/photo-1543852786-1cf6624b998d?w=400'
    },
    {
      id: 10,
      title: 'Daily life at our farm sanctuary',
      content: 'Here\'s what a typical day looks like caring for our 50+ rescued animals!',
      author: 'sanctuary_keeper',
      filter: 'sanctuary-life',
      upvotes: 234,
      comments: 45,
      timeAgo: '2d'
    },
    {
      id: 11,
      title: 'Corn snake feeding schedule help',
      content: 'My corn snake is 2 years old. How often should I be feeding him?',
      author: 'snake_lover',
      filter: 'animal-care',
      subCommunity: 'corn-snake-care',
      upvotes: 45,
      comments: 12,
      timeAgo: '30m'
    },
    {
      id: 12,
      title: 'Blue tongue skink enclosure setup',
      content: 'Setting up a new enclosure for my blue tongue skink. Any tips on substrate and heating?',
      author: 'reptile_keeper',
      filter: 'animal-care',
      subCommunity: 'blue-tongue-skink-care',
      upvotes: 78,
      comments: 23,
      timeAgo: '1h'
    }
  ];

  // Trending posts for sub-community pages
  const trendingPosts = {
    'corn-snake-care': [
      { id: 'trend1', title: 'Best substrate for corn snakes?', upvotes: 234, comments: 45 },
      { id: 'trend2', title: 'Feeding schedule for 2-year-old corn snake', upvotes: 189, comments: 32 },
      { id: 'trend3', title: 'Temperature gradient setup tips', upvotes: 156, comments: 28 },
      { id: 'trend4', title: 'Handling techniques for nervous corn snakes', upvotes: 123, comments: 19 }
    ],
    'dog-adoption': [
      { id: 'trend1', title: 'First week with adopted dog tips', upvotes: 456, comments: 67 },
      { id: 'trend2', title: 'Bonding activities for new adoptions', upvotes: 345, comments: 54 },
      { id: 'trend3', title: 'Introducing adopted dog to existing pets', upvotes: 234, comments: 41 },
      { id: 'trend4', title: 'Separation anxiety in newly adopted dogs', upvotes: 189, comments: 33 }
    ]
  };

  // Filter posts based on selected filter, sub-community, and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesFilter = selectedFilter === 'all' || post.filter === selectedFilter;
    const matchesSubCommunity = !selectedSubCommunity || post.subCommunity === selectedSubCommunity;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSubCommunity && matchesSearch;
  });

  const currentFilter = filters.find(f => f.id === selectedFilter);
  const currentSubCommunity = selectedSubCommunity ? 
    Object.values(subCommunitiesByFilter).flat().find(sc => sc.id === selectedSubCommunity) : null;

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
    setSelectedSubCommunity(null);
  };

  const handleSubCommunityClick = (subCommunityId) => {
    setSelectedSubCommunity(subCommunityId);
  };

  const handleBackToMain = () => {
    setSelectedSubCommunity(null);
  };

  // If we're on a sub-community page, show that layout
  if (selectedSubCommunity) {
    const subCommunityPosts = allPosts.filter(post => post.subCommunity === selectedSubCommunity);
    const trending = trendingPosts[selectedSubCommunity] || [];

    return (
      <div style={{
        height: '100vh',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: 'white',
          padding: '16px 16px 12px 16px',
          borderBottom: '1px solid #e0e0e0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 8
          }}>
            <button
              onClick={handleBackToMain}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: 20,
                cursor: 'pointer',
                padding: 4
              }}
            >
              ←
            </button>
            <h1 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {currentSubCommunity.name}
            </h1>
          </div>
          <p style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>
            {currentSubCommunity.members.toLocaleString()} members • {subCommunityPosts.length} posts
          </p>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#666'
          }}>
            {currentSubCommunity.description}
          </p>
        </div>

        {/* Trending Posts */}
        {trending.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            padding: '16px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333'
            }}>
              Trending Posts
            </h3>
            <div style={{
              display: 'flex',
              gap: 12,
              overflowX: 'auto',
              paddingBottom: 4
            }}>
              {trending.map(post => (
                <div
                  key={post.id}
                  style={{
                    minWidth: 200,
                    padding: 12,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 8,
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                    lineHeight: 1.3
                  }}>
                    {post.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    <span>⬆️ {post.upvotes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Posts List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px'
        }}>
          {subCommunityPosts.map(post => (
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
              {/* Post Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 12
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: '#FF6B6B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginRight: 8
                }}>
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {post.author}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#666'
                  }}>
                    {post.timeAgo}
                  </div>
                </div>
              </div>

              {/* Post Content */}
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

              {/* Post Image */}
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

              {/* Post Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16
              }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 12px',
                  borderRadius: 20,
                  border: 'none',
                  backgroundColor: '#f0f0f0',
                  color: '#666',
                  fontSize: 14,
                  cursor: 'pointer'
                }}>
                  ⬆️ {post.upvotes}
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 12px',
                  borderRadius: 20,
                  border: 'none',
                  backgroundColor: '#f0f0f0',
                  color: '#666',
                  fontSize: 14,
                  cursor: 'pointer'
                }}>
                  💬 {post.comments}
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 12px',
                  borderRadius: 20,
                  border: 'none',
                  backgroundColor: '#f0f0f0',
                  color: '#666',
                  fontSize: 14,
                  cursor: 'pointer'
                }}>
                  🔄 Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Post Button */}
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
            background: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)',
            border: 'none',
            color: 'white',
            fontSize: 24,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(255, 107, 107, 0.4)'
          }}>
            ✏️
          </button>
        </div>
      </div>
    );
  }

  // Main community page layout
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
          marginBottom: 8
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#18171C',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Community Forum
          </h1>
        </div>
        


        <p style={{
          margin: '4px 0 0 0',
          fontSize: '14px',
          color: '#666'
        }}>
          {currentFilter ? `${currentFilter.name} • ${filteredPosts.length} posts` : 'Connect with animal lovers and rescue advocates'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        backgroundColor: 'white',
        padding: '12px 16px',
        borderBottom: '1px solid #e0e0e0',
        overflowX: 'auto'
      }}>
        <div style={{
          display: 'flex',
          gap: 8
        }}>
          {filters.slice(0, 6).map(filter => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 24,
                border: 'none',
                background: selectedFilter === filter.id 
                  ? '#FF6B6B' 
                  : '#F8F6FF',
                color: selectedFilter === filter.id ? '#FFFFFF' : '#666',
                fontSize: 14,
                fontWeight: '600',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: selectedFilter === filter.id 
                  ? '0 2px 8px rgba(255, 107, 107, 0.3)' 
                  : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {filter.icon}&nbsp;&nbsp;{filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Suggested Sub-Communities */}
      {getSuggestedCommunities(selectedFilter).length > 0 && (
        <div style={{
          backgroundColor: 'white',
          padding: '16px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            {selectedFilter === 'all' ? 'Popular Communities' : 'Suggested Communities'}
          </h3>
          <div style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            paddingBottom: 4
          }}>
            {getSuggestedCommunities(selectedFilter).map(subCommunity => (
              <div
                key={subCommunity.id}
                onClick={() => handleSubCommunityClick(subCommunity.id)}
                style={{
                  minWidth: 150,
                  padding: 12,
                  backgroundColor: '#f8f9fa',
                  borderRadius: 8,
                  border: '1px solid #e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
              >
                <h4 style={{
                  margin: '0 0 4px 0',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {subCommunity.name}
                </h4>
                <p style={{
                  margin: '0 0 8px 0',
                  fontSize: '12px',
                  color: '#666',
                  lineHeight: 1.3
                }}>
                  {subCommunity.description}
                </p>
                <div style={{
                  fontSize: '12px',
                  color: '#FF6B6B',
                  fontWeight: 'bold'
                }}>
                  {subCommunity.members.toLocaleString()} members
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Posts Feed */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#F8F6FF'
      }}>
        {filteredPosts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '20px 20px',
            color: '#666'
          }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16
            }}>
              🔍
            </div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333'
            }}>
              No posts found
            </h3>
            <p style={{
              margin: 0,
              fontSize: 14
            }}>
              {searchQuery ? 'Try adjusting your search terms' : 'No posts in this filter yet'}
            </p>
          </div>
        ) : (
          filteredPosts.map(post => {
            const postFilter = filters.find(f => f.id === post.filter);
            const postSubCommunity = post.subCommunity ? 
              Object.values(subCommunitiesByFilter).flat().find(sc => sc.id === post.subCommunity) : null;
            
            return (
              <div
                key={post.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 12,
                  boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)',
                  border: '1px solid #F8F6FF'
                }}
              >
                {/* Post Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 12
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: '#E6B6FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginRight: 8
                  }}>
                    {post.author.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {post.author}
                    </div>
                    <div style={{
                      fontSize: 12,
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                      <span>{post.timeAgo}</span>
                      <span>•</span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        color: '#FF6B6B',
                        fontWeight: 'bold',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        {postFilter?.icon} {postFilter?.name}
                      </span>
                      {postSubCommunity && (
                        <>
                          <span>•</span>
                          <span style={{
                            color: '#FF8E8E',
                            fontWeight: 'bold',
                            fontFamily: 'Poppins, sans-serif'
                          }}>
                            {postSubCommunity.name}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
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

                {/* Post Image */}
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

                {/* Post Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16
                }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 12px',
                    borderRadius: 24,
                    border: 'none',
                    backgroundColor: '#F8F6FF',
                    color: '#FF6B6B',
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}>
                    ⬆️ {post.upvotes}
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 12px',
                    borderRadius: 24,
                    border: 'none',
                    backgroundColor: '#F8F6FF',
                    color: '#FF8E8E',
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}>
                    💬 {post.comments}
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 12px',
                    borderRadius: 24,
                    border: 'none',
                    backgroundColor: '#F8F6FF',
                    color: '#666',
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}>
                    🔄 Share
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Create Post Button */}
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
          background: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)',
          border: 'none',
          color: 'white',
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

export default MobileCommunity; 