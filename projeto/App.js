// App.js
import React from 'react';
import UserComponent from './UserComponent';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>React App</h1>
        <UserComponent />
      </div>
    </UserProvider>
  );
};

export default App;
