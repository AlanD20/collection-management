import React from 'react';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {}
const Dashboard = (props: Props) => {
  return <div>ADMIN Dashboard</div>;
};

export default AdminPageContainer({
  tabTitle: 'Dashboard',
  body: { component: Dashboard },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Dashboard',
    },
  },
});
