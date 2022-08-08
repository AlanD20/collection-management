import React from 'react';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {}
const Dashboard = (props: Props) => {
  return <div>ADMIN Dashboard</div>;
};

export default AdminPageContainer({
  component: Dashboard,
  title: 'Dashboard',
  name: 'Admin/Dashboard',
});
