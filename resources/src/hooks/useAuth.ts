import { usePage } from '@inertiajs/inertia-react';
import { UsePage } from '@/@types/Global';

const useAuth = () => {
  const {
    auth: { user },
    ...$
  } = usePage<UsePage>().props;

  const self = $.params.uname === user.username || user.admin;

  return {
    self,
    id: user.id,
    isAdmin: user.admin,
    isBlocked: user.block,
    uname: user.username,
    locale: user.locale,
    theme: user.theme,
  };
};

export default useAuth;
