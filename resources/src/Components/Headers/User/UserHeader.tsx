import React from 'react';
import HeaderBar from '../HeaderBar';
import TitleText from '@@/Misc/TitleText';
import SearchHeader from '../SearchHeader';
import { UsePage } from '@/@types/Response';
import SortSelectHeader from '../SortSelectHeader';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import useReplaceParamsKey from '@/hooks/useParseParams';
import BackButtonLink from '@@/Form/Action/BackButtonLink';
import CreateButtonLink from '@@/Form/Action/CreateButtonLink';
import { DefProps, PageTitle, RouteType, SelectOption } from '@/@types/Global';
import ItemsHeader from './ItemsHeader';

export interface UserHeaderProps extends DefProps {
  title: PageTitle;
  optionRoute: RouteType & {
    sortOptions: SelectOption[];
  };
  createRoute: RouteType;
  backRoute?: RouteType & {
    label?: string;
    prevUrl?: boolean;
  };
  itemsHeader: boolean;
}

const UserHeader = ({
  optionRoute,
  createRoute,
  backRoute,
  title,
  itemsHeader
}: UserHeaderProps) => {
  const parsedTitle = useReplaceParamsKey(title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={parsedTitle} />
      <ItemsHeader hideWhen={!itemsHeader} />
      <div className="flex w-full gap-4 flex-col md:flex-row py-2 px-8">
        {backRoute && !backRoute.hidden && (
          <BackButtonLink
            label={backRoute.label}
            routeName={backRoute.prevUrl ? ':prevUrl' : backRoute.name}
            params={getParamsWithKey(params, backRoute.params)}
          />
        )}
      </div>
      <HeaderBar>
        <SortSelectHeader
          hideWhen={optionRoute.hidden}
          options={optionRoute.sortOptions}
          routeName={optionRoute.name}
          params={getParamsWithKey(params, optionRoute.params)}
        />
        <div className="flex flex-col lg:flex-row gap-4 items-center w-full justify-center lg:justify-end">
          <SearchHeader
            hideWhen={optionRoute.hidden}
            routeName={optionRoute.name}
            params={getParamsWithKey(params, optionRoute.params)}
          />
          <CreateButtonLink
            hideWhen={createRoute.hidden}
            routeName={createRoute.name}
            params={getParamsWithKey(params, createRoute.params)}
          />
        </div>
      </HeaderBar>
    </>
  );
};

export default UserHeader;
