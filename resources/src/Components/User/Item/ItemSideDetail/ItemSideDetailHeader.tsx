import React from 'react';

const ItemSideDetailHeader = () => {
  return (
    <div className="navbar flex w-full justify-between items-center">
      <div className="flex-1">
        <h4 className="card-title capitalize font-bold">
          {__('user.item_owner')}
        </h4>
      </div>
    </div>
  );
};

export default ItemSideDetailHeader;
