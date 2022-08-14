import React from 'react';
import HeaderBar from '../HeaderBar';
import TitleText from '@@/Misc/TitleText';
import SearchHeader from '../SearchHeader';
import { KeyParamsProps, UsePage } from '@/@types/Response';
import SortSelectHeader from '../SortSelectHeader';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import useReplaceParamsKey from '@/hooks/useParseParams';
import BackButtonLink from '@@/Form/Action/BackButtonLink';
import CreateButtonLink from '@@/Form/Action/CreateButtonLink';
import { DefProps, PageTitle, RouteType, SelectOption } from '@/@types/Global';

export interface UserHeaderProps extends DefProps {
  title: PageTitle;
  optionRoute: RouteType & {
    sortOptions: SelectOption[];
  };
  createRoute: RouteType;
  backRoute?: RouteType & {
    prevUrl?: boolean;
  };
  noHeaderBar?: boolean;
}

const UserHeader = ({
  optionRoute,
  createRoute,
  backRoute,
  noHeaderBar,
  title,
}: UserHeaderProps) => {
  const parsedTitle = useReplaceParamsKey(title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText
        label={parsedTitle}
        // className="mx-auto"
      />
      <div className="flex w-full gap-4 flex-col md:flex-row py-2 px-8">
        {backRoute && !backRoute.hidden && (
          <BackButtonLink
            routeName={backRoute.prevUrl ? ':prevUrl' : backRoute.name}
            params={getParamsWithKey(params, backRoute.params)}
          />
        )}
      </div>
      <HeaderBar hideWhen={noHeaderBar}>
        <SortSelectHeader
          hideWhen={optionRoute.hidden}
          options={optionRoute.sortOptions}
          routeName={optionRoute.name}
          params={getParamsWithKey(params, optionRoute.params)}
        />
        <div className="flex gap-4 items-center">
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
