import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Butotn';


const Dashboard = () => {
  return (
    <>
      <Head title="Welcome" />
      <div>
        <h1>
          Hello there!!
        </h1>

        <Button />
      </div>
    </>
  );
}

export default Dashboard;
