import { useEffect } from 'react';
import { ThemeType } from '@/@types/Global';
import { UsePage } from '@/@types/Response';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const useThemeChange = () => {
  const { theme: currentTheme } = usePage<UsePage>().props;

  const theme: ThemeType = currentTheme === 'emerald' ? 'dracula' : 'emerald';

  const changeTheme = (name: ThemeType) => {
    document.querySelector('html')?.setAttribute('data-theme', name);
    Inertia.post(route('set.theme'), { theme: name });
    // window.location.reload();
  };

  useEffect(() => {
    changeTheme(currentTheme as ThemeType);
  }, []);

  return { currentTheme, theme, changeTheme };
};

export default useThemeChange;
