import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Head } from '@inertiajs/inertia-react';
import { Children } from '@/@types/Global';
import Status from '@/Components/Misc/Status';

interface Props extends Children {
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center relative w-full ">
      <Head title={title} />

      <Navigation />

      <main className="flex flex-col items-center relative min-w-full min-h-screen bg-gray-100 py-4 px-2 sm:px-8">
        {children}
        <Status />
      </main>

      <Footer />
    </div>
  );
};
export default Layout;
