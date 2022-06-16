import { apies } from './apies';
import useAxios from './useAxios';

let axiosInstance = useAxios();

export default function useApi(type = 'general') {
  const api = {};
  const patterns = apies[type];

  Object.keys(patterns).map((patternName) => {
    const request = (data) => {
      const pattern = patterns[patternName](data);

      return axiosInstance[pattern.method](pattern.url, pattern.data);
    };
    api[patternName] = request;
  });

  return api;
}