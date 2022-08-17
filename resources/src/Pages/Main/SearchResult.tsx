import React from 'react';
import Hero from '@@/Main/Home/Hero';
import PageContainer from '@/Layouts/PageContainer';
import LatestItems from '@@/Main/Home/Section/LatestItems';
import LatestUsers from '@@/Main/Home/Section/LatestUsers';
import { Collection, Item, User } from '@/@types/Models';
import LatestCollections from '@@/Main/Home/Section/LatestCollections';
import LargestCollections from '@@/Main/Home/Section/LargestCollections';

interface Props {
  latestCollections: Collection[];
  largestCollections: Collection[];
  latestUsers: User[];
  latestItems: Item[];
}

const SearchResult = ({
  latestCollections,
  largestCollections,
  latestItems,
  latestUsers,
}: Props) => {
  return <div>search result here</div>;
};

export default PageContainer({
  tabTitle: 'Search Result',
  body: { component: SearchResult },
});
