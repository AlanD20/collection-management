import React from 'react';
import { Category } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import PaginationLinks from '@@/Table/PaginationLinks';
import CategoryHead from '@@/Admin/Category/CategoryHead';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import CategoryTableRow from '@@/Admin/Category/CategoryTableRow';
import CategoryGridCard from '@@/Admin/Category/CategoryGridCard';
import EmptyResource from '@@/Misc/EmptyResource';

interface Props {
  categories: Paginator<Category[]>;
}

const Dashboard = ({ categories }: Props) => {
  const condition = categories && categories.data.length > 0;

  return (
    <div className="overflow-x-auto flex flex-col gap-4 w-full">
      <table className="hidden lg:table table-auto table-zebra">
        <CategoryHead />
        <tbody>
          {categories &&
            categories.data.length > 0 &&
            categories.data.map((category) => (
              <CategoryTableRow key={category.id} category={category} />
            ))}
        </tbody>
      </table>
      <div className="grid lg:hidden justify-center gap-8 py-4">
        {condition &&
          categories.data.map((category) => (
            <CategoryGridCard key={category.id} category={category} />
          ))}
      </div>

      {!condition && <EmptyResource model="Category" />}

      {condition && <PaginationLinks meta={categories.meta} />}
    </div>
  );
};

export default AdminPageContainer({
  tabTitle: 'Manage Categories',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Category',
      createRoute: {
        name: 'admin.categories.create',
      },
      searchbar: {
        routeName: 'admin.categories.index',
      },
    },
  },
});
