import { KeyParamsProps, ParamsProp } from '@/@types/Response';

export const getQueryAsObj = () => {
  let params = {};
  new URLSearchParams(window.location.search).forEach((value, key) => {
    params = {
      ...params,
      [key]: value,
    };
  });
  return params;
};

export const getParamsWithKey = (
  params: ParamsProp,
  keys?: KeyParamsProps[]
) => {
  return !keys
    ? {}
    : keys.reduce(
        (prev, cur) => ({
          ...prev,
          [cur]: params[cur],
        }),
        {}
      );
};
