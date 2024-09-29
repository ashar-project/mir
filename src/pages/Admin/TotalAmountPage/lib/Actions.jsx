import React from 'react';

export const ActionsImg = ({ row }) => {
  return (
    <div className="profile">
      <div className="image-container">
        <img style={{ width: '100%' }} src={row.original.url} alt="" />
      </div>
      <div className="text-container">
        <p>{row.original.firstName} </p>
        <p>{row.original.lastName}</p>
      </div>
    </div>
  );
};
