import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';

const useAuth = () => {
  const {
    auth: { user },
    ...$
  } = usePage<UsePage>().props;

  if (!user) return {};

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
