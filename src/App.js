import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './helpers/AuthContext';
import Router from './Router';

function App() {
  // Values for AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [checkingForToken, setCheckingForToken] = useState(true);

  function login(token, username, email) {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  function logout() {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  // Check if user is logged in after page refresh

  async function checkForToken() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (token && username && email) {
      login(token, username, email);
      setCheckingForToken(false);
      return;
    }
    setCheckingForToken(false);
  }

  useEffect(() => {
    checkForToken();
  }, []);

  return (
    <div className='App'>
      <AuthContext.Provider value={{ isLoggedIn, login, logout, checkingForToken }}>
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
