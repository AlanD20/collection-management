import React from 'react';
import HeaderBar from '../HeaderBar';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Response';
import SortSelectHeader from '../SortSelectHeader';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import { DefProps, RouteType, SelectOption } from '@/@types/Global';

export interface MainHeaderProps extends DefProps {
  title: string;
  optionRoute: RouteType & {
    sortOptions: SelectOption[];
  };
}

const MainHeader = ({ optionRoute, title }: MainHeaderProps) => {
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={__(title)} />

      <HeaderBar>
        <SortSelectHeader
          hideWhen={optionRoute.hidden}
          options={optionRoute.sortOptions}
          routeName={optionRoute.name}
          params={getParamsWithKey(params, optionRoute.params)}
        />
      </HeaderBar>
    </>
  );
};

export default MainHeader;
