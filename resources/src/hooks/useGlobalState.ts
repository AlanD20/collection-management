import { useEffect } from 'react';
import { UsePage } from '@/@types/Response';
import { usePage } from '@inertiajs/inertia-react';
import { prefStore } from '@/common/store';

const useGlobalState = () => {
  const $ = usePage<UsePage>().props;
  const pref = prefStore((state) => state);
  useEffect(() => pref.setLocale($.locale), [pref.locale]);
};

export default useGlobalState;
