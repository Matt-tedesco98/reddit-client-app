import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  const { name } = props;

  return (
    <img
      src={`https://api.dicebear.com/7.x/identicon/svg?seed=${name}`}
      alt={`${name} profile`}
      className="avatar-profile-image"
    />
  );
};

export default Avatar;
