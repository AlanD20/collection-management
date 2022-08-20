import { UsePage } from '@/@types/Response';
import { LocalType } from '@/@types/Global';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { LOCALE_STORAGE_KEY } from '@/common/constants';

const useLocalChange = () => {
  const { locale: currentLocale } = usePage<UsePage>().props;

  const locale: LocalType = currentLocale === 'en' ? 'es' : 'en';

  const changeLocale = (lang: LocalType) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, lang);
    document.querySelector('html')?.setAttribute('lang', lang);
    Inertia.post(route('set.locale'), { locale: lang });
  };

  return { currentLocale, locale, changeLocale };
};

export default useLocalChange;
