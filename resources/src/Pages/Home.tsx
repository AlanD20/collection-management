import PageContainer from '@/Layouts/PageContainer';
import React from 'react';

interface Props {}

const Home = (props: Props) => {
  return <div>HOMMEEE</div>;
};

export default PageContainer({
  title: 'Home',
  body: { component: Home },
});
