import { useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import TodoPage from './components/TodoPage';
import TodoDetail from './components/TodoDetail';
import NotFound from './pages/NotFound';
import Register from './pages/jwt/Register';
import Login from './pages/jwt/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [token, setToken] = useState(localStorage.getItem('access'));
  const username = localStorage.getItem('username');
  
  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    setToken(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <nav style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{
          color: '#1f2937',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '600',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
          e.target.style.color = 'white';
        }} onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#1f2937';
        }}>🏠 Home</Link>
        
        {token ? (
          <>
            <Link to="/todos" style={{
              color: '#1f2937',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
              e.target.style.color = 'white';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#1f2937';
            }}>📝 Todos</Link>
            
            {username && (
              <span style={{
                color: 'white',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '600'
              }}>
                👤 {username}
              </span>
            )}
            
            <button onClick={handleLogout} style={{
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              margin: 0
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>🚪 Logout</button>
          </>
        ) : (
          <>
            <Link to="/register" style={{
              color: '#1f2937',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
              e.target.style.color = 'white';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#1f2937';
            }}>📝 Register</Link>
            
            <Link to="/login" style={{
              color: '#1f2937',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
              e.target.style.color = 'white';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#1f2937';
            }}>🔐 Login</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home setToken={setToken} />} />
        <Route path="/register" element={token ? <Navigate to="/todos" replace /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/todos" replace /> : <Login setToken={setToken} />} />
        <Route path="/todos" element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
        <Route path="/todos/:id" element={<ProtectedRoute><TodoDetail /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;