import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Head } from '@inertiajs/inertia-react';

interface Props {
  children?: React.ReactNode | JSX.Element;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center relative w-full ">
      <Head title={title} />

      <Navigation />

      <main className="flex flex-col items-center relative w-full h-screen bg-gray-100 py-4 px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};
export default Layout;
