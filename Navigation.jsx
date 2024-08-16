import React from 'react';

function Navigation({ isLoggedIn, onLogin, onLogout }) {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <div className="text-white">Navigation</div>
      <div>
        {isLoggedIn ? (
          <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onLogout}>Logout</button>
        ) : (
          <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onLogin}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
