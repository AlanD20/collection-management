import React from 'react';
import SortButton from '@@/Table/SortButton';

const CategoryHead = () => {
  const routeName = 'admin.categories.index';

  return (
    <thead>
      <tr className="[&>*]:text-sm">
        <th>
          <SortButton label="#" name="id" routeName={routeName} />
        </th>
        <th>
          <SortButton
            label={__('form.name')}
            name="name"
            routeName={routeName}
          />
        </th>
        <th className="pl-28">{__('form.btn_action')}</th>
      </tr>
    </thead>
  );
};

export default CategoryHead;
