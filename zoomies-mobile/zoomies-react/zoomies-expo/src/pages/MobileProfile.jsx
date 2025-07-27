import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileProfile = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('demoUser');

  const handleDemoUser = () => {
    // In a real app, this would set authentication state
    localStorage.setItem('demoUser', 'user');
    navigate('/profile/user');
  };

  const handleDemoSanctuary = () => {
    // In a real app, this would set authentication state
    localStorage.setItem('demoUser', 'sanctuary');
    navigate('/profile/sanctuary');
  };

  const handleLogout = () => {
    localStorage.removeItem('demoUser');
    window.location.reload(); // Reload to update the UI
  };

  // If already logged in, show logout option
  if (isLoggedIn) {
    return (
      <div style={{
        height: '100%',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>
            Already Logged In
          </h1>
          <p style={{
            fontSize: 16,
            color: '#666',
            margin: 0
          }}>
            You are logged in as: {isLoggedIn === 'user' ? 'Demo User' : 'Demo Sanctuary'}
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: 16,
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => navigate(isLoggedIn === 'user' ? '/profile/user' : '/profile/sanctuary')}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#FF6B6B',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '12px'
            }}
          >
            Go to Profile
          </button>

          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#F8F6FF',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '8px'
        }}>
          Welcome to Zoomies
        </h1>
        <p style={{
          fontSize: 16,
          color: '#666',
          margin: 0
        }}>
          Sign in to access your profile
        </p>
      </div>

      {/* Login Form */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <div style={{
          marginBottom: '20px'
        }}>
          <label style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: 8,
              fontSize: 16,
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{
          marginBottom: '24px'
        }}>
          <label style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: 8,
              fontSize: 16,
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#FF6B6B',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          fontSize: 16,
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '16px'
        }}>
          Sign In
        </button>

        <div style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#666',
          marginBottom: '20px'
        }}>
          Don't have an account? <span style={{ color: '#FF6B6B', cursor: 'pointer' }}>Sign up</span>
        </div>
      </div>

      {/* Demo Buttons */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Demo Access
        </h3>
        
        <button
          onClick={handleDemoUser}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#FF6B6B',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '12px'
          }}
        >
          Demo User
        </button>

        <button
          onClick={handleDemoSanctuary}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#FF8E8E',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Demo Sanctuary
        </button>
      </div>
    </div>
  );
};

export default MobileProfile; 