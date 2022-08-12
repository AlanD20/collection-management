import React from 'react';
import TitleText from '@@/Misc/TitleText';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, ParamsProp, RouteType, UsePage } from '@/@types/Global';
import useReplaceParamsKey from '@/hooks/useParseParams';
import BackButtonLink from '@@/Form/Action/BackButtonLink';
import { getParamsWithKey } from '@/common/helpers';

export interface UserHeaderCompactProps extends DefProps {
  title: string;
  backRoute: RouteType;
}

const UserHeaderCompact = ({ title, backRoute }: UserHeaderCompactProps) => {
  const parsedTitle = useReplaceParamsKey('uname', title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={parsedTitle} />
      <div className="flex w-full items-center px-12 pt-8">
        <BackButtonLink
          routeName={backRoute.name}
          params={getParamsWithKey(params, backRoute.params)}
        />
      </div>
    </>
  );
};

export default UserHeaderCompact;
