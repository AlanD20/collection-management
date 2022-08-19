import React from 'react';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import useReplaceParamsKey from '@/hooks/useParseParams';
import BackButtonLink from '@@/Form/Action/BackButtonLink';
import { DefProps, PageTitle, RouteType } from '@/@types/Global';

export interface UserHeaderCompactProps extends DefProps {
  title: PageTitle;
  backRoute: RouteType & {
    label?: string;
  };
}

const UserHeaderCompact = ({ title, backRoute }: UserHeaderCompactProps) => {

  const parsedTitle = useReplaceParamsKey(title);
  const { params } = usePage<UsePage>().props;

  return (
    <>
      <TitleText label={parsedTitle} className="mx-auto" />
      <div className="flex w-full gap-4 flex-col md:flex-row py-2 px-8">
        {backRoute && !backRoute.hidden && (
          <BackButtonLink
            label={backRoute.label}
            routeName={backRoute.name}
            params={getParamsWithKey(params, backRoute.params)}
          />
        )}
      </div>
    </>
  );
};

export default UserHeaderCompact;
