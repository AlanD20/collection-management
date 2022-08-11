import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Head } from '@inertiajs/inertia-react';
import { Children } from '@/@types/Global';
import AlertStatus from '@@/Misc/AlertStatus';

interface Props extends Children {
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center relative">
      <Head title={title} />

      <Navigation />

      <main className="min-h-screen w-full flex flex-col items-center relative bg-gray-100 py-4 px-2 sm:px-8 ">
        {children}
        <AlertStatus />
      </main>

      <Footer />
    </div>
  );
};
export default Layout;
