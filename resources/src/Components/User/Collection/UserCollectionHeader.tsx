import React from 'react';
import TitleText from '@@/Misc/TitleText';
import ButtonLink from '@@/Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import { DefProps, UsePage } from '@/@types/Global';
import UserCollectionOptions from '@@/User/Collection/UserCollectionOptions';

interface Props extends DefProps {}

const UserCollectionHeader = ({ className }: Props) => {
  const {
    auth: { user },
    params,
    ...$
  } = usePage<UsePage>().props;

  const self = user.username === params.uname || user.admin;

  return (
    <>
      <TitleText
        label={__('model.title', {
          model: `${params.uname}'s Collection`,
        })}
      />
      <div className={`w-full flex justify-center ${className}`}>
        {self && (
          <ButtonLink
            href={route('u.collections.create', {
              uname: params.uname,
            })}
            label={__('form.create')}
            className="md:ml-auto btn btn-secondary btn-wide text-xl"
          />
        )}
      </div>
      <UserCollectionOptions />
    </>
  );
};

export default UserCollectionHeader;
