import PageContainer from '@/Layouts/PageContainer';
import React from 'react';

interface Props {
  auth: {
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
  _: any;
}

const Dashboard = (p: Props) => {
  return (
    <>
      <h1>Hello tere</h1>
    </>
  );
};

export default PageContainer({
  tabTitle: 'Home',
  body: { component: Dashboard },
});
