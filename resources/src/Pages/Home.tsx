import PageContainer from '@/Layouts/PageContainer';
import React from 'react';

interface Props {}

const Home = (props: Props) => {
  return <div>HOMMEEE</div>;
};

export default PageContainer({
  tabTitle: 'Home',
  body: { component: Home },
});
