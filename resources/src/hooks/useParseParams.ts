import { usePage } from '@inertiajs/inertia-react';
import { PageTitle } from '@/@types/Global';
import { KeyParamsProps, UsePage } from '@/@types/Response';

const useReplaceParamsKey = (title: PageTitle) => {
  if (typeof title === 'string') return title;

  const $ = usePage<UsePage>().props.params;
  return title.text.replace(
    `:${title.param}`,
    $[title.param] as KeyParamsProps
  );
};

export default useReplaceParamsKey;
