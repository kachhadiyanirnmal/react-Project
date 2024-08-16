import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import PublicView from './PublicView';
import PrivateView from './PrivateView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <div className="flex-grow">
        {isLoggedIn ? <PrivateView /> : <PublicView />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
