import SortButton from '@@/Table/SortButton';
import React from 'react';

const TagHead = () => {
  const routeName = 'admin.tags.index';

  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>
          <SortButton label="#" name="id" routeName={routeName} />
        </th>
        <th>
          <SortButton label="Name" name="name" routeName={routeName} />
        </th>
        <th className="pl-28">Actions</th>
      </tr>
    </thead>
  );
};

export default TagHead;
