import React from 'react';
import { useTable } from 'react-table';
import { Collection } from '@/@types/Models';
import UserPageContainer from '@/Layouts/UserPageContainer';
import CollectionHeader from '@@/User/Collection/CollectionHeader';
import { Paginator } from '@/@types/Response';

interface Props {
  uname: string;
  collections: Paginator<Collection[]>;
}

const Dashboard = ({ uname, collections }: Props) => {

  const columns = React.useMemo(() => [
    { Header: '#', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Updated At', accessor: 'updatedAt' },
    { Header: 'Created At', accessor: 'createdAt' },
  ], []);
  const tableInstance = useTable({
    columns,
    data: collections.data
  })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  console.log(collections);

  return (
    <div>
      this is collection


      <div className="overflow-x-auto">
        <table {...getTableProps()}
          className="table w-full table-zebra">

          <thead>
            {// Loop over the header rows
              headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {// Loop over the headers in each row
                    headerGroup.headers.map(column => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {// Render the header
                          column.render('Header')}
                      </th>
                    ))}
                </tr>
              ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
              rows.map(row => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {// Loop over the rows cells
                      row.cells.map(cell => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {// Render the cell contents
                              cell.render('Cell')}
                          </td>
                        )
                      })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPageContainer({
  component: Dashboard,
  header: <CollectionHeader />,
  title: 'User Collection',
});


