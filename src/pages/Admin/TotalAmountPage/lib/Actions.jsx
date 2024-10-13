import React from 'react';
import { Gogle } from '@/assets/icon';

export const ActionsImg = ({ row }) => {
  return (
    <div className="profile">
      <div className="image-container">
        <Gogle />
      </div>
      <div className="text-container">
        <p>{row.original.userName}</p>
      </div>
    </div>
  );
};
