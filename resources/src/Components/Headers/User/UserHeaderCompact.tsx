import React from 'react';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';
import { getParamsWithKey } from '@/common/helpers';
import { DefProps, RouteType } from '@/@types/Global';
import BackButtonLink from '@@/Form/Action/BackButtonLink';

export interface UserHeaderCompactProps extends DefProps {
  title?: string;
  backRoute: RouteType & {
    label?: string;
  };
}

const UserHeaderCompact = ({ title, backRoute }: UserHeaderCompactProps) => {
  const { params } = usePage<UsePage>().props;

  return (
    <>
      {title && <TitleText label={__(title)} className="mx-auto" />}
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
