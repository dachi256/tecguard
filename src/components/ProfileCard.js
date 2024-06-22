import React from 'react';
import '../css/ProfileCard.css';

const ProfileCard = ({ user }) => { // Destructure the user prop
  return (
    <div className="profile-card">
      <img src={user.image} alt={user.name} className="profile-image" />
      <div className="profile-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <a href="/profile">View Profile</a>
      </div>
    </div>
  );
};

export default ProfileCard;
