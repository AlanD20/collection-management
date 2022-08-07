import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Form/Butotn';
import Layout from '@/Layouts/Layout';

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

export default Dashboard;
