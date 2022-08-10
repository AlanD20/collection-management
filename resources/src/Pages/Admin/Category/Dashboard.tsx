import React from 'react';
import { Category } from '@/@types/Models';
import { Paginator } from '@/@types/Response';
import Paginate from '@@/Table/Paginate';
import CategoryHead from '@@/Admin/Category/CategoryHead';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import CategoryTableRow from '@@/Admin/Category/CategoryTableRow';
import CategoryGridCard from '@@/Admin/Category/CategoryGridCard';
import AdminHeader from '@@/Admin/AdminHeader';

interface Props {
  categories: Paginator<Category[]>;
}

const Dashboard = ({ categories }: Props) => {
  console.log(categories);

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
        {categories &&
          categories.data.length > 0 &&
          categories.data.map((category) => (
            <CategoryGridCard key={category.id} category={category} />
          ))}
      </div>
      <Paginate meta={categories.meta} />
    </div>
  );
};

export default AdminPageContainer({
  title: 'Manage Categories',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Category',
      create: 'admin.categories.create',
    },
  },
});
