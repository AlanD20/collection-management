import React from 'react';
import HeaderBar from '../HeaderBar';
import TitleText from '@@/Misc/TitleText';
import SearchHeader from '../SearchHeader';
import SortSelectHeader from '../SortSelectHeader';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import useReplaceParamsKey from '@/hooks/useParseParams';
import { U_COLLECTIONS_SP } from '@/common/select-options';
import CreateButtonLink from '@@/Form/Action/CreateButtonLink';
import { DefProps, RouteType, UsePage } from '@/@types/Global';

export interface UserHeaderProps extends DefProps {
  title: string;
  optionRoute: RouteType;
  createRoute: RouteType;
  noHeaderBar?: boolean;
}

const UserHeader = ({
  optionRoute,
  createRoute,
  noHeaderBar,
  title,
}: UserHeaderProps) => {
  const parsedTitle = useReplaceParamsKey('uname', title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={parsedTitle} />
      <HeaderBar hideWhen={noHeaderBar}>
        <SortSelectHeader
          hideWhen={optionRoute.hidden}
          options={U_COLLECTIONS_SP}
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
