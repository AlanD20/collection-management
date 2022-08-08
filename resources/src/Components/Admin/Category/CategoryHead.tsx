import React from 'react';

const CategoryHead = () => {
  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>#</th>
        <th>Name</th>
        <th className="pl-28">Actions</th>
      </tr>
    </thead>
  );
};

export default CategoryHead;
