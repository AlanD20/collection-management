import React from 'react';
import { SortProps } from '@/@types/Response';
import SeeMoreButtonLink from '@@/Form/Action/SeeMoreButtonLink';

interface Props {
  title: string;
  routeName: string;
  params?: SortProps;
}

const SectionTitle = ({ title, routeName, params = {} }: Props) => {
  return (
    <div className="flex w-full gap-4 items-center">
      <h2 className="text-4xl font-bold capitalize">{title}</h2>
      <SeeMoreButtonLink routeName={routeName} params={params} />
    </div>
  );
};

export default SectionTitle;
