import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './helpers/AuthContext';
import Router from './Router';

function App() {
  // Values for AuthContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  function login(token, username) {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }

  function logout() {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  // Check if user is logged in after page refresh

  async function checkForToken() {
    const token = await localStorage.getItem('token');
    const username = await localStorage.getItem('username');
    if (token && username) {
      login(token, username);
    }
  }

  useEffect(() => {
    console.log('check');
    checkForToken();
  }, []);

  return (
    <div className='App'>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
