import React from 'react';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props { }

const Dashboard = (props: Props) => {
  return <div>ADMIN CATEGORY Dashboard</div>;
};


export default AdminPageContainer({
  component: Dashboard,
  title: 'Category Dashboard',
  name: 'Admin/Category'
});
