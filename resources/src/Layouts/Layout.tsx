import React, { useEffect } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Children, UsePage } from '@/@types/Global';
import AlertStatus from '@@/Misc/AlertStatus';
import { prefStore } from '@/common/store';

interface Props extends Children {
  title: string;
}

const Layout = ({ children, title }: Props) => {
  const $ = usePage<UsePage>().props;
  const pref = prefStore((state) => state);

  useEffect(() => pref.setLocale($.locale), [pref.locale]);
  useEffect(() => pref.setTheme($.theme), [pref.theme]);

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
