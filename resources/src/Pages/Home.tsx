import React from 'react';
import Hero from '@@/Home/Hero';
import PageContainer from '@/Layouts/PageContainer';
import LatestItems from '@@/Home/Section/LatestItems';
import LatestUsers from '@@/Home/Section/LatestUsers';
import { Collection, Item, User } from '@/@types/Models';
import LatestCollections from '@@/Home/Section/LatestCollections';
import LargestCollections from '@@/Home/Section/LargestCollections';

interface Props {
  latestCollections: Collection[];
  largestCollections: Collection[];
  latestUsers: User[];
  latestItems: Item[];
}

const Home = ({
  latestCollections,
  largestCollections,
  latestItems,
  latestUsers,
}: Props) => {
  return (
    <div>
      <Hero />

      <LatestCollections collections={latestCollections} />
      <LatestItems items={latestItems} />
      <LatestUsers users={latestUsers} />
      <LargestCollections collections={largestCollections} />
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Home',
  body: { component: Home },
});
