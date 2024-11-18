import React, { useState } from 'react';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';

function App() {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <EmployeeList token={token} />
      )}
    </div>
  );
}

export default App;
