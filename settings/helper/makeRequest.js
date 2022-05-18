import axios from 'axios';

export default ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {}
}) => {
  return axios({
    url,
    method,
    headers,
    params,
    data
  });
};

// Принимаем параметры и возвращаем промис
