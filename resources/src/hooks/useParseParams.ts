import { usePage } from '@inertiajs/inertia-react';
import { KeyParamsProps, UsePage } from '@/@types/Global';

const useReplaceParamsKey = (paramName: KeyParamsProps, text: string) => {
  const $ = usePage<UsePage>().props.params;

  return text.replace(`:${paramName}`, $[paramName] as KeyParamsProps);
};

export default useReplaceParamsKey;
