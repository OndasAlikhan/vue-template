import axios from 'axios';
export default function useAxios() {
  const axiosClient = axios.create({
    baseURL: `https://api.example.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  axiosClient.interceptors.response.use(
    function (response) {
      return response;
    }, 
    function (error) {
      let res = error.response;
      if (res.status == 401) {
        window.location.href = 'https://example.com/login';
      }
      console.error('Looks like there was a problem. Status Code: ' + res.status);
      return Promise.reject(error);
    }
  );
  return axiosClient
}
