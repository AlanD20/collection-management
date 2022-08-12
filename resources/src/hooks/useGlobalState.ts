import { UsePage } from '@/@types/Global';
import { paramsStore, prefStore } from '@/common/store';
import { usePage } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

interface Props {}

const useGlobalState = () => {
  const $ = usePage<UsePage>().props;
  const pref = prefStore((state) => state);
  const params = paramsStore((state) => state);

  useEffect(() => pref.setLocale($.locale), [pref.locale]);
  useEffect(() => pref.setTheme($.theme), [pref.theme]);
  useEffect(() => params.setParams($.params), [$.ts]);
};

export default useGlobalState;
