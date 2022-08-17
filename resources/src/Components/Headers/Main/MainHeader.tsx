import React from 'react';
import HeaderBar from '../HeaderBar';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Response';
import SortSelectHeader from '../SortSelectHeader';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import useReplaceParamsKey from '@/hooks/useParseParams';
import { DefProps, PageTitle, RouteType, SelectOption } from '@/@types/Global';

export interface MainHeaderProps extends DefProps {
  title: PageTitle;
  optionRoute: RouteType & {
    sortOptions: SelectOption[];
  };
}

const MainHeader = ({ optionRoute, title }: MainHeaderProps) => {
  const parsedTitle = useReplaceParamsKey(title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={parsedTitle} />

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
