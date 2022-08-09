import React from 'react';
import TitleText from '@@/Misc/TitleText';
import ButtonLink from '@@/Form/ButtonLink';
import OptionHeader from '@@/Table/OptionHeader';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';

interface Props extends DefProps {}

const TabHeader = ({ className }: Props) => {
  const $ = usePage<UsePage>().props;

  const self = $.auth.user.username === $.uname;

  return (
    <>
      <TitleText label={$._.user.collection.title} />
      <div className={`w-full flex justify-center ${className}`}>
        {self && (
          <ButtonLink
            href={route('u.collections.create', $.auth.user.username)}
            label={$._.form.create}
            className="md:ml-auto btn btn-secondary btn-wide text-xl"
          />
        )}
      </div>
      <OptionHeader />
    </>
  );
};

export default TabHeader;
