import { useEffect } from 'react';
import { UsePage } from '@/@types/Response';
import { LocalType } from '@/@types/Global';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const useLocalChange = () => {
  const { locale: currentLocale } = usePage<UsePage>().props;

  const locale: LocalType = currentLocale === 'en' ? 'ku' : 'en';

  const changeLocale = (lang: LocalType) => {
    document.querySelector('html')?.setAttribute('lang', lang);
    Inertia.post(route('set.locale'), { locale: lang });
  };

  useEffect(() => {
    changeLocale(currentLocale as LocalType);
  }, []);

  return { currentLocale, locale, changeLocale };
};

export default useLocalChange;
