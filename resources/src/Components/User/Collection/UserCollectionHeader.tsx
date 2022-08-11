import React from 'react';
import TitleText from '@@/Misc/TitleText';
import ButtonLink from '@@/Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';
import UserCollectionOptions from '@@/User/Collection/UserCollectionOptions';

interface Props extends DefProps {}

const UserCollectionHeader = ({ className }: Props) => {
  const $ = usePage<UsePage>().props;

  const self = $.auth.user.username === $.uname || $.auth.user.admin;

  return (
    <>
      <TitleText label={$._.user.collection.title} />
      <div className={`w-full flex justify-center ${className}`}>
        {self && (
          <ButtonLink
            href={route('u.collections.create', { uname: $.uname })}
            label={$._.form.create}
            className="md:ml-auto btn btn-secondary btn-wide text-xl"
          />
        )}
      </div>
      <UserCollectionOptions />
    </>
  );
};

export default UserCollectionHeader;
