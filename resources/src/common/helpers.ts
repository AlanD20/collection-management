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
