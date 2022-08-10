import React from 'react';
import AdminPageContainer from '@/Layouts/AdminPageContainer';
import AdminHeader from '@@/Admin/AdminHeader';

interface Props {}
const Dashboard = (props: Props) => {
  return <div>ADMIN Dashboard</div>;
};

export default AdminPageContainer({
  title: 'Dashboard',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Dashboard',
    },
  },
});
