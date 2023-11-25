// UserComponent.js
import React from 'react';
import { useUser } from './UserContext';

const UserComponent = () => {
  const { currentUser } = useUser();

  return (
    <div>
      <h2>User Component</h2>
      <p>Current User: {currentUser}</p>
    </div>
  );
};

export default UserComponent;
