import React from 'react';
import { Avatar } from '@/assets/image';

export const ActionsImg = ({ row }) => {
  return (
    <div className="profile">
      <div>
        <img
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '100%',
            marginTop: '5px',
            objectFit: 'contain',
          }}
          src={row.original.photoUrl === null ? Avatar : row.original.photoUrl}
        />
      </div>
      <div className="text-container">
        <p>{row.original.userName}</p>
      </div>
    </div>
  );
};
