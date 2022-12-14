import React from 'react';
import { Tag } from '@/@types/Models';
import TagHead from '@@/Admin/Tag/TagHead';
import { Paginator } from '@/@types/Response';
import EmptyResource from '@@/Misc/EmptyResource';
import TagTableRow from '@@/Admin/Tag/TagTableRow';
import TagGridCard from '@@/Admin/Tag/TagGridCard';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import PaginationLinks from '@@/Table/PaginationLinks';
import { ADMIN_TAGS_SP } from '@/common/select-options';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {
  tags: Paginator<Tag[]>;
}

const Dashboard = ({ tags }: Props) => {
  const condition = tags && tags.data.length > 0;

  return (
    <div className="overflow-x-auto flex flex-col gap-4 w-full">
      <table className="hidden lg:table table-auto table-zebra">
        <TagHead />
        <tbody>
          {condition &&
            tags.data.map((tag) => <TagTableRow key={tag.id} tag={tag} />)}
        </tbody>
      </table>
      <div className="grid lg:hidden justify-center gap-8 py-4">
        {condition &&
          tags.data.map((tag) => <TagGridCard key={tag.id} tag={tag} />)}
      </div>

      {!condition && <EmptyResource model={__('model.tag')} />}

      {condition && <PaginationLinks meta={tags.meta} />}
    </div>
  );
};

export default AdminPageContainer({
  tabTitle: 'Manage Tags',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Tag',
      createRoute: {
        name: 'admin.tags.create',
      },
      searchbar: {
        routeName: 'admin.tags.index',
      },
      sortOption: {
        routeName: 'admin.tags.index',
        options: ADMIN_TAGS_SP(),
      },
    },
  },
});
