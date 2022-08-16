import React from 'react';
import { DefProps } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { usePage } from '@inertiajs/inertia-react';
import { ParamsProp, UsePage } from '@/@types/Response';

interface Props extends DefProps {
  routeName: string;
  params: ParamsProp;
}

const CreateButtonLink = ({
  routeName,
  params,
  hideWhen = false,
  className = '',
}: Props) => {
  const {
    auth: { user },
    ...$
  } = usePage<UsePage>().props;

  const self = user && (user.username === $.params.uname || user.admin);

  if (!self || hideWhen) return null;

  return (
    <ButtonLink
      href={route(routeName, params)}
      as="button"
      className={`btn btn-secondary btn-wide text-xl ${className}`}
    >
      {__('form.create')}
    </ButtonLink>
  );
};

export default CreateButtonLink;
