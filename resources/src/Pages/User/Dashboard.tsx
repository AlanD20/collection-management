import React from 'react';
import UserPageContainer from '@/Layouts/UserPageContainer';

const Dashboard = () => {
  return <div>USER Dashboard</div>;
};

export default UserPageContainer({
  tabTitle: 'User',
  body: {
    component: Dashboard,
  },
  // header: {
  //   component: UserHeader,
  //   props: {
  //     title: {
  //       text: ":uname's Collection Items",
  //       param: 'uname',
  //     },
  //     backRoute: {
  //       name: 'u.collections.index',
  //       params: ['uname'],
  //     },
  //     optionRoute: {
  //       sortOptions: U_ITEMS_SP,
  //       name: 'u.collections.items.index',
  //       params: ['uname', 'collection'],
  //     },
  //     createRoute: {
  //       name: 'u.collections.items.create',
  //       params: ['uname', 'collection'],
  //     },
  //   },
  // },
});
