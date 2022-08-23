import { ThemeType } from '@/@types/Global';
import { UsePage } from '@/@types/Response';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { THEME_STORAGE_KEY } from '@/common/constants';

const useThemeChange = () => {
  const { theme: currentTheme } = usePage<UsePage>().props;

  const theme: ThemeType = currentTheme === 'emerald' ? 'dracula' : 'emerald';

  const changeTheme = (name: ThemeType) => {
    localStorage.setItem(THEME_STORAGE_KEY, name);

    document.querySelector('html')?.setAttribute('data-theme', name);

    let mode = 'light';
    if (name === 'dracula') mode = 'dark';
    document.querySelector('html')?.setAttribute('data-color-mode', mode);

    Inertia.post(route('set.theme'), { theme: name });
  };

  return { currentTheme, theme, changeTheme };
};

export default useThemeChange;
