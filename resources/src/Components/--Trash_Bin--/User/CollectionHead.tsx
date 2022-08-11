import React from 'react';
import SortButton from '@@/Table/SortButton';

interface Props {
  uname: string;
}

const CollectionHead = ({ uname }: Props) => {
  const routeName = 'u.collections.index';

  return (
    <thead>
      <tr>
        <td>
          <SortButton
            label="#"
            name="id"
            routeName={routeName}
            params={{ uname }}
          />
        </td>
        <td>
          <SortButton
            label="Name"
            name="name"
            routeName={routeName}
            params={{ uname }}
          />
        </td>
        <td>
          <SortButton
            label="Category"
            name="category"
            routeName={routeName}
            params={{ uname }}
          />
        </td>
        <td>
          <span>Description</span>
        </td>
        <td>
          <SortButton
            label="Created At"
            name="created_at"
            routeName={routeName}
            params={{ uname }}
          />
        </td>
        <td>
          <SortButton
            label="Updated At"
            name="updated_at"
            routeName={routeName}
            params={{ uname }}
          />
        </td>
        <td>Actions</td>
      </tr>
    </thead>
  );
};
export default CollectionHead;
